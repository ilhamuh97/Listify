import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import createHttpError from 'http-errors';

import shoppingItemRoutes from './routes/shoppingItem.route';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

// Routes
app.use('/api/v1/items', shoppingItemRoutes);

app.use((req: Request, res: Response, next) => {
  next(createHttpError(404));
});

export default app;
