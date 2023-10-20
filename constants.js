const IP = 'localhost';
const PORT = 50541;
const stdin = process.stdin;
const alerts = { //Object to include more alerts if desired
  "welcome": "Lets play Snek!",
  "controlMovement": "controls: W - Move Up, A - Move Left, S - Move Down, D - Move Right",
  "controlMessages": "Press 1 to say 'Watch out!', Press 2 to say: I'll get you!', Press 3 to say: 'Nice Try!'",
  "quit": "Press Ctrl-C to quit"
};
const INPUT_MOVEMENT = { //object for movement command strings
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
};
const INPUT_MESSAGE = { //object with input messages
  '1': "Say: Watch out!",
  '2': "Say: I'll get you!",
  '3': "Say: Nice Try!",
};

module.exports = {
  IP: IP,
  PORT: PORT,
  stdin: stdin,
  alerts: alerts,
  INPUT_MOVEMENT: INPUT_MOVEMENT,
  INPUT_MESSAGE: INPUT_MESSAGE
};