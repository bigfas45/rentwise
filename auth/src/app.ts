import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from '@rentwise/common';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { EmailVerificationRouter } from './routes/verification-email';
import { PasswordResetRouter } from './routes/password-reset';
import { PasswordResetEmailRouter } from './routes/password-reset-email';
import { UserUpdateRouter } from './routes/update';
import { AdminUserUpdateRouter } from './routes/admin-update-user';
import { ListUserRouter } from './routes/list';
import { UserRouter } from './routes/user';
import { EmailUser } from './routes/email-user';

import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(EmailVerificationRouter);
app.use(PasswordResetRouter);
app.use(PasswordResetEmailRouter);
app.use(UserUpdateRouter);
app.use(AdminUserUpdateRouter);
app.use(ListUserRouter);
app.use(UserRouter);
app.use(EmailUser);

app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
