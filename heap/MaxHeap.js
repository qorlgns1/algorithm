const tree = [1, 3, 5, 2, 4, 8, 6, 7, 9];

function findLeftNode(rootIndex, tree) {
  return !!tree[rootIndex * 2 + 1];
}

function findRightNode(rootIndex, tree) {
  return !!tree[rootIndex * 2 + 2];
}

function swap(index1, index2, array) {
  [array[index2], array[index1]] = [array[index1], array[index2]];

  return [...array];
}

const solution = (tree) => {
  let firstSearchNodeIndex = -1;

  for (let i = tree.length - 1; i >= 0; i--) {
    if (findLeftNode(i, tree)) {
      firstSearchNodeIndex = i;
      break;
    }
  }

  const leftNodeIndex = firstSearchNodeIndex * 2 + 1;
  const rightNodeIndex = firstSearchNodeIndex * 2 + 2;
  let swapIndex = -1;
  if (
    tree[leftNodeIndex] ||
    tree[rightNodeIndex] > tree[firstSearchNodeIndex]
  ) {
    swapIndex =
      tree[leftNodeIndex] >= tree[rightNodeIndex]
        ? leftNodeIndex
        : rightNodeIndex;
  }

  swap(firstSearchNodeIndex, swapIndex, tree);

  return tree;
};

console.log(solution(tree));
