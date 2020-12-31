function solution(board, moves) {
  let answer = 0;
  const basket = [];
    for (let move of moves) {
      let moveIndex = move - 1;
      for (let j = 0; j < board.length; j++) {
        if (board[j][moveIndex]) {
          basket.push(board[i][moveIndex]);
          board[j][moveIndex] = 0;
          break;
        }
        for (let doll in basket) {
          if (basket[doll] === basket[doll + 1]) {
            basket.splice(doll, 1);
            answer++;
          }
        }
      }
    }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
