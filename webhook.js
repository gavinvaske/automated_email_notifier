const request = require('request')

module.exports.postRequest = function(url, req){
    return request.post(
        url,
        { 
            json: 
            {
                "timeDue": req.body.timeDue,
                "bookTitle": req.body.bookTitle,
                "dateDue": req.body.dateDue
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