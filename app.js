const express = require('express')
const webhook = require('./webhook')

const app = express()
const webhookUrl = "https://maker.ifttt.com/trigger/\"email_processed_by_server\"/with/key/b9OelmXvPgNPq5yi71DRnA"

app.get('/', function(req,res){
    res.send("Hello Mars!")
})

app.post('/processEmail', function(req, res){
    console.log("recieved post request: ", req)
    console.log("Was post request successful: ", webhook.postRequest(webhookUrl))
    res.end()
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}...`)
} )