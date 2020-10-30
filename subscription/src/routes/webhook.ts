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
import { Webhook } from '../models/webhook';


const router = express.Router();



router.post(
  '/api/subscription/my/webhook/subscription/',
  (req: Request, res: Response) => {
     
 

  
    // Retrieve the request's body
    var event =  req.body;
    // Do something with event
   

   
 
 const webhook = Webhook.build({
      
      userId: req.currentUser!.id,

    });
       webhook.save();
   
   res.status(200).send(webhook);

   
   
   }

);

export { router as webHookRouter };
