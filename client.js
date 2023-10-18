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
 
  conn.write("Name: DBC"); // Send username to server...
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