// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  const visited = Array.from({ length: computers.length }).fill(0);

  function dfs(network) {
    // 2. 방문 처리
    visited[network] = true;

    for (let j = 0; j < computers.length; j++) {
      // 3. 방문하지 않은 네트워크를 찾고, 탐색중인 네트워크와 연결된 컴퓨터를 찾는다.
      if (!visited[j] && computers[j][network] === 1) {
        // 2번 3번을 반복한다.
        dfs(j);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    // 1. 방문하지 않은 네트워크이면 탐색을 시작한다.
    if (!visited[i]) {
      dfs(i);
      // 4. 연결된 컴퓨터를 모두 방문처리했고, 네트워크 개수를 +1 해준다.
      answer++;
    }
  }

  return answer;
}

const n = [3, 3];
const computers = [
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
  [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ],
];

for (let i = 0; i < computers.length; i++) {
  console.log(solution(n[i], computers[i]));
}
