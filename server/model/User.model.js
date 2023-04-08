import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provie a unique Username"],
        unique: [true, "Username Already Exists"]
    },
    password: {
        type: String,
        required: [true, "please make a Password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "please provie an Email"],
        unique: true
    },
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type: Number},
    address: {type: String},
    profile: {type: String},

})

export default mongoose.model('User', UserSchema)