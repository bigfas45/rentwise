import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
  requireAuthAdmin,
  currentUser,
} from '@rentwise/common';
import { Subscription } from '../models/subscription';

const router = express.Router();

router.get(
  '/api/subscription/user/:userId',
  requireAuth,
  requireAuthAdmin,
  async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const subscription = await Subscription.find({ userId: userId }).populate(
      'order'
    );
    res.send(subscription);
  }
);

export { router as showUserSubscriptionRouter };
