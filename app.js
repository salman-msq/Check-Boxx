import express from 'express';
import apiRoute, { apiProtected } from './src/routes/api.js';
import mongoose from 'mongoose';
import { DB_CONNECT } from './src/utils/constants.js';
import AuthMiddleware from './src/middlewares/AuthMiddleware.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(DB_CONNECT, {
    //useNewUrlParse: true,
});


app.use('/api/', apiRoute);
app.use('/api/', AuthMiddleware, apiProtected);

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build')));
    res.sendFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build', 'index.html'));
});

app.get('/login', (req, res) => {
    app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build')));
    res.sendFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build', 'index.html'));
});

app.get('/register', (req, res) => {
    app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build')));
    res.sendFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client', 'build', 'index.html'));
});

const PORT = 7000;
app.listen(PORT, () => console.log('Server Started'));
