import mongoose, { Schema, type Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  fitnessGoal: string;
  level: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  fitnessGoal: { type: String, required: true },
  level: { type: String, required: true }
});

export const User = mongoose.model<IUser>('User', UserSchema);
