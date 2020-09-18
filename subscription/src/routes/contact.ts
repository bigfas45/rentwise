import express, { Request, Response } from 'express';
import {
  requireAuth,
  currentUser,
  validateRequest,
  BadRequestError,
} from '@rentwise/common';
import { Contact } from '../models/contact';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/api/subscription/newletter',

  [body('email').isEmail().withMessage('Email must be valid')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email } = req.body;

    const existingEmail = await Contact.findOne({ email });

    if (existingEmail) {
      throw new BadRequestError('Your email already exist in our database');
    }

    const contact = Contact.build({
      email: email,
    });
    await contact.save();

    res.status(201).send({
      contact,
    });
  }
);

export { router as ContactRouter };
