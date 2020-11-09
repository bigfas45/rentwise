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


const router = express.Router();



router.get(
  '/api/subscription/my/webhook/subscription/',
  (req: Request, res: Response) => {
     
 var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.paystack.co/bank',
  'headers': {
    'Authorization': 'Bearer sk_live_6a3b0c48e9ed24166bb496e39f2fe4047cfb681a'
  },
  formData: {

  }
};
    // @ts-ignore
request(options, function (error, response) {
  if (error) throw new Error(error);
  const data = JSON.parse(response.body)
  
      res.status(201).send(
      data.data,
    )
 
});

   
   

   
   
   }

);

export { router as webHookRouter };
