// Import required libraries
const express = require('express')
const app = express()
const webhook = require('./webhook')
const bodyParser = require('body-parser')

// Middleware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Webhook endpoints
const createCalendarEventUrl = "https://hooks.zapier.com/hooks/catch/4556328/pzhoz7/"
const fineNotificationUrl = "https://hooks.zapier.com/hooks/catch/4556328/pzqz64/"

// Text response when GET request is made to homepage
app.get('/', function(req,res){
    res.send("Welcome! I am a webserver created using Node.js and Express.js!")
})

// Process data sent to this URL via POST request
app.post('/processEmail', function(req, res){

    if(typeof req.body.outstandingFine != "undefined"){
        let outstandingFine = parseFloat(req.body.outstandingFine)
        if(outstandingFine > 0){
            webhook.createFineAlert(fineNotificationUrl, '$' + outstandingFine.toString())
        }
    } else { console.log("Undefined parameter => (outstandingFine): ", req.body.outstandingFine)}

    if(typeof req.body.bookTitle == "undefined" || req.body.dateDue == "undefined" || req.body.timeDue == "undefined"){
        console.log("Error, undefined parameters: ", req.body)
        return "Error, undefined parameters";
    }

    webhook.createCalendarEvent(createCalendarEventUrl, req)
    res.end("Success!")
})

// Use the webserver's port OR use a default port
const PORT = process.env.PORT || 3000

// Start the server 
app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}...`)
} )