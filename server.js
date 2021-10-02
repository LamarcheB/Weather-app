// --- Server side ---
// run by typeing node server.js in the terminal


// Double check to see if this is needed CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK
// "use strict";

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('weatherJournalApp'));

const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

function listening() {
    console.log("Server Running");
    console.log(`Running on localhost ${port}`);
}

// Get route
app.get('/retrieve', getData);          // /retrieve (the location we want to look), getData is the funciton

function getData (req, res) {           // req is request, res is response 
    res.send(projectData);
}

// POST route
app.post('/add', postData)

function postData(req, res)  {
    projectData = req.body;
    res.send({ message: "Post recieved"})
    console.log(req);
}