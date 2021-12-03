import { readFileSync } from "fs";

const sweeps = readFileSync("./sweep.txt", "utf8")
  .split("\n")
  .map((s) => parseInt(s));

let increased = 0;

for (var i = 0; i < sweeps.length; i++) {
  if (i === 0) continue;

  const totalCurrentSweep = sweeps[i] + sweeps[i + 1] + sweeps[i + 2];
  const totalPrevSweep = sweeps[i - 1] + sweeps[i] + sweeps[i + 1];

  if (totalCurrentSweep > totalPrevSweep) increased++;
}

console.log(increased);
