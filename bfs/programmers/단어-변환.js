// https://school.programmers.co.kr/learn/courses/30/lessons/43163

// 새롭게 푼 정답
function solution(begin, target, words) {
  var answer = 0;

  const queue = [begin];
  const visited = Array.from({ length: words.length }).fill(0);

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift();
      if (word === target) {
        return answer;
      }

      for (let j = 0; j < words.length; j++) {
        const compareWord = words[j];
        if (visited[j]) {
          continue;
        }

        const sameCount = compareWord.split("").reduce((acc, cur, i) => {
          return cur === word[i] ? acc + 1 : acc;
        }, 0);

        if (sameCount === compareWord.length - 1) {
          visited[j] = 1;
          queue.push(compareWord);
        }
      }
    }

    answer++;
  }

  return 0;
}

// 과거에 기록한 정답
// function solution(begin, target, words) {
//   let answer = 0;
//   let visited = [];
//   let queue = [];

//   if (!words.includes(target)) return 0; //words배열에 target이 없으면 0을 반환

//   queue.push([begin, answer]); //일단 queue에 [시작단어, 변경횟수]를 배열형태로 넣는다.

//   while (queue) {
//     let [v, cnt] = queue.shift(); //queue의 맨 왼쪽 값을 꺼낸다.

//     if (v === target) {
//       //꺼낸값의 v가 맞으면 cnt는 횟수 이므로 cnt를 return한다.
//       return cnt;
//     }

//     words.forEach((word) => {
//       let notEqual = 0; //다른갯수를 구하기위해 변수를 선언한다.

//       if (visited.includes(word)) return; //방문했던 단어면 pass

//       for (let i = 0; i < word.length; i++) {
//         if (word[i] !== v[i]) notEqual++; //word를 반복하면서 다른 알파벳의 갯수를 체크한다
//       }

//       if (notEqual === 1) {
//         //만약 다른게 1개라면
//         queue.push([word, ++cnt]); //queue에 [단어, 횟수] 형태로 넣는다.
//         //처음으로 따지면 hit -> hot이 되었을 때가 1이 된다.
//         visited.push(word); //방문처리를 해준다.
//       }
//     });
//   }

//   return answer;
// }

const begin = ["hit", "hit"];
const target = ["cog", "cog"];
const words = [
  ["hot", "dot", "dog", "lot", "log", "cog"],
  ["hot", "dot", "dog", "lot", "log"],
];

for (let i = 0; i < words.length; i++) {
  console.log(solution(begin[i], target[i], words[i]));
}
