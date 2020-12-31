//https://programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  let myset = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      //Set으로 중복 제거
      myset.add(numbers[i] + numbers[j]);
    }
  }
  let answer = [...myset];
  return answer.sort((a, b) => a - b);
}
