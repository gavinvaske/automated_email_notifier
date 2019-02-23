// Import required libraries
const express = require('express')
const app = express()
const webhook = require('./webhook')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Middleware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// The url the processed email should be sent to 
const webhookUrl = "https://hooks.zapier.com/hooks/catch/4556328/pzhoz7/"

app.get('/', function(req,res){
    res.send("Welcome! I am a webserver created using Node.js and Express.js!")
})

app.post('/processEmail', function(req, res){
    console.log("bookTitle: ", req.body.bookTitle)
    console.log("dateDue: ", req.body.dateDue)
    console.log("timeDue: ", req.body.timeDue)
    console.log("Was post request successful: ", webhook.postRequest(webhookUrl, req))
    res.end()
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}...`)
} )