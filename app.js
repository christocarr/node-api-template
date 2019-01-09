let express = require('express');
let app = express();
let request = require('request');

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/results', (req, res) => {
  request('http://www.omdbapi.com/?s=cats&apikey=thewdb', (error, response, body) => {
    if(!error && response.statusCode == 200) {
      res.send(body);
    } 
  })
});

app.listen(3000, () => {
  console.log('Open browser on port 3000');
})