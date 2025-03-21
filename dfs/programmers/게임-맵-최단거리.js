// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// 미해결
function solution(maps) {
  var answer = Number.MAX_SAFE_INTEGER;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우 이동
  // const visited = Array.from({ length: maps.length + 2 });
  // debugger;
  const X_MAX = maps[0].length - 1;
  const Y_MAX = maps.length - 1;

  function dfs(x, y, moveCount, map) {
    if (x === X_MAX && y === Y_MAX) {
      answer = Math.min(answer, moveCount);
    } else {
      for (let i = 0; i < moves.length; i++) {
        const [xPosition, yPosition] = moves[i];
        const moveX = x + xPosition;
        const moveY = y + yPosition;

        try {
          if (map[moveX][moveY] === 1) {
            if (i === 0) {
              console.log("상");
            } else if (i === 1) {
              console.log("하");
            } else if (i === 2) {
              console.log("좌");
            } else if (i === 3) {
              console.log("우");
            }

            const newMap = JSON.parse(JSON.stringify(map));
            newMap[x][y] = 0;
            dfs(moveX, moveY, moveCount + 1, newMap);
          }
        } catch (e) {}
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];

    try {
      if (maps[0 + x][0 + y] === 1) {
        if (i === 0) {
          console.log("상");
        } else if (i === 1) {
          console.log("하");
        } else if (i === 2) {
          console.log("좌");
        } else if (i === 3) {
          console.log("우");
        }

        const newMap = maps.map((map) => map.map((item) => item));
        newMap[0][0] = 0;
        dfs(0 + x, 0 + y, 1, JSON.parse(JSON.stringify(newMap)));
      }
    } catch (e) {}
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer + 1;
}

const maps = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ],
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ],
];

for (let i = 0; i < maps.length; i++) {
  console.log(solution(maps[i]));
}
