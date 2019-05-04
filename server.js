const express = require('express');

const app = express();

const path = require('path')

app.use(express.static(__dirname + '/dist/githubIssues'));

app.listen(process.env.PORT || 8000 )

//PathLocationStrategy

app.get('/*' , function(req, res){

  res.sendFile(path.join(__dirname+ '/dist/githubIssues/index.html'));
})

console.log('Console Listening!');
