import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
import { OrderStatus, OrderDebitType } from '@rentwise/common';

interface OrderAttrs {
  id: string;
  version: number;
  status: OrderStatus;
  amount: number;
  userId: string;
  plan_code: string;
  debitType: OrderDebitType;
  startDate: Date;
  plan_id?: string;

}

export interface OrderDoc extends mongoose.Document {
  version: number;
  status: OrderStatus;
  amount: number;
  userId: string;
  plan_code: string;
  debitType: OrderDebitType;
  startDate: Date;
  plan_id?: string;



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
    plan_id: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    plan_code: {
      type: String,
      required: true,
    },
    debitType: {
      type: String,
      required: true,
      enum: Object.values(OrderDebitType),
      default:OrderDebitType.Automatic,
  
    },
    startDate: {
      type: mongoose.Schema.Types.Date
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
  return new Order({
    _id: attrs.id,
    version: attrs.version,
    amount: attrs.amount,
    userId: attrs.userId,
    status: attrs.status,
    plan_code: attrs.plan_code,
    debitType: attrs.debitType,
    startDate: attrs.startDate,

  });
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };