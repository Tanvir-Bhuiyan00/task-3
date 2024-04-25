const KeyGenerator = require("./keyGenerator");
const MoveRules = require("./moveRules");
const Help = require("./help");

function main() {
  const args = process.argv.slice(2);

  if (
    args.length < 3 ||
    args.length % 2 === 0 ||
    new Set(args).size !== args.length
  ) {
    console.error(
      "Incorrect arguments. Please provide an odd number (≥ 3) of non-repeating moves."
    );
    console.error("Example: node main.js rock paper scissors");
    return;
  }

  const moves = args;
  const key = KeyGenerator.generateKey();
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  const hmac = KeyGenerator.calculateHMAC(key, computerMove);

  console.log(`HMAC: ${hmac}`);
  console.log("Available moves:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log("0 - Exit");
  console.log("? - Help");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter your move: ", (userMove) => {
    if (userMove === "0") {
      readline.close();
      return;
    } else if (userMove === "?") {
      Help.displayHelpTable(moves);
      readline.close();
      return;
    }

    const index = parseInt(userMove) - 1;
    if (isNaN(index) || index < 0 || index >= moves.length) {
      console.error("Invalid move. Please enter a valid move number.");
      readline.close();
      return;
    }

    const userMoveName = moves[index];
    const result = MoveRules.determineWinner(moves, userMoveName, computerMove);

    console.log(`Your move: ${userMoveName}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(result);
    console.log(`HMAC key: ${key}`);

    readline.close();
  });
}

main();
