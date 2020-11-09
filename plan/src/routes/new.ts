import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  requireAuthAdmin,
} from '@rentwise/common';
import { Plan } from '../models/plan';
import { PlanCreatedPublisher } from '../events/publishers/plan-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();


router.post(
  '/api/plan',
  requireAuth,
  requireAuthAdmin,
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').not().isEmpty().withMessage('Title is required'),
    body('returnPercentage')
      .isFloat({ gt: 0 })
      .withMessage('Return must be greater than 0'),
    body('minDuration')
      .isFloat({ gt: 0 })
      .withMessage('Duration must be greater than 0'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, description, returnPercentage, minDuration, image } = req.body;

    const plan = Plan.build({
      title,
      description,
      returnPercentage,
      minDuration,
      userId: req.currentUser!.id,
      image
    });

    await plan.save();

    new PlanCreatedPublisher(natsWrapper.client).publish({
      id: plan.id,
      title: plan.title,
      description: plan.description,
      returnPercentage: plan.returnPercentage,
      minDuration: plan.minDuration,
      userId: plan.userId,
      version: plan.version,
    });

    res.status(201).send(plan);
  }
);

export { router as createPlanRouter };
