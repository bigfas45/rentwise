import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { EmailUsers } from '../email/email-user';
const router = express.Router();

router.post(
  '/api/subscription/email',

  body('subject').not().isEmpty().withMessage('Subject is required'),
  body('emailBody').not().isEmpty().withMessage('Email body is required'),
  EmailUsers,
  async (req: Request, res: Response) => {
    res.send({ success: true });
  }
);

export { router as EmailUser };
