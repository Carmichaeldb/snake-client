// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
const {stdin, INPUT_MOVEMENT, INPUT_MESSAGE} = require("./constants");
let connection;

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let intervalMovement;

const handleUserInput = function (data) {
  if (data === '\u0003') { //looks if ctrl c is pressed
    process.exit(); //ends connection
  }

  if (INPUT_MOVEMENT[data]) {
    if (intervalMovement) {
      clearInterval(intervalMovement);
    }
    intervalMovement = setInterval(() => {
      connection.write(INPUT_MOVEMENT[data]);
    }, 50);
    intervalMovement;
  }
  if (INPUT_MESSAGE[data]) {
    connection.write(INPUT_MESSAGE[data]);
  }
};

module.exports = {
  setupInput: setupInput };