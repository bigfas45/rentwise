let PayStack = require('paystack-node');

const environment = process.env.NODE_ENV;
let APIKEY = 'sk_live_6a3b0c48e9ed24166bb496e39f2fe4047cfb681a'
export const paystack = new PayStack(APIKEY , environment)