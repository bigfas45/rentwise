let PayStack = require('paystack-node');

const environment = process.env.NODE_ENV

export const paystack = new PayStack(process.env.PAYSTACK_KEY_TEST, environment)