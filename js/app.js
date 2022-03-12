'use strict' //Enforce variable declaration

let userName=prompt(`Welcome to my site! What\'s your name?`);


let randomNum= Math.floor(Math.random() * 10)

//Define an array to hold questions, answers and attempts
// Array index is determined by x,y values. I.e. Question one is indexed at [0,0]
let questions = [
        ['Have I ever lived in Jamaica? Y-Yes or N-No', 'N-No', 1],
        ['Do I have a niece? Y-Yes or N-No', 'N-No', 1],
        ['Do I love my family? Y-Yes or N-No', 'Y-Yes', 1],
        ['Did I serve in the Army? Y-Yes or N-No', 'N-No', 1],
        ['Do I have a like dogs? Y-Yes or N-No', 'Y-Yes', 1],
        ['What number am I thinking of? (4 chances)', randomNum, 4],
        ['What is one of my favorite colors? (6 chances)', 'blue,purple,pink', 6],
];


//  Count the amount of questions stored
let totalQs = questions.length;

alert(`Hi ${userName}, Answer these ${totalQs} questions to see how well you know me...`);
//Define # of correct answers
let correct=0;

for (let i = 0; i < totalQs; i++) {
  
  //Dynamically define variables to hold the values associated with each question
    let question = questions[i][0];
  //Define the answer for this question
     let answer = questions[i][1];
  //Define the number of attempts for this question
    let attempt = questions[i][2];
     
  //---- Logic for questions 1 through 5 ---- 
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

  //---- Logic for question 6 ----
  let attemptNum = attempt;
  if (attempt === 4){
    var userAnswer=prompt(question);
    //Function to ask user question
    function qSixLogic(){

     // Evaluate the user input 
       //Guess is too low
      if (answer > userAnswer){
         userAnswer=parseInt(prompt(`Too Low. ${question}`));
        //Guess is too high
      }else if (answer < userAnswer){
        userAnswer=parseInt(prompt(`Too High. ${question}`));
        //Guess is not a number
        }else if (isNaN(userAnswer) || userAnswer ===null){
        userAnswer=parseInt(prompt(`Please enter a number. ${question}`));
        //Guess is correct
        }else if(userAnswer != answer && attempt===1){
     alert(`Your answer is incorrect. The answer is ${answer}.`); 
    };
      //
    if (answer === parseInt(userAnswer)){
        alert(`Good guess! You answered ${userAnswer}. The correct answer is ${answer}!`);
        correct++; 
    }
    };

    //Run the function again if another attempt exists
   // answer =parseInt(answer)
   
while (attempt > 0 ){
  attempt--;

  if(parseInt(userAnswer) != answer && attemptNum ===4){
       if(attempt>0){
       qSixLogic(); }
    else if(userAnswer != answer){
     alert(`Your answer is incorrect. The answer was ${answer}.`); 
      break
    };
  };
    };
  };

  //---- Logic for question 7 ---- 
   if (attempt === 6){
     userAnswer=prompt(question).toLowerCase();
     
     
     ///Split the answers for comparison
    let splitAns=answer.split(",");

     //Define individual answers
     let answer1 =splitAns[0];
     let answer2 =splitAns[1];
     let answer3 =splitAns[2];
     
    //Function to ask user question
    function qSevenLogic(){
     // Evaluate the user input 
      let status="end"
       //Guess is too low
      if (answer != userAnswer && attempt >0){
         userAnswer=prompt(`Try again. ${question}`).toLowerCase();
        //Guess is incorrect
      }else if(userAnswer != answer && attempt===1){
     alert(`Your answer is incorrect. The answer is ${answer}.`); 
    };
      //
    if (userAnswer === answer1 || userAnswer === answer2 || userAnswer === answer3){
        alert(`Good guess! You answered ${userAnswer}. The correct answers include ${answer}!`);
        correct++; 
      attempt=0;
        }
    };
   
while (attempt > 0 ){
  attempt--;

 
       if(attempt>0 && userAnswer != answer){
       qSevenLogic(); }
    else if(userAnswer != answer1 || userAnswer != answer2 || userAnswer != answer3 && attempt === 0){
     alert(`Your answer is incorrect. The answers were ${answer}.`); 
      break
    };
    };
  };
};
alert(`Thanks for participating ${userName}! You got ${correct}/${totalQs} correct.` )