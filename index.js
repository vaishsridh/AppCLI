var readlineSync = require('readline-sync')
var chalk = require('chalk')
var userName = readlineSync.question('Please enter your name: ')
console.log('Welcome ' + chalk.white.bgRed.bold(userName) + "!")
