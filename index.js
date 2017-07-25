var apiai = require('apiai');


var app = apiai("a721e5ce976f42be8a75090ff066955c");


/////////event query
var options = {
    sessionId: 'abc-sessionid'
}
var event = {
    name: "abcevent",
    data: {
        param1: "param1 value",
    }
}
var request = app.eventRequest(event, options);
request.on('response', function (response) {
    console.log("response: ", response);
});

request.on('error', function (error) {
    console.log("error: ", error);
});

request.end();

//text query

var request = app.textRequest('Hi', {
    sessionId: 'unique-session-id'
});

request.on('response', function (response) {
    console.log(response);
});

request.on('error', function (error) {
    console.log(error);
});

request.end();