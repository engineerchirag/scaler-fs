import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [3, 'Min 3 characters are required!'],
        maxLength: [20, 'Max 20 characters are allowed!'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please fill valid email id!'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [8, 'Min 8 charcters are required!'],
        select: false
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
}, {
    timestamps: true
});

UserSchema.methods = {
    generateJWTToken: function() {
        return jwt.sign(
            { id: this._id, role: this.role },
            process.env.JWT_PASSWORD,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
    }
}

const User = model('user', UserSchema);

export default User;