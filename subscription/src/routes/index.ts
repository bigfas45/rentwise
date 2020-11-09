import express, { Request, Response } from 'express';
import {requireAuth, currentUser} from '@rentwise/common';
import {Subscription} from '../models/subscription'


const router = express.Router();

router.get('/api/subscription', requireAuth, async (req: Request, res: Response) => {
   const subscriptions = await Subscription.find().populate('order');
   res.send(subscriptions);
} );


export {router as indexSubRouter }