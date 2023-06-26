const { get } = require("../models/Reaction");

const username = [
    'coolguy123',
    'happydude82',
    'speedyrunner19',
    'smarty_123',
    'musiclover88',
    'techgeek77',
    'bookworm22',
    'adventureseeker10',
    'soccerstar99',
    'creativesoul45'
];

const email = [
    'user123@example.com',
    'testuser42@gmail.com',
    'fakemail23@hotmail.com',
    'username99@outlook.com',
    'sampleemail67@yahoo.com',
    'randomuser15@mail.com',
    'exampleuser56@icloud.com',
    'usermail81@protonmail.com',
    'fakeemail22@zoho.com',
    'user1234@yahoo.com'
];

const thoughtText = [
    'elephant',
    'sunset',
    'jazz',
    'butterfly',
    'mountain',
    'ocean',
    'whisper',
    'firefly',
    'dream',
    'serendipity'
]

//get a random item given an array
const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

//get random username
const getIteratedUserData = (index) => {
    return {
        username: username[index],
        email: email[index]
    };
};

//get random thought text
const getRandomThoughtText = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        let user = getRandomItem(username);
        results.push({
            thoughtText: getRandomItem(thoughtText),
            username: user,
            reactions: [getRandomItem(thoughtText), getRandomItem(thoughtText)]
        });
    }
    return results;
}

module.exports = { getIteratedUserData, getRandomThoughtText };