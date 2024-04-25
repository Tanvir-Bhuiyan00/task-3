const ConsoleTable = require("./consoleTable");

class Help {
  static displayHelpTable(moves) {
    const results = [];
    for (let i = 0; i < moves.length; i++) {
      const row = [];
      for (let j = 0; j < moves.length; j++) {
        if (i === j) {
          row.push("Draw");
        } else if (
          (j + 1) % moves.length === i ||
          (j + moves.length / 2) % moves.length === i
        ) {
          row.push("Win");
        } else {
          row.push("Lose");
        }
      }
      results.push(row);
    }

    console.log("Results from user's perspective:");
    console.log(ConsoleTable.generateTable(moves, results));
  }
}

module.exports = Help;
