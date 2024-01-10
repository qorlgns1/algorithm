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
  const result = [start];
  const visited = [start];
  const queue = [start];

  while (queue.length > 0) {
    const n = queue.shift();

    graph[n].forEach((v) => {
      if (!visited.includes(v)) {
        visited.push(v);
        queue.push(v);
        result.push(v);
      }
    });
  }

  return result;
};

console.log(bfs(graph, "A"));
