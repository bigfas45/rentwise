import express, { Request, Response } from 'express';
import {requireAuth, NotFoundError, NotAuthorizedError} from '@rentwise/common';
import {Order} from '../models/orders'

const router = express.Router();

router.get('/api/orders/plan/:planId',requireAuth,async (req: Request, res: Response) => {
  var id = req.params.planId
  //@ts-ignore
  const order = await Order.find({planId: id} ).populate('plan');
  if (!order) {
    throw new NotFoundError();
  }
  
  res.send(order);
});

export {router as PlanOrderRouter }