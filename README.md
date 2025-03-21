# algorithm

## 백준 알고리즘 문제풀이 템플릿

```javascript
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
```
