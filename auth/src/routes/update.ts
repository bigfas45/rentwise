import express, { Response, Request } from 'express';
import { User } from '../models/user';
import { body } from 'express-validator';
import { NotFoundError, requireAuth, currentUser } from '@rentwise/common';

const router = express.Router();

router.put(
  '/api/users/:userid',
  currentUser,
  requireAuth,

  async (req: Request, res: Response) => {
    const {
      email,
      password,
      firstname,
      lastname,
      telephone,
      userType,
      bvn,
      bank,
      address,
      dob,
      status,
    } = req.body;
    const userId = req.params.userid;
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError();
    }

    if (email) {
      user.set({ email });
    }

    if (password) {
      user.set({ password });
    }
    if (password) {
      user.set({ password });
    }
    if (firstname) {
      user.set({ firstname });
    }
    if (lastname) {
      user.set({ lastname });
    }
    if (telephone) {
      user.set({ telephone });
    }
    if (userType) {
      user.set({ userType });
    }
    if (bvn) {
      user.set({ bvn });
    }
    if (bank) {
      user.set({ bank });
    }
    if (address) {
      user.set({ address });
    }
    if (dob) {
      user.set({ dob });
    }
    if (status) {
      user.set({ status });
    }

    await user.save();

    res.send(user);
  }
);

export { router as UserUpdateRouter };
