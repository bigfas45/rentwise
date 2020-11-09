import express, { Request, Response } from 'express';
import {requireAuth, BadRequestError} from '@rentwise/common';
import {Card} from '../models/card'


const router = express.Router();

router.get('/api/orders/card/:userId', requireAuth, async (req: Request, res: Response) => {
 const userId = req.params.userId
  const card = await Card.findOne({
    userId: userId
  });

      if (!card) {
        throw new BadRequestError('Card details not found. Kindly add your card to proceed.');
  }
  




var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://api.paystack.co/transaction/verify/${card.reference}`,
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
  res.send(data.data);
});  
  
// res.status(201).send(card);


  
  
   
} );

export {router as indexCardsRouter }