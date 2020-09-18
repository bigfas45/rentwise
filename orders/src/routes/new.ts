import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  OrderStatus,
  OrderDebitType
} from '@rentwise/common';
import { body } from 'express-validator';
import { Order } from '../models/orders';
import { Plan } from '../models/plan';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';
// var paystack = require('paystack')('sk_test_3f85c1ff3da6206ee37ca7698d9ddeec943056b9');
import { paystack } from '../paystack';

const router = express.Router();

router.post(
  '/api/orders',
  requireAuth,
  [
    body('planId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('Plan Id must be provided'),
    body('name').not().isEmpty().withMessage('Title is required'),
    body('description').not().isEmpty().withMessage('Title is required'),
    body('amount')
      .isFloat({ gt: 0 })
      .withMessage('Return must be greater than 0'),
    body('debitType').not().isEmpty().withMessage('Debit type is required'),
    body('interval').not().isEmpty().withMessage('Saving type is required'),
    body('expiresAt').not().isEmpty().withMessage('Expires at is required'),
    body('startDate').not().isEmpty().withMessage('Start Date  is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      planId,
      name,
      description,
      debitType,
      amount,
      interval,
      expiresAt,
      startDate
    } = req.body;

    // Find the plan the user is trying to order in the database
    const plan = await Plan.findById(planId);
    if (!plan) {
      throw new NotFoundError();
    }

    // Calculate an expiration date for the order
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + expiresAt);

    var past_date = new Date(expiresAt);
var current_date = new Date(startDate);

var difference = (past_date.getFullYear()*12 + past_date.getMonth() - (current_date.getFullYear()*12 + current_date.getMonth()) );   

    // Create a Plan using order details on paystack

    const promis1 = paystack.createPlan({
      name: name,
      interval: interval,
      amount: amount * 100,
      description: description,
      send_invoices: true,
      currency: 'NGN',
      invoice_limit: difference,
      send_sms: true
    });

    
    promis1 // @ts-ignore
      .then(function (response) {
        var plan_code2 = JSON.stringify(response.body.data.plan_code);

        plan_code2 = JSON.parse(plan_code2);

        // create a subscrition


        //    end subscription creation

        const order = Order.build({
          userId: req.currentUser!.id,
          status: OrderStatus.Created,
          expiresAt: expiresAt,
          interval: interval,
          plan,
          planId,
          amount: amount,
          name: name,
          description: description,
          debitType: debitType,
          plan_code: plan_code2,
          startDate: startDate
        });

        order.save();

        // publish an event saying that an order was created
        new OrderCreatedPublisher(natsWrapper.client).publish({
          id: order.id,
          status: order.status,
          version: order.version,
          expiresAt: order.expiresAt,
          interval: order.interval,
          amount: order.amount,
          name: order.name,
          description: order.description,
          debitType: order.debitType,
          userId: order.userId,
          plan_code: order.plan_code,
          startDate: order.startDate,

          plan: {
            id: plan.id,
            title: plan.title,
            description: plan.description,
            returnPercentage: plan.returnPercentage,
            minDuration: plan.minDuration
          }
        });

        res.status(201).send(order);

        
      })// @ts-ignore
      .catch(function (error) {
        // deal with error
        console.log(error);
      });

    //    await order.save();
  }
);

export { router as newOrderRouter };
