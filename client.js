const {IP, PORT, alerts} = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log(alerts.welcome); //welcome
    console.log(alerts.controlMovement);
    console.log(alerts.controlMessages);
  });

  conn.write("Name: DBC"); //sending preset username to server

  conn.on('data', (data) => {
    console.log(data);
    console.log(alerts.quit);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect: connect };