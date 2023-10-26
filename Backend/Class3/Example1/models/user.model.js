import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: [true, "Phone number is mandatory"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        minLength: [3, "Min 3 char"],
        maxLength: [10, "Max 10 char"]
    }
});

const User = model('User', userSchema);

export default User;