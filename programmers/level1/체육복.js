function solution(n, lost, reserve) {
  var answer = n - lost.lenght;
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
      }
    }
  }

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] + 1 || lost[i] === reserve[j] - 1) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
      }
    }
  }
  console.log(answer);

  return answer;
}

//전체학생수
const n = 5;
//도난당한 학생번호
const lost = [2, 4];
//여벌의 체육복 가져온 학생번호
const reserve = [1, 3, 5];
solution(n, lost, reserve);
