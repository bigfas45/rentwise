import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
  requireAuthAdmin,
  OrderStatus,
  BadRequestError,
  currentUser,
} from '@rentwise/common';
import { Subscription } from '../models/subscription';
import { Order } from '../models/orders';


const router = express.Router();

var orderId = '5f95814c27a77400187f9e08';
var crypto = require('crypto');
var secret = process.env.SECRET_KEY;

router.post(
  '/api/subscription/my/webhook/subscription/',
 async (req: Request, res: Response) => {
     
   const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
  

    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError('Cannot pay for a cancelled order');
    }

  
    // Retrieve the request's body
    var event =  req.body;
    // Do something with event
   

   
   var hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    var event = req.body;
 const subscription = Subscription.build({
        order: order,
      orderId: "orderId",
      userId: req.currentUser!.id,

    });
      await subscription.save();
   }
   
   res.send(200);

   
   
   }

);

export { router as webHookRouter };
