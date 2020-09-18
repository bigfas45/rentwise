import mongoose, { version } from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

import { OrderStatus, OrderInterval, OrderDebitType } from '@rentwise/common';
import { PlanDoc } from './plan';

interface OrderAttrs {
  userId: string;
  status: OrderStatus;
  name: string;
  interval: OrderInterval;
  amount: number;
  debitType: OrderDebitType;
  description: string;
  plan_code?: string;
  planId?: string;
  expiresAt: Date;
  plan: PlanDoc;
  startDate: Date;
}

interface OrderDoc extends mongoose.Document {
  userId: string;
  status: OrderStatus;
  name: string;
  amount: number;
  interval: OrderInterval;
  debitType: OrderDebitType;
  description: string;
  expiresAt: Date;
  plan_code?: string;
  planId?: string;
  plan: PlanDoc;
  version: number;
  startDate: Date;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created,
    },
    interval: {
      type: String,
      required: true,
      enum: Object.values(OrderInterval),
      default: OrderInterval.Monthly,
    },
    debitType: {
      type: String,
      required: true,
      enum: Object.values(OrderDebitType),
      default: OrderDebitType.Automatic,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    plan_code: {
      type: String,
    },
    planId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
    startDate: {
      type: mongoose.Schema.Types.Date,
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin);

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };
