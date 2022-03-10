'use strict' //Enforce variable declaration

let userName=prompt(`Welcome to my site! What\'s your name?`);

alert(`Hi ${userName}, Welcome to my site! Let\'s see how well you know me...`);

//Define an array to hold questions and answers
// Array index is determined by x,y values. I.e. Question one is indexed at [0,0]
let questions = [
        ['Have I ever lived in Jamaica? Y-Yes or N-No', 'N-No'],
        ['Do I have children? Y-Yes or N-No', 'N-No'],
        ['Was I born in August? Y-Yes or N-No', 'Y-Yes',],
        ['Did I grow up in the Carribean? Y-Yes or N-No', 'Y-Yes',],
        ['Is red favorite color? Y-Yes or N-No', 'N-No']
];


//  Count the amount of questions stored
let totalQs = questions.length;
// console.log("There are a total of " + totalQs + " questions.")

for (let i = 0; i < totalQs; i++) {
 
    //Dynamically define variables to hold the values associated with       each question
     let question = questions[i][0];
     let answer = questions[i][1];
     answer = answer.toUpperCase();
     


    //Ask the user a question
     let userAnswer=prompt(question).toUpperCase();
     userAnswer =userAnswer.split("")[0]
     //Format the user input
     if(userAnswer==='Y'){
        userAnswer= 'Y-Yes'
     }else{
        userAnswer= 'N-No' 
     }


     //Prompt user for the answer
   alert(`You answered ${userAnswer.toUpperCase()}. The correct answer is ${answer}.`);
  
};
alert(`Thanks for participating ${userName}!`)