import { writeFileSync } from "fs";
import { input } from "..";

interface Coordinate {
  x: number;
  y: number;
}

interface CoordinateChange {
  c1: Coordinate;
  c2: Coordinate;
}

const gameInput = input()
  .split("\n")
  .filter((l) => !!l)
  .map(
    (l) =>
      ({
        c1: { x: parseInt(l.split(" -> ")[0].split(",")[0]), y: parseInt(l.split(" -> ")[0].split(",")[1]) },
        c2: { x: parseInt(l.split(" -> ")[1].split(",")[0]), y: parseInt(l.split(" -> ")[1].split(",")[1]) },
      } as CoordinateChange)
  );

// console.log(gameInput);

const heatMap = new Array(1000).fill(0).map((v) => new Array(1000).fill(0));
// console.log(heatMap);

for (const change of gameInput) {
  const { c1, c2 } = change;

  if (c1.x === c2.x) {
    // Check Y
    const startFrom = Math.min(c1.y, c2.y);
    const goTo = Math.max(c1.y, c2.y);

    for (var i = startFrom; i <= goTo; i++) {
      heatMap[c1.x][i] += 1;
    }
  } else if (c1.y === c2.y) {
    // Check X
    const startFrom = Math.min(c1.x, c2.x);
    const goTo = Math.max(c1.x, c2.x);

    for (var i = startFrom; i <= goTo; i++) {
      heatMap[i][c1.y] += 1;
    }
  } else {
    // Ik weet niet waarom dit werkt maar het werkt
    // Schuine heatmap incrementie:

    const xDiff = c1.x - c2.x;
    const yDiff = c1.y - c2.y;

    for (var x = c1.x, y = c1.y; xDiff > 0 ? x >= c2.x : x <= c2.x; xDiff > 0 ? x-- : x++, yDiff > 0 ? y-- : y++) {
      // ?????
      heatMap[x][y] += 1;
    }
  }
}

let strHeatmap = "";
let totalHighValues = 0;

for (var i = 0; i < heatMap.length; i++) {
  for (var j = 0; j < heatMap.length; j++) {
    if (heatMap[i][j] > 1) totalHighValues++;
  }

  strHeatmap += `${heatMap[i].join(",")}\n`;
}
writeFileSync("heatmap.txt", strHeatmap);

console.log(totalHighValues);
