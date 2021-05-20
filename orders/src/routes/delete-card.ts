import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from '@rentwise/common';
import { Card } from '../models/card';
import { natsWrapper } from '../nats-wrapper';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';

const router = express.Router();

router.delete(
  '/api/orders/card/:userId',
  async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const card = await Card.findOne({
      userId: userId,
    });

    if (!card) {
      throw new NotAuthorizedError();
    }
    await card.remove();

    res.send('Card deleted');
  }
);

export { router as deleteCardRouter };
