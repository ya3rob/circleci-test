const http = require('http');

console.log("working  ?")
http.createServer(function (req, res) {
  res.write('Foo MEME version 6!');
  // i don't know  what to  do next
  res.end();

  console.log('working');
}).listen(8010, '0.0.0.0');