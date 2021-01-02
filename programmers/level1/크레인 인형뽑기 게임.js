//https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  let answer = 0;
  const basket = [];
  for (let move of moves) {
    let moveIndex = move - 1;
    for (let i = 0; i < board.length; i++) {
      //공백아닐 때
      if (board[i][moveIndex]) {
        basket.push(board[i][moveIndex]);
        board[i][moveIndex] = 0;
        for (let i = 0; i < basket.length; i++) {
          ////바스켓에 같은 인형 2개 쌓였을 때
          if (basket[i] === basket[i + 1]) {
            basket.splice(i, 2);
            answer += 2;
          }
        }
        break;
      }
    }
  }

  return answer;
}

//0은 빈칸, 숫자에 따라 다른 인형
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

//크레인이 인형 뽑는 위치(인덱스+1)
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
//뽑힌 인형: 4, 3, 1, 1, 3, 2, 4
