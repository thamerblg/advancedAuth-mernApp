import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/authRoute.js';

dotenv.config();
const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('started Working');
    });

app.use('api/auth', authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
    });