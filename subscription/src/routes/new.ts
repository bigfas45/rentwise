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
  [ body('orderId').not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const { token, orderId, access_code,authorization_url } = req.body;
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

    const subscription = Subscription.build({
      order: order,
      orderId: orderId,
      userId: req.currentUser!.id,

    });
    await subscription.save();

    // new SubscriptionCreatedPublisher(natsWrapper.client).publish({
    //   id: subscription.id,
    //   orderId: scription.orderId,
    //   reference: subscription.reference,
    //   access_code: subscription.access_code,
    //   authorization_url: subscription.authorization_url,
    // });

    res.status(201).send({
      subscription,
    });
  }
);

export { router as createChargeRouter };
