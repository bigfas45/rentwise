let PayStack = require('paystack-node');

const environment = process.env.NODE_ENV;
let APIKEY = 'sk_test_57c8ea757206e92301543f914d45843ab9466bcf'
export const paystack = new PayStack(APIKEY , environment)