const input = require('readline-sync');
let question;
let correctAnswer;
let candidateName = "";
let candidateAnswer = [];
let candidateAnswers = 0;
let questions = [
  /*0*/	"Who was the first American woman in space?\nYour Answer: ", 
  /*1*/	"True or false: 5 kilometer == 5000 meters?\nYour Answer: ",
  /*2*/	"(5 + 3)/2 * 10 = ?\nYour Answer: ", 
  /*3*/	"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\nYour Answer: ", 
  /*4*/	"What is the minimum crew size for the ISS?\nYour Answer: "];
let correctAnswers = [
  /*0*/ 	"Sally Ride",
  /*1*/ 	"true",
  /*2*/ 	"40",
  /*3*/ 	"Trajectory",
  /*4*/ 	"3"];


function askForName() {
	candidateName = input.question("What is your name?\n")
}

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		candidateAnswer[i] = input.question(questions[i]);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`)
	}
}

function gradeQuiz(candidateAnswers) {
  for (let i = 0; i < candidateAnswer.length; i++) {
    if (candidateAnswer[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      candidateAnswers++;
		}
  }
  let grade = candidateAnswers/questions.length*100;
  console.log(`>>> Overall Grade: ${grade}% (${candidateAnswers} of 5 responses correct) <<<`)
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`)
  } else {
    console.log(`>>> Status: FAILED <<<`)
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hi, ${candidateName}. It's Quiz Time!\n`)
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};