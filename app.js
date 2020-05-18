// A.1. Import http
var http = require('http');

// B.1 Import Event
var events = require('events');

// B.2 Create an Event Emitter object
var eventEmitter = new events.EventEmitter();

// A.2. Create a server
// A.4. Enabling request Request and response
var server = http.createServer(function (req, res) {
    res.end('Server Works');
    
    // B.4 Fire an Event
    eventEmitter.emit('someone requested', req)
});

// B.3 Listen to event
eventEmitter.on('someone requested', function (data) {
    console.log('Someone has sent request on server', data);
});

// A.3. Defining a server at port localhost:9000
server.listen(9000, 'localhost', function () {
    console.log('Server started at Port 9000');
});
