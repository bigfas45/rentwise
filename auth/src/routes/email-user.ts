import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {EmailUser} from './email-user';

const router = express.Router();

router.post(
  '/api/users/email',
  body('subject').not().isEmpty().withMessage('Subject is required'),
  body('body').not().isEmpty().withMessage('Email body is required'),
  EmailUser,
  async (req: Request, res: Response) => {
    res.send({ success: true });
  }
);

export { router as EmailUser };
