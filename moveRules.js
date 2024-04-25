class MoveRules {
  static determineWinner(moves, userMove, computerMove) {
    const userIndex = moves.indexOf(userMove);
    const computerIndex = moves.indexOf(computerMove);

    const numMoves = moves.length;
    const halfNumMoves = numMoves / 2;

    if (
      (computerIndex + 1) % numMoves === userIndex ||
      (computerIndex + halfNumMoves) % numMoves === userIndex
    ) {
      return "You win!";
    } else if (
      (userIndex + 1) % numMoves === computerIndex ||
      (userIndex + halfNumMoves) % numMoves === computerIndex
    ) {
      return "Computer wins!";
    } else {
      return "It's a draw!";
    }
  }
}

module.exports = MoveRules;
