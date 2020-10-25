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

router.get(
  '/api/subscription/my/webhook/subscription/',
  async (req: Request, res: Response) => {
    // Retrieve the request's body
    var event = req.body;
    // Do something with event
    console.log("event", event);
    res.status(200).send({event})
  }
);

export { router as webHookRouter };
