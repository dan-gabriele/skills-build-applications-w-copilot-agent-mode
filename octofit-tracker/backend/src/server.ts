import express from 'express';
import './config/database';
import apiRoutes from './routes/api';

const app = express();
const port = Number(process.env.PORT || 8000);

const codespaceName = process.env.CODESPACE_NAME;
export const BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', apiRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit backend listening on port ${port}`);
});
