//https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}

//수박을 n/2만큼 반복하고 n이 홀수일 경우 마지막에 '수'를 붙여준다.
