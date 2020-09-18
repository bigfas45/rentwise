import mongoose from 'mongoose';
import {OrderDoc} from './orders'

interface SubscriptionAttrs {
    order: OrderDoc;
    orderId: string;
    userId: string;
    // planId: string;
}


interface SubscriptionDoc extends mongoose.Document {
    orderId : OrderDoc;
    order: string;
    userId: string;
    // planId: string;

}

interface SubscriptionModel extends mongoose.Model<SubscriptionDoc> {
    build(attrs : SubscriptionAttrs): SubscriptionDoc
}

const subscriptionSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    // planId: {
    //     type: String,
    //     required: true
    // },
   
},



// {
//     toJSON: {
//         transform(doc, ret) {
//             ret.id = ret._id;
//             delete ret._id;
//         }
//     },
// },
{timestamps: true}

);

subscriptionSchema.statics.build = (attrs : SubscriptionAttrs) => {
    return new Subscription(attrs);
}


const Subscription = mongoose.model<SubscriptionDoc, SubscriptionModel>('Subscription', subscriptionSchema);

export {
    Subscription
};
