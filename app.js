const http = require('http');

http.createServer(function (req, res) {
  res.write('Foo MEME version 5!');
  // i don't know  what to  do next
  res.end();
}).listen(8010, '0.0.0.0');
