import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from '@rentwise/common';
import { Plan } from '../models/plan';
import { natsWrapper } from '../nats-wrapper';
// import {OrderCancelledPublisher} from '../events/publishers/order-cancelled-publisher';

const router = express.Router();

router.delete('/api/plan/:planId', async (req: Request, res: Response) => {
  const { planId } = req.params;
  const plan = await Plan.findById(planId);

  if (!plan) {
    throw new NotAuthorizedError();
  }

  if (plan.userId !== req.currentUser!.id) {
    throw new NotFoundError();
  }

  await plan.remove();

  res.status(204).send('Plan was successfully deleted');
});

export { router as deletePlanRouter };
