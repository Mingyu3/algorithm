function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        break;
      }
    }
  }
  let answer = n - lost.length;
  console.log(answer);
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        j--;
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

//전체학생수
const n = 10;
//도난당한 학생번호
const lost = [1];
//여벌의 체육복 가져온 학생번호
const reserve = [3, 5, 7];
solution(n, lost, reserve);
