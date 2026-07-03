import mongoose, { Schema, type Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  category: string;
  difficulty: string;
  estimatedMinutes: number;
  focus: string[];
}

const WorkoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  estimatedMinutes: { type: Number, required: true },
  focus: [{ type: String, required: true }]
});

export const Workout = mongoose.model<IWorkout>('Workout', WorkoutSchema);
