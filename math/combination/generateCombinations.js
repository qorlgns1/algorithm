// 조합의 경우에는 순서가 중요하지 않기에 하기와 같이 중복되는 것을 빼고 뽑는다.

// 순열(permutation)과의 차이를 알고 사용하자

function generateCombinations(arr, length) {
  const result = [];

  function combine(current, start) {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(current, i + 1);
      current.pop();
    }
  }

  combine([], 0);
  return result;
}

console.log(generateCombinations([1, 2, 3, 4], 2));

// result: [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
// ];
