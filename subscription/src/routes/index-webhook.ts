import express, { Request, Response } from 'express';
import {requireAuth, currentUser} from '@rentwise/common';
import {Webhook} from '../models/webhook'


const router = express.Router();

router.get('/api/subscription/webhook/subscription', requireAuth, async (req: Request, res: Response) => {
   const subscriptions = await Webhook.find();
   res.send(subscriptions);
} );

export {router as indexWebhookSubRouter }