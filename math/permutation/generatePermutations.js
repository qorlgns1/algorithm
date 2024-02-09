// 1 2 3 4 배열이 있고 2가지 경우를 뽑는다고 가정해보자
// 순열의 경우에는 순서가 중요하기에 하기와 같이 다 뽑아 버린다.

function generatePermutations(arr, length) {
  const result = [];

  function permute(current, remaining) {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = current.concat(remaining[i]);
      const remainingElements = remaining
        .slice(0, i)
        .concat(remaining.slice(i + 1));
      permute(next, remainingElements);
    }
  }

  permute([], arr);
  return result;
}

console.log(generatePermutations([1, 2, 3, 4], 2));

// result: [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 4],
//   [3, 1],
//   [3, 2],
//   [3, 4],
//   [4, 1],
//   [4, 2],
//   [4, 3],
// ];
