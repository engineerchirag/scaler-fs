import mongoose from "mongoose";
import Show from "../models/show.model.js";

export const createShow = async (req, res) => {
    const showDetails = req.body;

    const response =  await Show.create(showDetails);
    res.status(200).send(response);
}

export const showDetail = async (req, res) => {
    const response =  await Show.findById(req.params.showId);
    res.status(200).send(response);
}

export const listShows = async (req, res) => {
    const movieId = req.query.movie;
    const movieDate = req.query.date;
    const response = await Show.aggregate([
        {
            $match: { movie: new mongoose.Types.ObjectId(movieId) },
        },
        {
            $match: {  datetime: { 
                '$gte': new Date(`${movieDate}T00:00:00.000+00:00`), 
                '$lt': new Date(`${movieDate}T23:59:59.999+00:00`), 
            } },
        }
        , {
            $group : { _id : "$theatre", shows: { $push: "$$ROOT" } }        
        }
    ]).exec();
    res.status(200).send(response);
}