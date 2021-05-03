const http = require('http');

http.createServer(function (req, res) {
  res.write('Foo MEME!');
  res.end();
}).listen(8010, '0.0.0.0');
