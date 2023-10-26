import express from  'express';
import UserRoutes from './routes/user.routes.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDatabase from './config/dbConfig.js';
import MovieRoutes from './routes/movie.routes.js';
import ShowRoutes from './routes/show.routes.js';
import cors from 'cors';
config();

const app = express();

app.use(cors()); 

app.use(express.static('public'))

app.use(express.json());

app.use(cookieParser());

app.use('/api/user', UserRoutes);
app.use('/api/movie', MovieRoutes);
app.use('/api/show', ShowRoutes);

app.use('/', express.static('public'));

app.use('*', (req, res) => {
    res.status(400).send('Page not found!');
});
const PORT = process.env.port || 10000;
app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server is running on http://localhost:${PORT}`);
})