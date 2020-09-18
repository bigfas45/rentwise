import express, { Request, Response } from 'express';
import {requireAuth, NotFoundError, NotAuthorizedError} from '@rentwise/common';
import {Order} from '../models/orders'

const router = express.Router();

router.get('/api/orders/:orderId',requireAuth,async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.orderId).populate('plan');
  if (!order) {
    throw new NotFoundError();
  }
  if (order.userId !== req.currentUser!.id) {
    throw new NotAuthorizedError();
  }
  res.send(order);
});

export {router as showOrderRouter }