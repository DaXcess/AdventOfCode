import { input } from "..";

const game3Data = input().split("\n");

const bitLength = game3Data[0].length;
let oxygenData = [...game3Data];
let co2Data = [...game3Data];

for (var i = 0; i < bitLength; i++) {
  let zer0 = 0;
  let one = 0;

  oxygenData.forEach((l) => (l[i] === "0" ? zer0++ : one++));

  zer0 > one ? (oxygenData = oxygenData.filter((d) => d[i] === "0")) : (oxygenData = oxygenData.filter((d) => d[i] === "1"));
}

for (var i = 0; i < bitLength; i++) {
  if (co2Data.length < 2) break;

  let zer0 = 0;
  let one = 0;

  co2Data.forEach((l) => (l[i] === "1" ? one++ : zer0++));

  zer0 > one ? (co2Data = co2Data.filter((d) => d[i] === "1")) : (co2Data = co2Data.filter((d) => d[i] === "0"));
}

console.log(parseInt(oxygenData[0], 2) * parseInt(co2Data[0], 2));
