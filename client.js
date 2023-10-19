// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Lets play Snek!");
  });

  // process.stdin.on('data', (userInput) => {
  //   conn.write(userInput); // Send user input for name to server possibly use this later?
  // });
  conn.write("Name: DBC"); //sending preset username to server

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 50);
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);

  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = {
  connect: connect };