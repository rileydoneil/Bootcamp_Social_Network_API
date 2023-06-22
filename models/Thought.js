//Thought model for mongoose
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        //must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //use a getter method to format the timestamp on query
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    //Array of nested documents created with the reactionSchema
    reactions: [reactionSchema],
});

//create virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
    return this.reactions.length;
});

module.exports = mongoose.model('Thought', thoughtSchema);
