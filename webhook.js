const request = require('request')

module.exports.postRequest = function(url){
    request.post(
        url,
        { json: { "value1": 'hi' } },
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