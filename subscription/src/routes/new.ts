import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  BadRequestError,
  NotFoundError,
  NotAuthorizedError,
  OrderStatus,
  OrderDebitType,
} from '@rentwise/common';
import { Order } from '../models/orders';
import { paystack } from '../paystack';
import { Subscription } from '../models/subscription';
import { SubscriptionCreatedPublisher } from '../events/publishers/subscription-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/subscription',
  requireAuth,
  [body('orderId').not().isEmpty(),
   body('customer').not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const {  orderId, customer } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError('Cannot pay for a cancelled order');
    }
    // var reference = mongoose.Types.ObjectId().toHexString();

    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.paystack.co/subscription',
  'headers': {
    'Authorization': 'Bearer sk_test_57c8ea757206e92301543f914d45843ab9466bcf',
    'Content-Type': 'application/json'
  },
  form: {
    'customer': customer,
    'plan': order.plan_code
  }
    };
    // @ts-ignore
request(options, function (error, response) {
  if (error) throw new Error(error);
   const data = JSON.parse(response.body)


     const subscription = Subscription.build({
      order: order,
      orderId: orderId,
      userId: req.currentUser!.id,

    });
  subscription.save();
  
      res.status(201).send({
      subscription,
    })
 

});

    
  

 
  }
);

export { router as createChargeRouter };
