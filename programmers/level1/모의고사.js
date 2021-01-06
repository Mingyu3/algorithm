function solution(answers) {
  const answer = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0, answerslength = answers.length; i < answerslength; i++) {
    if (answers[i] === a[i % 5]) {
      count[0]++;
    } else if (answers[i] === b[i % 8]) {
      count[1]++;
    } else if (answers[i] === c[i % 10]) {
      count[2]++;
    }
  }

  let max = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > max) max = count[i];
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) answer.push(i + 1);
  }
  return answer;
}

const answers = [5, 3, 3, 3];

solution(answers);
