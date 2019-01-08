const express = require('express');
const app = express();
const request = require('request');

app.get('/', (req, res) => {
  
});

app.get('/results', (res, req) => {

});

app.listen(3000, () => {
  console.log('Open browser on port 3000');
})