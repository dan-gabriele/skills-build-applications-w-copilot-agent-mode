import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4 border-bottom pb-3">
        <h1 className="h2 mb-2">OctoFit Tracker</h1>
        <p className="text-muted mb-3">
          Multi-tier fitness dashboard powered by React, Express, and MongoDB.
        </p>
        <p className="small text-muted">
          Define VITE_CODESPACE_NAME in .env.local for Codespaces URLs, otherwise the app uses localhost.
        </p>
        <nav className="nav nav-pills flex-wrap gap-2">
          <NavLink className="nav-link" to="/">Overview</NavLink>
          <NavLink className="nav-link" to="/users">Users</NavLink>
          <NavLink className="nav-link" to="/teams">Teams</NavLink>
          <NavLink className="nav-link" to="/activities">Activities</NavLink>
          <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
          <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="row g-4">
      <div className="col-lg-6">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h2 className="h4">Welcome to OctoFit</h2>
            <p className="text-muted">
              Explore users, teams, workouts, and activity trends through the API-backed dashboard.
            </p>
            <Link className="btn btn-primary" to="/users">View users</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h2 className="h4">API configuration</h2>
            <p className="text-muted">
              The frontend uses import.meta.env.VITE_CODESPACE_NAME when present and falls back to localhost.
            </p>
            <p className="small text-muted mb-0">
              Example target: https://{import.meta.env.VITE_CODESPACE_NAME || 'your-codespace'}-8000.app.github.dev/api/users/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
