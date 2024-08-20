import mongoose from "mongoose";
const { Schema } = mongoose;

const usrSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordTokenExpiredAt: Date,
    verificationToken: String,
    verificationTokenExpiredAt: Date
}, {timestamps: true});

export default mongoose.model("Usr", usrSchema);