import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);




const CONNECTION_URL = 'mongodb+srv://lukebwood:lukebwood123@cluster0.8ukh4lu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, ()=> console.log("Server running on :" + PORT)))
    .catch((error) => console.log(error.message));
