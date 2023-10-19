const IP = 'localhost';
const PORT = 50541;
const stdin = process.stdin;
const INPUT_MOVEMENT = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
};
const INPUT_MESSAGE = {
  '1': "Say: Watch out!",
  '2': "Say: I'll get you!",
  '3': "Say: Nice Try!",
};

module.exports = {
  IP: IP,
  PORT: PORT,
  stdin: stdin,
  INPUT_MOVEMENT: INPUT_MOVEMENT,
  INPUT_MESSAGE: INPUT_MESSAGE
};