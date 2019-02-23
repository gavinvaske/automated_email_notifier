const request = require('request')

module.exports.postRequest = function(url, req){
    request.post(
        url,
        { 
            json: 
            { 
                "timeDue": req.timeDue, 
                "bookTitle": req.bookTitle,
                "dateDue": req.dateDue
            } 
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
                return 1;
            }
            if (error){
                console.log('ERROR:', error);
                return 0;
            }
        }
    );
}