import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, lowercase: true, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true, select: false },
    created_at: { type: String, currentTime: () => Math.floor(Date.now()) },
    updated_at: { type: String, currentTime: () => Math.floor(Date.now()) },
});

UserSchema.pre<UserInterface>("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

export default model<UserInterface>("User_sms", UserSchema);