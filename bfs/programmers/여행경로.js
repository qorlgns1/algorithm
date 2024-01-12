// 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/43164

// 참고
// https://www.hyesungoh.xyz/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-Javascript
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-JS

// function solution(tickets) {
//   var answer = [];

//   function bfs(ticket, visited, travel) {
//     const queue = [ticket];

//     if (travel.length === tickets.length) {
//       answer.push(travel);
//     }

//     while (queue.length) {
//       const [departure, arrival] = queue.shift();

//       for (let i = 0; i < tickets.length; i++) {
//         if (visited[i]) continue;

//         const [newDeparture] = tickets[i];
//         if (arrival === newDeparture) {
//           visited[i] = true;
//           travel.push(tickets[i]);
//           bfs(tickets[i], visited, travel);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < tickets.length; i++) {
//     const [departure, arrival] = tickets[i];

//     if (departure === "ICN") {
//       const visited = Array.from({ length: tickets.length }).fill(false);
//       visited[i] = true;
//       bfs(tickets[i], visited, [tickets[i]]);
//     }
//   }

//   answer.sort();

//   return answer[0].reduce((acc, cur, i) => {
//     acc.push(cur[0]);

//     if (i === answer[0].length - 1) {
//       acc.push(cur[1]);
//     }

//     return acc;
//   }, []);
// }

function solution(tickets) {
  let answer = [];
  let correctCount = tickets.length;

  let withICN = [];
  let withoutICN = [];

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") withICN.push(tickets[i]);
    else withoutICN.push(tickets[i]);
  }

  // 항상 ICN으로 시작하기 때문에 ICN을 기준으로 tickets을 정렬함
  tickets = [...withICN.sort(), ...withoutICN.sort()];

  function bfs(i) {
    let visited = [];
    let queue = [];

    queue.push([tickets[i][1], [tickets[i][0]]]);
    visited.push([i]);

    while (queue.length) {
      let current = queue.shift();
      let checkVisited = visited.shift();

      // 현재 저장된 값이 tickets의 길이와 같을 때
      // 모든 여행경로를 돌고 마지막 공항에 도착한 경우
      if (current[1].length === correctCount) {
        // 해당 경우가 존재하면 값을 반환함
        return (answer = [...current[1], current[0]]);
      }

      tickets.forEach((ticket, index) => {
        if (checkVisited.includes(index)) return;
        if (ticket[0] === current[0]) {
          queue.push([ticket[1], [...current[1], ticket[0]]]);
          visited.push([...checkVisited, index]);
        }
      });
    }
  }

  // BFS를 활용하여 모든 경우의 수를 탐색함
  for (let i = 0; i < tickets.length; i++) {
    if (answer.length) {
      return answer;
    }
    bfs(i);
  }
}

function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = Array.from({ length: tickets.length }).fill(false);

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return answer;
}

function solution(tickets) {
  const answer = [];

  function DFS(from, remainTickets, path) {
    const updatedPath = [...path, from];
    if (remainTickets.length === 0) {
      answer.push(updatedPath);
    } else {
      remainTickets.map((ticket, index) => {
        if (ticket[0] !== from) return;

        const to = ticket[1];
        const nextRemainTickets = [...remainTickets];
        nextRemainTickets.splice(index, 1);
        DFS(to, nextRemainTickets, updatedPath);
      });
    }
  }

  DFS("ICN", tickets, []);
  return answer.sort()[0];
}

function solution(tickets) {
  var answer = [];

  function dfs(from, remainTickets, path) {
    const updatedPath = [...path, from];

    if (remainTickets.length === 0) {
      answer.push(updatedPath);
    } else {
      remainTickets.forEach((remainTicket, i) => {
        if (remainTicket[0] !== from) {
          return;
        }

        const to = remainTicket[1];
        const nextRemainTickets = remainTickets.filter(
          (remainTicket, index) => i !== index
        );
        dfs(to, nextRemainTickets, updatedPath);
      });
    }
  }

  dfs("ICN", tickets, []);

  return answer.sort()[0];
}

const tickets = [
  // [
  //   ["ICN", "JFK"],
  //   ["HND", "IAD"],
  //   ["JFK", "HND"],
  // ],
  // [
  //   ["ICN", "SFO"],
  //   ["ICN", "ATL"],
  //   ["SFO", "ATL"],
  //   ["ATL", "ICN"],
  //   ["ATL", "SFO"],
  // ],
  // [
  //   ["ICN", "AAA"],
  //   ["ICN", "AAA"],
  //   ["ICN", "AAA"],
  //   ["AAA", "ICN"],
  //   ["AAA", "ICN"],
  // ],
  // [
  //   ["ICN", "JFK"],
  //   ["JFK", "HND"],
  // ],
  // [
  //   ["ICN", "JFK"],
  //   ["JFK", "HND"],
  //   ["HND", "ICN"],
  // ],
  // [
  //   ["ICN", "AAA"],
  //   ["ICN", "CCC"],
  //   ["CCC", "DDD"],
  //   ["AAA", "BBB"],
  //   ["AAA", "BBB"],
  //   ["DDD", "ICN"],
  //   ["BBB", "AAA"],
  // ],
  [
    ["ICN", "BOO"],
    ["ICN", "COO"],
    ["COO", "DOO"],
    ["DOO", "COO"],
    ["BOO", "DOO"],
    ["DOO", "BOO"],
    ["BOO", "ICN"],
    ["COO", "BOO"],
  ],
];

for (let i = 0; i < tickets.length; i++) {
  console.log(solution(tickets[i]));
}
