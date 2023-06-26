const { User } = require('../models');

module.exports = {
    //get all users
    async getUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //get one user by id
    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        }
        catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //update a user by id
    async updateUser(req, res) {

        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true});
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //delete a user by id
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //add a friend to a user's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendId } }, { new: true });
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //remove a friend from a user's friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true });
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
};

