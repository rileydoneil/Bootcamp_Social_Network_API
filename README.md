# Bootcamp_Social_Network_API
## Description

Welcome to MVC_Techblog, the ultimate destination for the latest in tech news and trends! Our web app delivers timely articles, insightful reviews, and expert analysis to keep you at the forefront of the ever-evolving world of technology. Here you can create new posts, comment on other posts, and find posts created by users through their userid

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

(Optional) if npm is installed, run `npm run seed` to seed the database. 

if npm is installed, run `npm i` to quicklty download all appropriate packages.

## Usage
Checkout this video for a walkthrough: [Walkthrough](https://drive.google.com/file/d/1I3MjOPbsQAtBGpNF2zZVgT_wN01e8Dm5/view)

Instructions for using the app:
- `cd` into the repository and in the command line enter `node run start`
- Then through an API service like Postman go to localhost:[your port number]/
-Routes are used as such:
  -  localhost:[your port number]/api/user for GET all, POST create
    - /api/user/:id for GET by id, PUT update by id, DELETE by id
    - /api/user/:id/friends/:friendId for POST add friends by id, or DELETE friends by id
  -  localhost:[your port number]/api/thoughts for GET all, POST create
    - /api/thoughts/:id for GET by id, PUT update by id, DELETE by id
    - /thoughts/:id/reactions for POST adding reactions, and DELETE reaction
  - creating thoughts requires req.body to have thoughtText, username, and userID paramaters
  - creating users requires req.body to have a username and email
  - creating reactions requires req.body to have reactionBody and username
  - deleting reacitons requires req.body to have reactionId

## Credits

packages used:
- [mongoose](https://www.npmjs.com/package/mongoose)
- [express](https://www.npmjs.com/package/express)


## License
[MIT](https://choosealicense.com/licenses/mit/)

