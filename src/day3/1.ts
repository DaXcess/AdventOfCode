import { input } from "..";

let gammaRate = "";
let epsilonRate = "";

const powerConsumption = () => parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

const game3Data = input().split("\n");

const bitLength = game3Data[0].length;

for (var i = 0; i < bitLength; i++) {
  let zer0 = 0;
  let one = 0;

  game3Data.forEach((l) => (l[i] === "0" ? zer0++ : one++));
  zer0 > one ? (gammaRate += "0") : (gammaRate += "1");
}

epsilonRate = gammaRate
  .split("")
  .map((r) => (r === "1" ? "0" : "1"))
  .join("");

console.log({ gammaRate, epsilonRate, powerConsumption: powerConsumption() });
