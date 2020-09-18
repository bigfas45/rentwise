import nats from 'node-nats-streaming';
import {PlanCreatedPublisher} from './events/plan-created-publisher';

console.clear()

const stan = nats.connect('rentwise', 'abc', {
  url: 'http://localhost:4222'
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher =  new PlanCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: 'Plan',
      description: 'Plan',
      returnPercentage: 2,
      minDuration: 2
    })
  } catch (err) {
    console.log(err)
  }
  

  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'xvbnmhjk',
  //   price: 20
  // });

  // stan.publish('plan:created', data, () => {
  //   console.log('Event published');
  // });


});
