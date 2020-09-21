import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError,VerificationStatus } from '@rentwise/common';
import { User } from '../models/user';
import {email} from './email/email';
import {natsWrapper} from '../nats-wrapper'
import {UserCreatedPublisher} from '../events/publisher/user-created-publisher'

// import {currentUser} from '@nasdtickets/common';

const router = express.Router();

router.post(
  '/api/users/signup',

  [
    body('email')
      .normalizeEmail()
      .trim()
      .isEmail()
      .withMessage('Email must be vaild'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 4 and 20 chracters')
      .matches(/\d/)
      .withMessage('Password must contain a number'),
    body('firstname')
      .not()
      .isEmpty()
      .withMessage('Firstname is required'),
    body('lastname')
      .not()
      .isEmpty()
      .withMessage('Lastname is required'),
    body('telephone')
      .notEmpty()
      .matches(/^\d+$/)
      .withMessage('Invalid telephone number'),
    
  ],
  validateRequest,

  async (req: Request, res: Response) => {
    const {
      email,
      password,
      firstname,
      lastname,
      telephone,
      userType
    } = req.body;

    const existingUser = await User.findOne({ email });
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + 60 * 60);

    if (existingUser) {
      // console.log('Email in use');
      // return res.send({})
      throw new BadRequestError('Email Already In Use');
    }

    const user = User.build({
      email,
      password,
      firstname,
      lastname,
      telephone,
      userType,
      verification: VerificationStatus.Unverified,
      expiresAt: expiration,
    });

    await user.save();

    // Publish an event that a user was created

    new UserCreatedPublisher(natsWrapper.client).publish({
      id: user.id,
      email: user.email,
      lastname: user.lastname,
      firstname: user.firstname,
      userType: user.userType!,
      expiresAt: user.expiresAt,
      verification: user.verification
    })




    // Generate JWT

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        telephone: user.telephone,
        userType: user.userType,
        verification: user.verification,
        bank: user.bank,
        bvn: user.bvn,
        address: user.address,
        dob: user.dob,
        status: user.status
      },
      process.env.JWT_KEY!
    );

    // store it on session object

    req.session = {
      jwt: userJwt
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
