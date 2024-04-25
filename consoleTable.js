const Table = require("cli-table");

class ConsoleTable {
  static generateTable(moves, results) {
    const table = new Table({
      head: ["\\ User", ...moves],
    });

    for (let i = 0; i < moves.length; i++) {
      const row = [moves[i], ...results[i]];
      table.push(row);
    }

    return table.toString();
  }
}

module.exports = ConsoleTable;
