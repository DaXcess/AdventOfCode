import { input } from "..";

const movement = input()
  .split("\n")
  .map((s) => ({
    horizontal: s.split(" ")[0] === "forward" ? parseInt(s.split(" ")[1]) : 0,
    vertical:
      s.split(" ")[0] === "down" ? parseInt(s.split(" ")[1]) : s.split(" ")[0] === "up" ? -parseInt(s.split(" ")[1]) : 0,
  }));

let horizontal = 0;
let vertical = 0;

movement.forEach((m) => ((horizontal += m.horizontal), (vertical += m.vertical)));

console.log({ horizontal, vertical, total: horizontal * vertical });
