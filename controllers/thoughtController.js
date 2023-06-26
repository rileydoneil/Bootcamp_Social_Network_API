const {User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // get one thought by id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.id);
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            console.log(req.body)
            const thought = await Thought.create(req.body);
            //push the created thought's _id to the associated user's thoughts array field
            const user = await User.findByIdAndUpdate(
                req.body.userID,
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            //check if user is there
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // update a thought by id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true});
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // delete a thought by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // add a reaction to a thought
    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.id,
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.id,
                { $pull: { reactions: {_id: req.body.reactionId  } } },
                { new: true}
            );
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
};