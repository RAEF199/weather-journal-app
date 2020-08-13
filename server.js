// server.js


// Setup empty JS object to act as endpoint for all routes
var projectData = {};
// Express to run server and routes
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
app.use(express.static('website'));
// Spin up the server

const port = 8080;
const listening1 = ()=>{
    console.log(`running on localhost: ${port}`);
};

// Callback to debug
const server = app.listen(port, listening1);

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/all', function(req,res){
    res.send(projectData);
})

// Post Route
app.post('/all', function (req,res){
  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    user_response: req.body.user_response
  }
  projectData= newEntry;
  console.log(projectData)
});
