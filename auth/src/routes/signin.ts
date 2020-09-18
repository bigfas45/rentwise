import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {User} from '../models/user';
import jwt from 'jsonwebtoken';

import {Password} from '../services/password';
import {validateRequest, BadRequestError} from '@rentwise/common';

// import {currentUser} from '@nasdtickets/common';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply a password')
  ],
  validateRequest, 
 async (req: Request, res: Response) => {
  const {email, password} = req.body;

  const existingUser = await User.findOne({email});
    
        if (!existingUser) {
            throw new BadRequestError('Invalid login details')
        }

        const passwordsMAtch = await Password.compare(existingUser.password, password);

        if (!passwordsMAtch) {
            throw new BadRequestError('Invalid login details') 
        }

         // Generate JWT

        

    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email,
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        telephone: existingUser.telephone,
        userType: existingUser.userType,
        verification: existingUser.verification,
        bank: existingUser.bank,
        bnv: existingUser.bvn,
        address: existingUser.address,
        dob: existingUser.dob,
        status: existingUser.status

    }, process.env.JWT_KEY !);

    // store it on session object

    req.session = {
        jwt: userJwt
    };

    res.status(201).send(existingUser);

    }
);

export { router as signinRouter };
