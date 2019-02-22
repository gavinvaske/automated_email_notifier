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
const webhookUrl = "https://maker.ifttt.com/trigger/email_processed_by_server/with/key/b9OelmXvPgNPq5yi71DRnA"

app.get('/', function(req,res){
    res.send("Hello Mars!")
})

app.post('/processEmail', function(req, res){
    console.log("recieved post request: ", req.body.data)
    console.log("Was post request successful: ", webhook.postRequest(webhookUrl))
    res.end()
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}...`)
} )