import express, { Request, Response } from 'express';
import {
  requireAuth,
  currentUser,
  validateRequest,
  BadRequestError,
  NotFoundError
} from '@rentwise/common';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/api/subscription/bank',

 body('bank_account')
      .not()
      .isEmpty()
      .withMessage('Account number  is required.'),
 body('bank_code')
      .not()
      .isEmpty()
      .withMessage('Bank code is required'),
  validateRequest,
  async (req: Request, res: Response) => {
    const { bank_account, bank_code } = req.body;
    

 var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://api.paystack.co/bank/resolve?account_number=${bank_account}&bank_code=${bank_code}`,
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
  // console.log(data);

  // if (data.status === false) {
      
  //   res.send({errors: data.message})
  //     // throw new BadRequestError('Cannot pay for a cancelled order');
  //     // throw new NotFoundError();
  // }
  
  // if (data.status ===true ) {
     res.send(data);
  // }

   



});





    

  
  }
);

export { router as BankRouter };
