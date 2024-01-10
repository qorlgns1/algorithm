// https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript

function createNode(value, left = null, right = null) {
  return { value, left, right };
}

const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

// tree
//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7

function dfs(node) {
  if (!node) {
    return [];
  }

  const stack = [node];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    // if문 순서가 바뀌면 뒤에서부터 순회하게 된다.
    // result = [1, 3, 7, 6, 2, 5, 4]
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

console.log(dfs(tree)); // [1, 2, 4, 5, 3, 6, 7]
