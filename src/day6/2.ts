import { input } from "..";

const rgx: { [key: string]: RegExp } = {};

const count = (str: string, what: string) => {
  let reg: RegExp;
  if (!rgx[what]) rgx[what] = new RegExp(what, "g");
  reg = rgx[what];

  return (str.match(reg) || []).length;
};

const fish = input();
let n0 = count(fish, "0");
let n1 = count(fish, "1");
let n2 = count(fish, "2");
let n3 = count(fish, "3");
let n4 = count(fish, "4");
let n5 = count(fish, "5");
let n6 = count(fish, "6");
let n7 = count(fish, "7");
let n8 = count(fish, "8");
let i = 0;

console.log({ fish, n0, n1, n2, n3, n4, n5, n6, n7, n8 });

while (i < 256) {
  let o1 = n1;
  n1 = n2;
  n2 = n3;
  n3 = n4;
  n4 = n5;
  n5 = n6;
  n6 = n7 + n0;
  n7 = n8;
  n8 = n0;
  n0 = o1;
  i += 1;
}

console.log("Total:", n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8);
