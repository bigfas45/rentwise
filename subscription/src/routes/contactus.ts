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
  '/api/subscription/contactus',

  [body('email').isEmail().withMessage('Email must be valid')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, firstname, lastname, phone, message } = req.body;

    const contact = Contact.build({
      email,
      firstname,
      lastname,
      phone,
      message,
    });
    await contact.save();

    res.status(201).send({
      contact,
    });
  }
);

export { router as ContactUsRouter };
