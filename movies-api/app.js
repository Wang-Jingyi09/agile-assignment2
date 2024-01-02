import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './api/users';
import './db';
import defaultErrHandler from './errHandler'
import moviesRouter from './api/movies';   //import movies router
import genresRouter from './api/genres';
import reviewsRouter from './api/reviews';
import actorsRouter from './api/actors';
import * as path from 'path';

import authenticate from './authenticate';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('client'));
//app.use(authenticate);


app.use('/api/actors', actorsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/movies',  moviesRouter);
app.use('/api/reviews',  reviewsRouter);
app.use('/api/users', usersRouter);


app.use(function(req, res) {
    res.sendFile(path.resolve(__dirname, './client/index.html'));
})
//app.use(defaultErrHandler);

export default app;
