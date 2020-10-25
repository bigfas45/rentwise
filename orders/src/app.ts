import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import { errorHandler, NotFoundError, currentUser } from '@rentwise/common';
import cookieSession from 'cookie-session';
import {indexOrderRouter} from './routes/index'
import {showOrderRouter} from './routes/show'
import {deleteOrderRouter} from './routes/delete'
import {newOrderRouter} from './routes/new'
import {updateOrderRouter} from './routes/updates'
import {PlanOrderRouter} from './routes/orders-plan'
import {UserOrderRouter} from './routes/order-users'
import {addCardRouter} from './routes/add-card'
import {indexCardsRouter} from './routes/cards'


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: false
}));

app.use(currentUser);
app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(deleteOrderRouter);
app.use(newOrderRouter);
app.use(updateOrderRouter);
app.use(PlanOrderRouter);
app.use(UserOrderRouter);
app.use(addCardRouter);
app.use(indexCardsRouter);





app.all('*', async (req, res, next) => {
    throw new NotFoundError();
});

app.use(errorHandler);


export {
    app
};
