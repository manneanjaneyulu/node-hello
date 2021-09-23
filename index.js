const http = require('http');
const port = process.env.PORT || 3000;
require("newrelic");
var lt = require( 'load-test' );
var heapdump = require('heapdump');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});


heapdump.writeSnapshot(function(err, filename) {
  console.log('dump written to', filename);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
