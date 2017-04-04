/* Create HTTP server */
import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello HTTP\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end()
  }, 3000)
});

server.listen(8080);

/* You can use this as an argument in the createServer */
//server.on('request', (req, res) => {
  //res.write('Hello HTTP\n');
  //setTimeout(() => {
    //res.write('I can stream!\n');
    //res.end()
  //}, 3000)
//});

//import https from 'https';

//https.get('https://www.lynda.com', res => {
  //console.log('Response status code: ', res.statusCode);

  //res.on('data', chunk => {
    //console.log(chunk.toString());
  //});
//});

//import config, { nodeEnv, logStars } from './config';
//console.log(config, nodeEnv);
//logStars('My msg is, Node rocks')

