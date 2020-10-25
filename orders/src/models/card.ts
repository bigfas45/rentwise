import mongoose from 'mongoose';

interface CardAttrs {
  userId: string;
  reference: string;
  
}



interface CardModel extends mongoose.Model<CardDoc>{
 
build(attrs: CardAttrs): CardDoc;
}


 interface CardDoc extends mongoose.Document {
  userId: string;
  reference: string;
}

const CardSchema = new mongoose.Schema({
  userId: {
      type: String,
      required: true
  },
  reference: {
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





CardSchema.statics.build = (attrs : CardAttrs) => {
  return new Card(attrs);
};


const Card = mongoose.model<CardDoc, CardModel>('Card', CardSchema);


export {
  Card
};