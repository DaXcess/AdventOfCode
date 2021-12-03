import { readFileSync } from "fs";

const day = process.argv[2];
const part = process.argv[3];
if (!day || !part) process.exit(0);

export const input = () => readFileSync(`./input/${day}.txt`, "utf8");

require(`./day${day}/${part}.ts`);
