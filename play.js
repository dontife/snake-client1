// net module provides an asynchronous network API for creating stream-based tcp servers
const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    //code that does something when the connection is first established
    console.log('connected to server');
  });
  // implementing data handler to see message sent from the server
  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

console.log('Connecting ...');
connect();

