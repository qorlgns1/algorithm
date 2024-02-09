//
// 인접 조합은 조합(combination)과 조금 다르다.
// 하단에 결과로 확인

function generateAdjacentCombinations(arr, k) {
  const result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    const combination = arr.slice(i, i + k);
    result.push(combination);
  }

  return result;
}

// generateCombinations([1,2,3,4], 2);
// result: [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
// ];

console.log(generateAdjacentCombinations([1, 2, 3, 4], 2));

// result: [
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ];
