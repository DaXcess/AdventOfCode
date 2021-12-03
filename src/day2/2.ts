import { input } from "..";

let horizontal = 0;
let vertical = 0;
let aim = 0;

const movement = input()
  .split("\n")
  .forEach((s) => {
    const [command, value]: [string, number] = s.split(" ").map((v, i) => (i === 0 ? v : parseInt(v))) as [string, number];

    if (command === "down") aim += value;
    else if (command === "up") aim -= value;
    else if (command === "forward") {
      horizontal += value;
      vertical += aim * value;
    }
  });

console.log({ horizontal, vertical, aim, total: horizontal * vertical });
