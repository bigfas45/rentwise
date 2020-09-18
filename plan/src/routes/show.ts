import express, {Request, Response} from 'express';
import { NotFoundError} from '@rentwise/common';
import {Plan} from '../models/plan';

const router = express.Router();

router.get('/api/plan/:id', async (req : Request, res : Response) => {
  const plan = await Plan.findById(req.params.id);

  if (!plan) {
    throw new NotFoundError();

  }

  res.send(plan);

});

export {
    router as showPlanRouter
};
