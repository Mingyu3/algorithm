function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();
  answer = participant.find(
    (participant, index) => participant !== completion[index]
  );
  return answer;
}

const participant = ["ana", "mislav", "mislav", "stanko"];
const completion = ["ana", "mislav", "stanko"];

solution(participant, completion);
