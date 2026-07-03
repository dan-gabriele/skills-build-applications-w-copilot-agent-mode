import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      {
        username: 'mariafit',
        email: 'maria@example.com',
        passwordHash: 'hashed_password_1',
        fitnessGoal: 'Build endurance',
        level: 'Intermediate'
      },
      {
        username: 'jordanrun',
        email: 'jordan@example.com',
        passwordHash: 'hashed_password_2',
        fitnessGoal: 'Improve speed',
        level: 'Advanced'
      },
      {
        username: 'samstrong',
        email: 'sam@example.com',
        passwordHash: 'hashed_password_3',
        fitnessGoal: 'Strength training',
        level: 'Beginner'
      }
    ]);

    await Team.insertMany([
      {
        name: 'Trail Blazers',
        sport: 'Running',
        members: users.slice(0, 2).map((user) => user.username),
        score: 1280
      },
      {
        name: 'Core Crushers',
        sport: 'CrossFit',
        members: [users[2].username],
        score: 980
      }
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'Run',
        durationMinutes: 35,
        distanceKm: 5.2,
        completedAt: new Date('2026-07-01T06:30:00.000Z')
      },
      {
        userId: users[1]._id.toString(),
        type: 'Cycling',
        durationMinutes: 45,
        distanceKm: 18.7,
        completedAt: new Date('2026-07-02T07:15:00.000Z')
      },
      {
        userId: users[2]._id.toString(),
        type: 'Strength',
        durationMinutes: 50,
        distanceKm: 0,
        completedAt: new Date('2026-07-03T18:00:00.000Z')
      }
    ]);

    await LeaderboardEntry.insertMany([
      { username: 'mariafit', points: 1420, rank: 1 },
      { username: 'jordanrun', points: 1380, rank: 2 },
      { username: 'samstrong', points: 1210, rank: 3 }
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run',
        category: 'Cardio',
        difficulty: 'Intermediate',
        estimatedMinutes: 30,
        focus: ['endurance', 'pace']
      },
      {
        title: 'Upper Body Blast',
        category: 'Strength',
        difficulty: 'Beginner',
        estimatedMinutes: 25,
        focus: ['push', 'pull']
      },
      {
        title: 'Cycling Intervals',
        category: 'Cardio',
        difficulty: 'Advanced',
        estimatedMinutes: 40,
        focus: ['power', 'stamina']
      }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
