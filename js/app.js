'use strict' //Enforce variable declaration

alert('Welcome to my site! Let\'s see how well you know me');

//Define an array to hold questions and answers
// Array index is determined by x,y values. I.e. Question one is indexed at [0,0]
let questions = [
        ['Have I ever lived in Jamaica? Y-Yes or N-No', 'N'],
        ['Do I have children? Y-Yes or N-No', 'N'],
        ['Was I born in August? Y-Yes or N-No', 'Y',],
        ['Did I grow up in the Carribean? Y-Yes or N-No', 'Y',],
        ['Is red favorite color? Y-Yes or N-No', 'N']
];

// Show the index of the questions array
console.table(questions);

//  Count the amount of questions stored
let totalQs = questions.length;
//** console.log("There are a total of " + totalQs + " questions.")

for (let i = 0; i < totalQs; i++) {
 
    //Dynamically define variables to hold the values associated with       each question
     let question = questions[i][0];
     let x = questions[i][1];
     let answer = x.toLowerCase();


    //Ask the user a question
     let userAnswer=prompt(question).toUpperCase();


     //Prompt user for the answer
   alert(`You answered ${userAnswer.toUpperCase()}. The correct answer is ${answer.toUpperCase()}.`);
  

};
//Test comment