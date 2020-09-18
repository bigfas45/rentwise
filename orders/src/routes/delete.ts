import express, {Request, Response} from 'express';
import {requireAuth, NotAuthorizedError, NotFoundError, OrderStatus} from '@rentwise/common';
import {Order} from '../models/orders';
import {natsWrapper} from '../nats-wrapper';
import {OrderCancelledPublisher} from '../events/publishers/order-cancelled-publisher';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req : Request, res : Response) => {
    const {orderId} = req.params
    const order = await Order.findById(orderId).populate('plan');

    if (! order) {
        throw new NotAuthorizedError();
    }

    if (order.userId !== req.currentUser !.id) {
        throw new NotFoundError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    // publish an event saying this was cancelled

    new OrderCancelledPublisher(natsWrapper.client).publish({
        id: order.id,
        version: order.version,
        plan: {
            id: order.plan.id
        }

    })


    res.status(204).send(order);

});

export {
    router as deleteOrderRouter
}
