// readline is an inbuilt node module to read commandline inputs

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter something ", (userInput) => {
  console.log(`You entered ${userInput}`);
  r1.close();
});
