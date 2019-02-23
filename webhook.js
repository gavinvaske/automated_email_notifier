const request = require('request')

/**
 * Make a post request to a url to trigger the creation of a new google calendar event
 *
 * @param {string} url - The webhook url a post request is sent to
 * @param {object} req - The (key) => (value) pairs used in the POST request
 * @param {string} req.timeDue - The time of day the rental is due
 * @param {string} req.body.bookTitle - The book name
 * @param {string} req.body.dateDue - The date the rental is due 
 * @return None
 */
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
            }
            if (error){
                console.log('ERROR:', error);
            }
        }
    );
}

/**
 * Make a post request to a url to trigger a SMS notification
 *
 * @param {string} url - The webhook url a post request is sent to
 * @param {string} outstandingFine - The dollar amount of the outstanding fine
 * @return None
 */
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