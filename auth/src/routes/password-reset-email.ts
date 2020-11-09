import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import {
  validateRequest,
  BadRequestError,
  currentUser,
  NotAuthorizedError
} from '@rentwise/common';
import { User } from '../models/user';
import { email } from './email/password-mail';
import { VerificationStatus } from '../services/verification-status';

const router = express.Router();

router.post(
  '/api/users/password-reset-email',

  body('email').isEmail().withMessage('Email must be valid.'),

  email,
  async (req: Request, res: Response) => {
    res.send({ success: true });
  }
);

export { router as PasswordResetEmailRouter };
