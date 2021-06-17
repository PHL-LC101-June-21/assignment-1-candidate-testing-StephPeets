const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let a;
let question;
let correctAnswer;
let candidateAnswer = [];
let candidateAnswers = 0;
let questions = [
/*0*/	"Who was the first American woman in space?", 
/*1*/	"True or false: 5 kilometer == 5000 meters?", 
/*2*/	"(5 + 3)/2 * 10 = ?", 
/*3*/	"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 
/*4*/	"What is the minimum crew size for the ISS?"];
let correctAnswers = [
/*0*/ 	"Sally Ride",
/*1*/ 	"true",
/*2*/ 	"40",
/*3*/ 	"Trajectory",
/*4*/ 	"3"];


	
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
	candidateName = input.question("What is your name?\n")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
	for (a = 0; a < questions.length; a++) {
		candidateAnswer[a] = input.question(questions[a]);
		// candidateAnswer[a] = String(candidateAnswer);
			if (String(candidateAnswer[a]).toLowerCase() == correctAnswers[a].toLowerCase()) {
			candidateAnswers++;
			console.log(`${correctAnswers[a]} is correct!\n`)
		} else {
			console.log(`Unfortunately, ${candidateAnswer[a]} is wrong. The correct answer is ${correctAnswers[a]}.\n`)
		}
	}
console.log(candidateAnswer);
console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade; // = candidateAnswers/correctAnswers.length*100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hi, ${candidateName}. It's Quiz Time!`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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