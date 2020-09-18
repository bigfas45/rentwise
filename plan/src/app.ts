import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import { errorHandler, NotFoundError, currentUser } from '@rentwise/common';
import {createPlanRouter} from './routes/new';
import {showPlanRouter} from './routes/show';
import {indexPlanRouter} from './routes/index';
import {updatePlanRouter} from './routes/update';


import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure:false
}));

app.use(currentUser);

app.use(createPlanRouter);
app.use(showPlanRouter);
app.use(indexPlanRouter);
app.use(updatePlanRouter);



app.all('*', async (req, res, next) => {
    throw new NotFoundError();
});

app.use(errorHandler);


export {
    app
};
