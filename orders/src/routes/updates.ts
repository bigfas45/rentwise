import express, { Request, Response } from 'express';
import {requireAuth, NotFoundError, NotAuthorizedError} from '@rentwise/common';
import {Order} from '../models/orders'
import { body } from 'express-validator';
import mongoose from 'mongoose';


const router = express.Router();

router.put('/api/orders/:id', requireAuth, async (req: Request, res: Response) => {
 
  const {  planId,
    name,
    description,
    debitType,
    amount,
    interval,
    expiresAt,
    startDate } = req.body;


  const orders = await Order.findById(req.params.id);

  if (!orders) {
    throw new NotFoundError();
  }

  if (orders.userId !== req.currentUser!.id) {
    throw new NotAuthorizedError();
  }

  orders.set({
    name,
    amount,
    interval,
    debitType,
  });

  await orders.save();


  res.send(orders);



 
} );

export {router as updateOrderRouter }