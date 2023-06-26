const { Schema, Types } = require('mongoose');

//create Reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        //default value is set to a new ObjectId
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        //must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //use a getter method to format the timestamp on query
        get: createdAtVal => dateFormat(createdAtVal)
    }
});

module.exports = reactionSchema;