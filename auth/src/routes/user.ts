import express, { Request, Response } from 'express';
import { currentUser, NotFoundError } from '@rentwise/common';
import { User } from '../models/user';

const router = express.Router();

router.get('/api/users/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError();
  }

  res.send(user);
});

export { router as UserRouter };
