import express, { Request, Response } from 'express';
import { Plan } from '../models/plan';

const router = express.Router();

router.get('/api/plan', async (req: Request, res: Response) => {
  const plan = await Plan.find({});

  res.send(plan);
});

export { router as indexPlanRouter };
