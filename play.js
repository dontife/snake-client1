const { connect } = require('./client');

console.log('Connecting ...');
connect();

// setting up stdin
const setInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
}

// specifies what happnes when data is received from stdin
const handleUserInput = function () {
  // if ctr1 + c is inputted, the game gets terminated
  if (key === '\u0003') {
    process.exit();
  }
};