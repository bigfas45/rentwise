import mongoose from 'mongoose';
import {updateIfCurrentPlugin} from 'mongoose-update-if-current'


interface PlanAttrs {
    title: string;
    description: string;
    returnPercentage: number;
    minDuration: number;
    userId: string;
    image?: string;

}


interface PlanDoc extends mongoose.Document {
    title : string;
    description : string;
    returnPercentage : number;
    minDuration : number;
    userId : string;
    version: number;
    image: string;
}


interface PlanModel extends mongoose.Model<PlanDoc> {
    build(attrs : PlanAttrs): PlanDoc;
}

const planSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    returnPercentage: {
        type: Number,
        required: true
    },
    minDuration: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});
planSchema.set('versionKey', 'version');
planSchema.plugin(updateIfCurrentPlugin);


planSchema.statics.build = (attrs : PlanAttrs) => {
    return new Plan(attrs);
};

const Plan = mongoose.model<PlanDoc, PlanModel>('Plan', planSchema);


export {
    Plan
};
