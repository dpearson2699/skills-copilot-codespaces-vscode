// Create web server
// Run: node comments.js
// Test: curl -d "name=foo&comment=bar" http://localhost:3000/comments

var http = require('http');
var qs = require('querystring');

var comments = [];

http.createServer(function(req, res) {
  if (req.url === '/comments' && req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    req.on('end', function() {
      var comment = qs.parse(body);
      comments.push(comment);
      res.end('OK\n');
    });
  } else if (req.url === '/comments' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end('Not found\n');
  }
}).listen(3000);

console.log('Server running at http://localhost:3000/');