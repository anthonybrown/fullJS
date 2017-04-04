import config from './config';
//import fs from 'fs';
//don't need the fs module if we are using the Express static middleware.
import apiRouter from './api';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.use('/api', apiRouter);
/* using the static middleware to serve files from the public folder */
server.use(express.static('public'));
/* instead of doing this, use the static middleware */
//server.get('/about.html', (req, res) => {
  //fs.readFile('./about.html', (err, data) => {
    //res.send(data.toString());
  //});
//});

server.listen(config.port, () => {
  console.log('Express is listening on port ', config.port);
});


