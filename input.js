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

  if (INPUT_MOVEMENT[data]) { //detects movement keys being pressed
    if (intervalMovement) { //checks if intervalMoment is true
      clearInterval(intervalMovement); //clearsInterval
    }
    intervalMovement = setInterval(() => { //sets interval of movement
      connection.write(INPUT_MOVEMENT[data]); //moves snek in direction from key press
    }, 50);
    intervalMovement; //begins movement
  }
  if (INPUT_MESSAGE[data]) { //checks if key for message is pressed
    connection.write(INPUT_MESSAGE[data]); //sends message to server
  }
};

module.exports = {
  setupInput: setupInput };