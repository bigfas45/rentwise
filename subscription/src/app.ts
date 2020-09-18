import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, NotFoundError, currentUser } from '@rentwise/common';
import { createChargeRouter } from './routes/new';
import { showSubscriptionRouter } from './routes/subscribtion';
import { EmailUser } from './routes/email-user';
import { indexSubRouter } from './routes/index';
import { showUserSubscriptionRouter } from './routes/show';
import { ContactRouter } from './routes/contact';
import { ContactUsRouter } from './routes/contactus';


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

app.use(currentUser);

app.use(createChargeRouter);
app.use(showSubscriptionRouter);
app.use(EmailUser);
app.use(indexSubRouter);
app.use(showUserSubscriptionRouter);
app.use(ContactRouter);
app.use(ContactUsRouter);

app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
