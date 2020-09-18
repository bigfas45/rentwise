import mongoose from 'mongoose';
import {updateIfCurrentPlugin} from 'mongoose-update-if-current'

interface PlanAttrs {
  id: string;
  title: string;
  description: string;
  returnPercentage: number;
  minDuration: number;
}

export interface PlanDoc extends mongoose.Document {
   id: string;
   version: number;
  title: string;
  description: string;
  returnPercentage: number;
  minDuration: number;
}

interface PlanModel extends mongoose.Model<PlanDoc>{
  build(attrs : PlanAttrs): PlanDoc;
  findByEvent(event: {id: string, version: number}): Promise<PlanDoc | null>;

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
  }
 
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

planSchema.statics.findByEvent = (event: {id: string, version: number}) => {
return Plan.findOne({
  _id: event.id,
  version: event.version - 1
})
}
planSchema.statics.build = (attrs : PlanAttrs) => {
  return new Plan({
    _id: attrs.id,
    title: attrs.title,
    description: attrs.description,
    returnPercentage: attrs.returnPercentage,
    minDuration: attrs.minDuration
  });
};


const Plan = mongoose.model<PlanDoc, PlanModel>('Plan', planSchema);


export {
  Plan
};