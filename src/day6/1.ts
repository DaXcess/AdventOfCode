import { input } from "..";

const fish = input()
  .split(",")
  .map((n) => parseInt(n));

const simulate = (times: number) => {
  for (var iter = 0; iter < times; iter++) {
    const length = fish.length;
    for (var i = 0; i < length; i++) {
      if (fish[i] - 1 < 0) {
        fish.push(8);
        fish[i] = 6;
      } else {
        fish[i]--;
      }
    }
  }
};

simulate(80);
console.log(fish.length);
