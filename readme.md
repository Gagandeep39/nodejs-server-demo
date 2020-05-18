# NodeJS Server

### Other languages have their own server
1. Tomcat Apache Webserver for Java
2. Apache for PHP
3. IIS for .NET
4. In **NodeJs**, we have to manually create one

### Steps to create a server
1. Import Http
`var http = require('http')`

2. Create  server
`var server = http.createServer();`

3. Define the server
```
server.listen(9000, 'localhost', function () {
    console.log('Server started at Port 9000');
})
```
4. Create serve with request and response support (Replace step 2)
```
var server = http.createServer(function (req, res) {
  res.end('Server Works');
});
```

### Event Binding
- Consists of Event emitter and Event Listener

### Steps to create an Event Listener
1. Import event listener
`var events = require('events');`

2. Create Event Emitter object
`var eventEmitter = new events.EventEmitter();`

3. Create a listener
Syntax: eventEmitter.on(event: string, args: any[])
```
eventEmitter.on('someone requested', function (data) {
    console.log('Someone has sent request on server', data);
});
```

1. Fire an Event
Syntax: eventEmitter.emit(eventName: string, args: any[])
`eventEmitter.emit('someone requested', req)`