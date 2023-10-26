import { Schema, model } from "mongoose"

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    trailerVideo: {
        type: String,
        required: true,
    },
    rating: Number,
    casts: [{ 
        name: String, 
        image: String 
    }],
    duration: Number,
    genre: {
        type: String,
        required: true,
        enum: ['Drama', 'Triller', 'Horror', 'Fiction'],
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    languages: [{
        type: String,
        required: true,
        enum: ['English', 'Hindi', 'Telugu'],
    }],
    theatre: {
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        required: true
    }
});

const Movie = new model('movie', MovieSchema);

export default Movie;

