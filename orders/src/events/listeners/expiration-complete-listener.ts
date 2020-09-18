import {
  Listener,
  Subjects,
  ExirationCompleteEvent,
  OrderStatus
} from '@rentwise/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/orders';
import {OrderCancelledPublisher} from '../publishers/order-cancelled-publisher';


export class ExpirationCompleteListener extends Listener<
  ExirationCompleteEvent
> {
  subject: Subjects.ExpirationCOmplete = Subjects.ExpirationCOmplete;
  queueGroupName = queueGroupName;

  async onMessage(data: ExirationCompleteEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId).populate('plan');

    // console.log(order?.plan_code);
    // console.log(`https://api.paystack.co/plan/${order?.plan_code}`)

  

 
    // end module

    if (!order) {
      throw new Error('Order not found');
    }

      // pay customer amount due to him via paystack
     // Create a Plan using order details on paystack


     var request = require('request');
     var options = {
       'method': 'PUT',
       'url': `https://api.paystack.co/plan/${order?.plan_code}`,
       'headers': {
         'Authorization': 'Bearer sk_test_3f85c1ff3da6206ee37ca7698d9ddeec943056b9',
         'Content-Type': 'application/json'
       },
       form: {
         'name': 'Monthly retainer (renamed)',
         'plan_code': 0
       }
     };
     request(options, function (error: any, response: any) {
       if (error) throw new Error(error);
       console.log(response.body);
     });

    order.set({
      status: OrderStatus.Cancelled
    });
    await order.save();
   await new OrderCancelledPublisher(this.client).publish({
      id: order.id,
      version: order.version,
      plan: {
        id: order.plan.id
      }
    });

    msg.ack()
  }
}
