import mongoose from 'mongoose';
import {Password} from '../services/password'
import {Pin} from '../services/pin'
import {VerificationStatus} from '@rentwise/common'

// An interface that describe the properties that are required to create a new User

interface UserAttrs {
   
  firstname: string;
  lastname: string;
  telephone: string;
  email: string;
  password: string;
  bank?: string;
  dob?: Date;
  userType?: number
  bvn?: string;
  verification: VerificationStatus;
  expiresAt: Date;
  address?: string;
  status?: number;

  
}

// An interface that describes the properties that a user model has

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs : UserAttrs): UserDoc;
}

// An interface that describes the properties that a user document has

interface UserDoc extends mongoose.Document {
  firstname: string;
  lastname: string;
  telephone: string;
  email: string;
  password: string;
  bank?: string;
  userType?: number
  bvn?: string;
  dob?: Date;
  verification: VerificationStatus;
  expiresAt: Date;
  address?: string;
  status?: number;



}

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bank: {
    type: String,
  },
  address: {
    type: String,
  },
  userType: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 1
  },
  bvn: {
    type: String,
  },
  verification: {
    type: String,
    required: true,
    enum: Object.values(VerificationStatus),
    default:VerificationStatus.Unverified,

  },
  expiresAt: {
    type: mongoose.Schema.Types.Date
},
dob: {
  type: mongoose.Schema.Types.Date
},
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    
    done();
});



userSchema.statics.build = (attrs : UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export {
    User
};
