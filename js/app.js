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
     if(userAnswer==='Y' || userAnswer==='Yes'){
        userAnswer= 'Y-Yes'
     }else{
        userAnswer= 'N-No' 
     }


     //Prompt user for the answer
   alert(`You answered ${userAnswer.toUpperCase()}. The correct answer is ${answer}.`);
  
};
alert(`Thanks for participating ${userName}!`)
'use strict' //Enforce variable declaration

let userName=prompt(`Welcome to my site! What\'s your name?`);

alert(`Hi ${userName}, Welcome to my site! Let\'s see how well you know me...`);
let randomNum= Math.floor(Math.random() * 10)

alert(randomNum);
//Define an array to hold questions, answers and attempts
// Array index is determined by x,y values. I.e. Question one is indexed at [0,0]
let questions = [
        ['Have I ever lived in Jamaica? Y-Yes or N-No', 'N-No', 1],
        ['Do I have children? Y-Yes or N-No', 'N-No', 1],
        ['Was I born in August? Y-Yes or N-No', 'Y-Yes', 1],
        ['Did I grow up in the Carribean? Y-Yes or N-No', 'Y-Yes', 1],
        ['Do i have a pet dog? Y-Yes or N-No', 'Y-Yes', 1],
        ['What number am I thinking of?', randomNum, 4],
        ['What is one of my favorite colors?', 'blue,purple,pink', 6],
];


//  Count the amount of questions stored
let totalQs = questions.length;

console.log("There are a total of " + totalQs + " questions.")

//Define # of correct answers
let correct=0;

for (let i = 0; i < totalQs; i++) {
  
  //Dynamically define variables to hold the values associated with each question
    let question = questions[i][0];
  //Define the answer for this question
     let answer = questions[i][1];
  //Define the number of attempts for this question
    let attempt = questions[i][2];
     
  //Logic for questions 1 through 5
  if (attempt === 1){
    //Ask the user a question
     let userAnswer=prompt(question).toUpperCase();
     userAnswer =userAnswer.split("")[0];
    //Format the user input
     if(userAnswer==='Y' || userAnswer==='Yes'){
        userAnswer= 'Y-Yes'
     }else if (userAnswer==='N' || userAnswer==='No'){
        userAnswer= 'N-No' 
     }else{
       userAnswer= 'incorrect';
     }
    
    if(userAnswer===answer){
      correct++;
    }
    alert(`You answered ${userAnswer}. The correct answer is ${answer}`)
  } 

  //Logic for question 6
  let attemptNum = attempt;
  if (attemptNum === 4){
    var userAnswer=prompt(question);
    //Function to ask user question
    function qSixLogic(){

     // Evaluate the user input 
      if (answer > parseInt(userAnswer)){
         userAnswer=parseInt(prompt(`Too Low. ${question}`));
      };
      
      if (answer < parseInt(userAnswer)){
          userAnswer=parseInt(prompt(`Too High. ${question}`));
        };
      if (isNaN(parseInt(userAnswer)) || parseInt(userAnswer) ===null){
        userAnswer=parseInt(prompt(`Please enter a number. ${question}`));
        };
      if (answer === parseInt(userAnswer)){
          alert(`Good guess!v3 You answered ${userAnswer}. The correct answer is ${answer}!`);
        correct++;
        };
      
    console.log(answer)
    };

    //Run the function again if another attempt exists
   // answer =parseInt(answer)
for (let i = 1; attempt>=1; attempt--)

  if(parseInt(userAnswer) != answer && attemptNum ===4){
       if(attempt>i){
       qSixLogic(); };
      
    }else if(parseInt(userAnswer)===answer){
alert(`Good guess!v2 You answered ${userAnswer}. The correct answer is ${answer}!`);
    correct++;
     break
    
    };
  };

  //Logic for question 7
  let attemptNum2 = attempt
  
if (attemptNum2 === 6){
  attempt=6
  let splitAnswers=answer.split(",");
let answer1 = splitAnswers[0];
//  console.log(answer1);
let answer2 = splitAnswers[1];
  //console.log(answer2);
let answer3 = splitAnswers[2];
   //console.log(answer3);
  
    //Function to ask user question
    function qSevenLogic(){

     // Evaluate the user input 
      if (userAnswer != answer1 || userAnswer != answer2 || userAnswer != answer3){
         userAnswer=(prompt(`Try again. ${question}`));
      };
      
      if (userAnswer === answer1 || userAnswer === answer2 || userAnswer === answer3){
          alert(`Good guess!v3 You answered ${userAnswer}. The correct answer is ${answer}!`);
        correct++;
        };
      
    console.log(answer)
    };

    //Run the function again if another attempt exists
   // answer =parseInt(answer)
for (let i = 1; attempt>=1; attempt--)
userAnswer=prompt(question);
  if( userAnswer != answer1 || userAnswer != answer2 || userAnswer != answer3 && attemptNum ===6){
       if(attempt>0){
       qSixLogic(); };
    }else if(userAnswer==answer){
alert(`Good guess!v2 You answered ${userAnswer}. The correct answer is ${answer}!`);
    correct++;
     break
    };
  };
        
  
      
  //If user question is wrong, call function again

  

};
alert(`Thanks for participating ${userName}! You got ${correct}/${totalQs} correct.` )