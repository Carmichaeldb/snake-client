let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  if (data === '\u0003') { //looks if ctrl c is pressed
    process.exit(); //ends connection
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === '1') {
    connection.write("Say: Watch out!");
  }
  if (data === '2') {
    connection.write("Say: I'll get you!");
  }
  if (data === '3') {
    connection.write("Say: Nice Try!");
  }
};

module.exports = {
  setupInput: setupInput };