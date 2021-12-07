import { input } from "..";

const crabs = input()
  .split(",")
  .map((n) => parseInt(n));

const sorted = crabs.sort((a, b) => a - b);

const lowestPos = sorted[0];
const highestPos = sorted[sorted.length - 1];

const fuelCosts: number[][] = new Array(highestPos - lowestPos);
const calculatedCosts: number[] = new Array(highestPos - lowestPos);

for (var i = lowestPos; i <= highestPos; i++) {
  fuelCosts[i - lowestPos] = [];
  for (var j = 0; j < crabs.length; j++) {
    const crabPos = crabs[j];
    const moveCost = Math.abs(crabPos - i);
    fuelCosts[i - lowestPos][j] = moveCost;
  }

  calculatedCosts[i - lowestPos] = fuelCosts[i - lowestPos].reduce((prev, cur) => prev + cur, 0);
}

console.log(calculatedCosts.sort((a, b) => a - b)[0]);
