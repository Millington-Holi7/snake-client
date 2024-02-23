const {connect} = require("./client")
console.log("connecting  . . .");
const conn = connect();

const setupInput = function(key) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // Send movement commands to the server based on key pressed.
  if (key === '\x1b[A') conn.write(`Move: up`);
  if (key === '\x1b[C') conn.write(`Move: right`);
  if (key === '\x1b[B') conn.write(`Move: down`);
  if (key === '\x1b[D') conn.write(`Move: left`);
};


setupInput();