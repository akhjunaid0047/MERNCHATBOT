import express from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index';
import cors from 'cors';
import cookieParser from 'cookie-parser';
config();
const app = express();
app.use(
  cors({
    origin: 'https://mernchatbot.vercel.app',
    credentials: true,
  }),
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', appRouter);
export default app;
