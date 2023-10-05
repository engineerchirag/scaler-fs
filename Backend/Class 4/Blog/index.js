import express from "express";
import BlogRoutes from './routes/blog.routes.js';
import connectToDB from "./config/dbConnection.js";
import {config } from 'dotenv';
import { renderBlogDetail, renderBlogs } from "./controllers/blog.controller.js";
config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.get('/ping', (req, res) => {
    res.status(200).send('Server is up!');
});

app.get('/blogs', renderBlogs);
app.get('/blogs/:blogId', renderBlogDetail);

app.use('/api/blog', BlogRoutes);

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found!');
})

app.listen(5030, async() => {
    await connectToDB();
    console.log(`Server is running on http://localhost:5030`);
})