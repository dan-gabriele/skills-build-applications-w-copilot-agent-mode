import { Router } from 'express';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';
import { getApiBaseUrl } from '../utils/baseUrl';

const router = Router();

const sendCollection = async (res: any, model: any) => {
  const data = await model.find({});
  res.json({
    message: 'Collection endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
};

router.get(['/users', '/users/'], async (_req, res) => {
  const data = await User.find({});
  res.json({
    message: 'Users endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
});

router.get(['/teams', '/teams/'], async (_req, res) => {
  const data = await Team.find({});
  res.json({
    message: 'Teams endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
});

router.get(['/activities', '/activities/'], async (_req, res) => {
  const data = await Activity.find({});
  res.json({
    message: 'Activities endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
});

router.get(['/leaderboard', '/leaderboard/'], async (_req, res) => {
  const data = await LeaderboardEntry.find({}).sort({ rank: 1 });
  res.json({
    message: 'Leaderboard endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
});

router.get(['/workouts', '/workouts/'], async (_req, res) => {
  const data = await Workout.find({});
  res.json({
    message: 'Workouts endpoint',
    apiBaseUrl: getApiBaseUrl(),
    data
  });
});

export default router;
