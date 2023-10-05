import { Schema, model } from "mongoose";

// {
//     id: ObjectId(),
//     title: String,
//     image: String,
//     description: String,
//     authorName: String,
//     createdOn: Date,
// }

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    authorName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Blog = model('Blog', BlogSchema);

export default Blog;