// https://www.acmicpc.net/problem/2738

const fs = require("fs");
const findRoot = require("find-root");
const path = require("path");
const rootDir = findRoot(process.cwd());
const examplePath = path.join(rootDir, "utils/backjun-example.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : examplePath;
let [[n, m], ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((items) => items.split(" ").map(Number));

const answer = [];

for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    const a = arr[i][j];
    const b = arr[i + n][j];
    row.push(a + b);
  }
  answer.push(row.join(" "));
}

console.log(answer.join("\n"));
