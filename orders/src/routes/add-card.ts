import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  OrderStatus,
  OrderDebitType,
  currentUser
} from '@rentwise/common';
import { Card } from '../models/card';


const router = express.Router();

router.post(
  '/api/orders/addcard',
  requireAuth,
  [
   
    body('reference').not().isEmpty().withMessage('Rference is required'),  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
     reference
    } = req.body;

     const card = Card.build({
       userId: req.currentUser!.id,
       reference: reference
    });

    await card.save();

     res.status(201).send({card});
  }
);

export { router as addCardRouter };
