//create a mongoose model for users
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
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
                validator: function (value) {
                // Regular expression for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: 'Invalid email address',
            },
        },
        thoughts: [
            {
                //Array of _id values referencing the Thought model
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                //Array of _id values referencing the User model (self-reference)
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);

//get total count of friends on retrieval using virtual
userSchema
    .virtual('friendCount')
    .get(function() {
    return this.friends.length;
});

//create the User model using the userSchema
module.exports = model('User', userSchema);

