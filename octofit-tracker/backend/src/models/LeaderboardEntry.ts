import mongoose, { Schema, type Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  username: string;
  points: number;
  rank: number;
}

const LeaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  username: { type: String, required: true, unique: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true }
});

export const LeaderboardEntry = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', LeaderboardEntrySchema);
