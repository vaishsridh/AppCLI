var readlineSync = require('readline-sync')
var chalk = require('chalk')

var userName = readlineSync.question('Please enter your name: ')
console.log('Welcome ' + chalk.white.bgRed.bold(userName) + "!")

console.log("Let's see how well do you know me")
var score = 0

var QandA = [
  {
    question : "I like The Office: ",
    answer : "YES" 
  },
  {
    question : "I am a teetotaler: ",
    answer : "YES"
  },
  {
    question : "I am a bibiliophile: ",
    answer : "NO"
  },
  {
    question : "I have failed a course in college: ",
    answer : "NO"
  },
  {
    question : "I am under 25 years: ",
    answer : "YES"
  }
]

  for(var i = 0; i < QandA.length ; i++){
    
    var ans = readlineSync.question(QandA[i].question);
    if(ans.toUpperCase() === QandA[i].answer){
      score = score + 1
    }
    else{
      console.log("Sorry " + QandA[i].answer + " was the correct answer")
      score = score - 1;
    }
    console.log('***************************')
    console.log("Current score : " + score)
  }


