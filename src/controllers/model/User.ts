import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;

}

const UserSchema: Schema = new Schema({
    name: { type: String, lowercase: true, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
});


export default model<UserInterface>("test_users_sms", UserSchema);