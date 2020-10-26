import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
  requireAuthAdmin,
  currentUser,
} from '@rentwise/common';
import { Subscription } from '../models/subscription';

const router = express.Router();

router.post(
  '/api/subscription/my/webhook/subscription/',
  async (req: Request, res: Response) => {
    // Retrieve the request's body
    var event = req.body;
    // Do something with event
    console.log("event", event.data);
    res.status(200).send({event})
  }
);

export { router as webHookRouter };
