import mongoose from 'mongoose';

interface ContactAttrs {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: number;
  message?: string;
}

interface ContactDoc extends mongoose.Document {
  email: string;
  firstname: string;
  lastname: string;
  phone: number;
  message: string;
}

interface ContactModel extends mongoose.Model<ContactDoc> {
  build(attrs: ContactAttrs): ContactDoc;
}

const ContactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
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

ContactSchema.statics.build = (attrs: ContactAttrs) => {
  return new Contact(attrs);
};

const Contact = mongoose.model<ContactDoc, ContactModel>(
  'Contact',
  ContactSchema
);

export { Contact };
