import express, {Request, Response} from 'express';
import {NotAuthorizedError} from '@rentwise/common';
import {User} from '../models/user'
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/users/password-reset/:userId', 
[
  body('password').trim().notEmpty().withMessage('You must supply a password')
],
 async (req : Request, res : Response) => {

  const {password} = req.body

  const userId = req.params.userId;

  const user = await User.findById(userId);

  if (!user) {
    throw new NotAuthorizedError();
  }

  user.set({
    password: password
  });

  await user.save();

  res.status(201).send(user);

});

export {
    router as PasswordResetRouter
};
