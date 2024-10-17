import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDB.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Santosh');
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server connected at port ${PORT}`);
});
