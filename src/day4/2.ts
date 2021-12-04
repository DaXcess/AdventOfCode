import { input } from "..";

type BoardRow = [number, number, number, number, number];
type Board = [BoardRow, BoardRow, BoardRow, BoardRow, BoardRow];

const gameInput = input();
const numberSet = gameInput
  .split("\n")[0]
  .split(",")
  .map((n) => parseInt(n));

const boardSet: Board[] = gameInput
  .split("\n\n")
  .slice(1)
  .map((b) =>
    b
      .split("\n")
      .filter((b) => !!b)
      .map((br) =>
        br
          .split(" ")
          .filter((bns) => !!bns)
          .map((bns) => parseInt(bns))
      )
  ) as Board[];

const boardMappings: Board[] = new Array(boardSet.length).fill(0).map(() => new Array(5).fill(0).map(() => new Array(5).fill(0))) as Board[];

const boardHasWon = (mapping: Board) => {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (!mapping[i][j]) break;
      if (j === 4) return true;
    }
  }

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (!mapping[j][i]) break;
      if (j === 4) return true;
    }
  }

  return false;
};

const calculateUnmarked = (board: Board, mapping: Board) => {
  let sum = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      mapping[i][j] === 0 ? (sum += board[i][j]) : (sum = sum);
    }
  }

  return sum;
};

const winningBoardIndecies: number[] = [];

mainLoop: for (var i = 0; i < numberSet.length; i++) {
  const number = numberSet[i];

  for (var j = 0; j < boardSet.length; j++) {
    if (winningBoardIndecies.includes(j)) continue;
    const board = boardSet[j];

    for (var k = 0; k < 5; k++) {
      const row = board[k];
      const index = row.indexOf(number);

      if (index > -1) {
        boardMappings[j][k][index] = 1;

        if (boardHasWon(boardMappings[j])) {
          winningBoardIndecies.push(j);

          if (numberSet.length - winningBoardIndecies.length === 0) {
            const sum = calculateUnmarked(board, boardMappings[j]);

            console.log(sum * number);

            break mainLoop;
          }
        }
      }
    }
  }
}
