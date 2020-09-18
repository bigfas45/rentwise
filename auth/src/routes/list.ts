import express, { Request, Response, Router } from 'express';
import {
  currentUser,
  requireAuthAdmin,
  requireAuth,
  NotFoundError
} from '@rentwise/common';
import { User } from '../models/user';

const router = express.Router();

router.get(
  '/api/users',
  currentUser,
  requireAuth,
  requireAuthAdmin,
 async (req: Request, res: Response) => {
    const user = await User.find({});

    if (!user) {
      throw new NotFoundError();
    }

    res.status(200).send(user);
  }
);

export { router as ListUserRouter };
