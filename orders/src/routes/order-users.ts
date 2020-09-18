import express, { Request, Response } from 'express';
import {requireAuth, NotFoundError, NotAuthorizedError} from '@rentwise/common';
import {Order} from '../models/orders'

const router = express.Router();

router.get('/api/orders/user/:userId',requireAuth,async (req: Request, res: Response) => {
  var id = req.params.userId
  //@ts-ignore
  const order = await Order.find({userId: id} ).populate('plan');
  if (!order) {
    throw new NotFoundError();
  }
  
  res.send(order);
});

export {router as UserOrderRouter }