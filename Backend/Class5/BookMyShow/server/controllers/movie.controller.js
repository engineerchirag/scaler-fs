import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";
import User from "../models/user.model.js";

export const createMovie = async (req, res) => {
    const movieData = req.body;
    try {

        console.log('theatre1 > ', movieData.theatre);
        let theatre = await Theatre.findOne({name: movieData.theatre?.name});
        console.log('theatre2 > ', theatre);
        if(!theatre) {
            theatre = await Theatre.create(movieData.theatre);
        }
        console.log('theatre3 > ', theatre);

        const data = await Movie.create({ ...movieData, theatre: theatre._id });
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e);
    }
} 

export const getMovies = async (req, res) => {
    const type = req.query.type; // ALL, UPCOMING, LIVE
    const title = req.query.title;
    let queryFilter = {};
    if (title) {
        queryFilter.title = new RegExp(title, 'g');
    }
    switch(type) {
        case 'ALL': {
            break;
        }
        case 'UPCOMING': {
            queryFilter.releaseDate = { $gt: new Date() } ; //UPCOMING
            break;
        }
        case  'LIVE': {
            queryFilter.releaseDate = { $lte: new Date() } ; //LIVE
            break;
        }
        default:
            break;
    }
   
    try {
        const data = await Movie.find(queryFilter).populate('theatre');
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e);
    }
}