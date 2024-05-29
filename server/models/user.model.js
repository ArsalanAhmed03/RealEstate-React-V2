const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter UserName"]
        },

        Email: {
            type: String,
            required: [true, "Enter Email"],
            // unique: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
        },

        Password: {
            type: String,
            required: [true, "Enter Password"]
            // minlength: [8, "Password should be at least 8 characters long"]
        },

        PhoneNumber: {
            type: String,
            required: [true, "Enter Phone Number"]
        },

        Emirates: {
            type: String,
            required: [true, "Enter Emirates"]
        },

        City: {
            type: String,
            required: [true, "Enter City"]
        },

        Address: {
            type: String,
            required: [true, "Enter Address"]
        },

        POBox: {
            type: String,
            required: [true, "Enter PO Box"]
        },

        Nationality: {
            type: String,
            required: [true, "Enter Nationality"]
        },

        DOB: {
            type: Date,
            required: [true, "Enter Date of Birth"]
        },

        Gender: {
            type: String,
            required: [true, "Select Gender"]
        },

        PreferredLanguage: {
            type: String,
            required: [true, "Select Preferred Language"]
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
