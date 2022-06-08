
let connection;
// setting up stdin
const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
}

// specifies what happnes when data is received from stdin
const handleUserInput = function (key) {
  // binding the movement commands to the w a s d  keys
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  // implementing y as a special key to send canned message to the server
  if (key === 'y') {
    connection.write('Say: yum!');
  }
  // implementing h as a special key to send canned message to the server
  if (key === 'h') {
    connection.write('Say: hungry!');
  }
  // if ctr1 + c is inputted, the game gets terminated
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {setupInput,};