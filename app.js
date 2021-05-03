const http = require('http');

http.createServer(function (req, res) {
  res.write('Foo MEME version 3!');
  res.end();
}).listen(8010, '0.0.0.0');
