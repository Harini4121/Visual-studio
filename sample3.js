/*COMMAND LINE OPTIONS*/
/*SIMPLE USER INPUT*/
/*const args = process.argv;

console.log(args); 

const name = args[2];

console.log("Hello,", name);*/


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
 });
 readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
 });*/
 /*Looping User Input*/
 /*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = ['What is your name? ', 'What is your favorite color? ', 'What is your hobby? '];
let index = 0;

const askQuestion = () => {
    if (index < questions.length) {
        rl.question(questions[index], (answer) => {
            console.log(`You answered: ${answer}`);
            index++;
            askQuestion();
        });
    } else {
        rl.close();
    }
};

askQuestion();*/
/*READING A LINE AND PERFORMING VALIDATIONS*/
/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askAge = () => {
    rl.question('What is your age? ', (age) => {
        if ( age >= 35) {
            console.log('Please enter a valid age.');
            askAge();
        } else {
            console.log(`You are ${age} years old.`);
            rl.close();
        }
    });
};

askAge();*/
/*  READING INPUT AND WRITING TO A FILE*/
/*const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a message to save to a file: ', (message) => {
    fs.writeFile('user_message.txt', message, (err) => {
        if (err) throw err;
        console.log('Message saved to user_message.txt!');
        rl.close();
    });
});*/

/*SIMULATING COMMAND LINE PROMIT (Yes/No Confirmation)*/
/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you want to continue? (yes/no): ', (answer) => {
    const lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes') {
        console.log('Continuing...');
    } else if (lowerCaseAnswer === 'no') {
        console.log('Exiting...');
    } else {
        console.log('Invalid input. Please enter yes or no.');
    }
    rl.close();
});*/




