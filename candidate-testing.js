const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "];
let correctAnswer = "Sally Ride";
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"];
let candidateAnswer = "";
let candidateAnswers = [];
let consoleTest = "";

// = `Correct Answer: ${correctAnswers[i]}\n`;

function askForName() {
	candidateName = input.question("Candidate Name: ")
	return console.log(`Hi, ${candidateName}. It's Quiz Time!\n`);
}


// 10.4.1.1. Returning a Value states:
	// Now that we have return statements in our coding toolbox, we will very rarely print anything within a function. If we want to see the value returned by a function then we must print it after calling the function.

/***	Is it possible to do this assignment without using console.log?	***/

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		candidateAnswers[i] = input.question(`${questions[i]}\nYour Answer: `);
		console.log(`Correct Answer: ${correctAnswers[i]}\n`);
	}
	return;
}

function gradeQuiz(candidateAnswers) {
	let grade = 0;
	for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade++;
		}
  }
	candidateAnswer = grade;
 	grade = grade/correctAnswers.length*100;
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
  candidateAnswer: candidateAnswer,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};