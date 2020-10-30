import mongoose from 'mongoose';
import {OrderDoc} from './orders'

interface WebhookAttrs {
    userId: string;
    // planId: string;
}


interface WebhookDoc extends mongoose.Document {
    userId: string;
    // planId: string;

}

interface WebhookModel extends mongoose.Model<WebhookDoc> {
    build(attrs : WebhookAttrs): WebhookDoc
}

const WebhookSchema = new mongoose.Schema({
  
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

WebhookSchema.statics.build = (attrs : WebhookAttrs) => {
    return new Webhook(attrs);
}


const Webhook = mongoose.model<WebhookDoc, WebhookModel>('Webhook', WebhookSchema);

export {
    Webhook
};
