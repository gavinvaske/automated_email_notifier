const request = require('request')

module.exports.postRequest = function(url, req){
    return request.post(
        url,
        { 
            json: 
            {
                "timeDue": "11:50",
                "bookTitle": "Hello World!",
                "dateDue": "10/25/2019"
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