const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { get } = require('../models/Reaction');
const { getIteratedUserData, getRandomThoughtText } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to database');

    //delete all data from the database
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('all data deleted');

    
    const users = [];
    const thoughts = getRandomThoughtText(10);

    for (let i = 0; i < 10; i++) {
        console.log(getIteratedUserData(i));
        users.push(getIteratedUserData(i));
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);


    console.table(users);
    console.table(thoughts);
    console.log('all data seeded');
    process.exit(0);


});