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
  '/api/orders/card/:reference',
  async (req: Request, res: Response) => {
    const reference = req.params.reference;
    const card = await Card.findOne({
      reference: reference,
    });

    if (!card) {
      throw new NotAuthorizedError();
    }
    await card.remove();

    // 1621523621906 1621523621906

    res.send('Card deleted');
  }
);

export { router as deleteCardRouter };
