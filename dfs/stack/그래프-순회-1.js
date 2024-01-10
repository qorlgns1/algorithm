// https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript

const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

const graph2 = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B", "G", "H"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
  G: ["C"],
  H: ["C"],
};

const bfs = (graph, start) => {
  const stack = [start];
  const visited = [];
  const result = [];

  while (stack.length) {
    const n = stack.pop();

    if (!visited.includes(n)) {
      visited.push(n);
      result.push(n);

      graph[n].forEach((nextNode) => {
        stack.push(nextNode);
      });
    }
  }

  return result;
};

console.log(bfs(graph, "A"));
