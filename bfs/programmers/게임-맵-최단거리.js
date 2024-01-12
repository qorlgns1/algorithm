// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  var answer = 1;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우 이동

  const n = maps.length - 1;
  const m = maps[0].length - 1;

  maps[0][0] = 0;
  const queue = [[0, 0]];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < moves.length; j++) {
        const mx = x + moves[j][0];
        const my = y + moves[j][1];

        try {
          if (mx === n && my === m) {
            return ++answer;
          }

          if ((mx !== n || my !== m) && maps[mx][my] === 1) {
            maps[mx][my] = 0;
            queue.push([mx, my]);
          }
        } catch (e) {}
      }
    }

    answer++;
  }

  return -1;
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
