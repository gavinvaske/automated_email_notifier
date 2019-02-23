const request = require('request')

module.exports.createCalendarEvent = function(url, req){
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
                console.log("SUCCESS:", body)
                return 1;
            }
            if (error){
                console.log('ERROR:', error);
                return 0;
            }
        }
    );
}

module.exports.createFineAlert = function(url, outstandingFine){
    return request.post(
        url,
        { 
            json: 
            {
                "feeDue": outstandingFine,
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("SUCCESS:", body)
                return 1;
            }
            if (error){
                console.log('ERROR:', error);
                return 0;
            }
        }
    );
}