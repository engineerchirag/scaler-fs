import express from 'express';
import UserRouter from './routes/user.routes.js';
import loggerMiddleware from './middleware/logger.js';

const app = express();




app.use(express.json());

app.use(loggerMiddleware);

app.use('/api/user', UserRouter);

app.all('*', (req, res) => {
    res.status(404).send('<html><body><h1 style="color: red;">Page not found</h1></body></html>');
})

app.listen(5020, () => {
    console.log('Server is running at http://loclahost:5020');
});