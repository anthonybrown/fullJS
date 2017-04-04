/* using HTTP as a server */

import http from 'http';

const server = http.createServer();

server.listen(8080);

//createServer gives us an event emitter object
// that we can subscribe to.
// The most important emitted event is the request event
// which gets emitted every time the http server receives a request
server.on('request', (req, res) => {
  res.write('Hello HTTP\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

/* Using HTTP or HTTPS as a client */
//import https from 'https';

//https.get('https://www.lynda.com', res => {
  //console.log('Response status code: ', res.statusCode);

  //res.on('data', chunk => {
    //console.log(chunk.toString());
  //});
//});
