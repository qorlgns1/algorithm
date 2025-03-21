// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
    } else {
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    }
  }

  dfs(0, 0);

  return answer;
}

const numbers = [
  [1, 1, 1, 1, 1],
  [4, 1, 2, 1],
];
const target = [3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(solution(numbers[i], target[i]));
}
