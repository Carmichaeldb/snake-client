const {connect} = require('./client');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  console.log(`A key was pressed: ${data}`);
  if (data === '\u0003') { //looks if ctrl c is pressed
    process.exit(); //ends connection
  }
};
setupInput();
handleUserInput();

