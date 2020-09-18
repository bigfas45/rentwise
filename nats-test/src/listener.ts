import nats from 'node-nats-streaming';
import {randomBytes} from 'crypto'
import {PlanCreatedListener} from './events/plan-created-listener'

console.clear()

const stan = nats.connect('rentwise', randomBytes(4).toString('hex'), {url: 'http://localhost:4222'});


stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close', () => {
        console.log('Nats connection closed');
        process.exit();
    })



new PlanCreatedListener(stan).listen();

});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());





