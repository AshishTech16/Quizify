let readlinesync = require("readline-sync");
let username = readlinesync.question("Enter Your Username");
let kuler = require("kuler");
console.log(kuler(`Hello ${username},Welcome to Quizify`, "#0284c7"));

// Creating leaderboard database
const leaderboard = {
  data: [
    {
      name: "Ashish",
      score: 3,
    },
    {
      name: "Ashutosh",
      score: 2,
    },
    {
      name: "Aryan",
      score: 1,
    },
  ],
};
// Creating question and answers database
const database = {
  data: [
    {
      question: `Let a = {}, b = {}
console.log(a==b)
console.log(a===b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: `Object.assign(target, source) creates which type of copy?`,
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: `is method chaining possible with forEach?`,
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

// Function for Answer check
let score = 0;
function check(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Answer is correct", "#22c55e"));
    score++;
  } else {
    console.log(kuler("Answer is Incorrect", "#be123c"));
    console.log(kuler(`correct answer is ${correctAnswer}`, "#22c55e"));
  }
}

// Function for displaying Answers and question
function question(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`Q-${i + 1} ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} ${database.data[i].options[key]}\n`);
    }
    let userAnswer = readlinesync
      .question("Enter your answer in (a/b/c/d)")
      .toLowerCase();
    check(userAnswer, database.data[i].correctAnswer);
  }
}
// Function for Adding Player position into the  leaderboard
function position(username, score) {
  leaderboard.data.push({ name: username, score: score });
  let sortedList = leaderboard.data.sort((a, b) => b.score - a.score);
  for (let leader of sortedList) {
    console.log(
      kuler(`Name ${leader.name} and score ${leader.score}`, "#9333ea"),
    );
  }
}
// Executing the function for displaying leaderboard
question(database);
console.log(`Total score is ${score}`);
position(username, score);
