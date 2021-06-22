const input = require('readline-sync');
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateName = "";
let candidateAnswers = [];
let candidateAnswer = "0";
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"];


function askForName() {
	candidateName = input.question("Candidate Name: ")
}

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		console.log(questions[i])
		candidateAnswers[i] = input.question(`Your Answer: `);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`)
	}
}

function gradeQuiz(candidateAnswers) {
  let grade;
	for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      candidateAnswer++;
		}
  }
 	grade = Number(candidateAnswer/questions.length*100);  
  console.log(`>>> Overall Grade: ${grade}% (${candidateAnswer} of 5 responses correct) <<<`)
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`)
  } else {
    console.log(`>>> Status: FAILED <<<`)
  }
  return grade;
	}

function runProgram() {
  askForName();
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
  candidateAnswers: candidateAnswers,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};