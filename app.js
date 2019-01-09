let express = require('express');
let app = express();
let request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/results', (req, res) => {
  request('http://www.omdbapi.com/?s=night&apikey=thewdb', (error, response, body) => {
    if(!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      res.render('results', {data: data});
      // res.send(results['Search'][0]['Title']);
    } 
  })
});

app.listen(3000, () => {
  console.log('Open browser on port 3000');
})