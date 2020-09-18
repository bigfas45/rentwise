import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  NotAuthorizedError,
  NotFoundError,
  BadRequestError,
  requireAuthAdmin
} from '@rentwise/common';
import { Plan } from '../models/plan';
import {PlanUpdatedPublisher} from '../events/publishers/plan-updated-publisher';
import {natsWrapper} from '../nats-wrapper'

const router = express.Router();

router.put(
  '/api/plan/:id',
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
      .withMessage('Duration must be greater than 0')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, description, returnPercentage, minDuration } = req.body;

    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      throw new NotFoundError();
    }

    if (plan.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    plan.set({
      title,
      description,
      returnPercentage,
      minDuration,
    });
    
    await plan.save();

    new PlanUpdatedPublisher(natsWrapper.client).publish({
      id: plan.id,
      version: plan.version,
      title: plan.title,
      description: plan.description,
      returnPercentage: plan.returnPercentage,
      minDuration: plan.minDuration,
      userId: plan.userId
  });

    

    res.send(plan);
  }
);

export { router as updatePlanRouter };
