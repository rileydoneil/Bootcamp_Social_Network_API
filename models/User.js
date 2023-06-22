//create a mongoose model for users
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, //no two users can have the same username
        trim: true //trim whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //validate
        validate: {
            validator: function(v) {
            },
    
        },
    },
    thoughts: {
        //Array of _id values referencing the Thought model
        type: Array,
        ref: 'Thought'
    },
    friends: {
        //Array of _id values referencing the User model (self-reference)
        type: Array,
        ref: 'User'
    }
});

module.exports = mongoose.model('User', userSchema);

