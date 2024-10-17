import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDB.js';

import authRoutes from './routes/auth.route.js';

dotenv.config();
const PORT = process.env.PORT || 7000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Santosh');
});

//middlewares
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server connected at port ${PORT}`);
});
