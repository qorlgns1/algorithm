const fs = require("fs");
const findRoot = require("find-root");
const path = require("path");
const rootDir = findRoot(process.cwd());
const examplePath = path.join(rootDir, "utils/backjun-example.txt");

const filePath = process.platform === "linux" ? "/dev/stdin" : examplePath;
let [[N, M], arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((items) => items.split(" ").map(Number));

let max = Number.MIN_SAFE_INTEGER;
outer: for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const double = arr[i] + arr[j];
    for (let k = j + 1; k < N; k++) {
      const tripple = double + arr[k];

      if (tripple <= M && tripple > max) {
        max = tripple;
        if (max === M) break outer;
      }
    }
  }
}

console.log(max);
