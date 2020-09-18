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
  '/api/subscription/:orderId',
  requireAuth,requireAuthAdmin,
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId
    const subscription = await Subscription.find({order:orderId}).populate('order');;
    res.send(subscription);
  }
);

export { router as showSubscriptionRouter };
