/*Add your JavaScript here*/

var bigCityScore=0; // store Big City score
var smallTownScore=0; // store Small Town score
var numQuestion=0; //store the number of questions clicked

var restart=document.getElementById("restart");

var result=document.getElementById("result");

var q1a1=document.getElementById("q1a1"); 
var q1a2=document.getElementById("q1a2"); 

var q2a1=document.getElementById("q2a1"); 
var q2a2=document.getElementById("q2a2");

var q3a1=document.getElementById("q3a1"); 
var q3a2=document.getElementById("q3a2");

q1a1.addEventListener('click', smallTown);
q1a2.addEventListener('click', bigCity);
q2a1.addEventListener('click', smallTown);
q2a2.addEventListener('click', bigCity);
q3a1.addEventListener('click', bigCity);
q3a2.addEventListener('click', smallTown);
restart.addEventListener('click', restarts);

function bigCity() {
  bigCityScore += 1;
  numQuestion = numQuestion + 1;
  
  console.log("numQuestion = " + numQuestion + " bigCityScore = " + bigCityScore);

  if (numQuestion==3) {
  console.log("The Quiz is Done!");
    finalResult();
  }
}

function smallTown() {
  smallTownScore += 1;
  numQuestion = numQuestion + 1;
  
  console.log("numQuestion = " + numQuestion + " smallTownScore = " + smallTownScore);

  if (numQuestion==3) {
  console.log("The Quiz is Done!");
    finalResult();
  }
}

function finalResult() {
      if (bigCityScore >= 2) {
      console.log("You will fit right in with the hustle and bustle of the big city!");
        result.innerHTML="Big City! You will fit right in with the hustle and bustle of the big city!"
      } else {
      console.log("Small town guy/gal you are!");
        result.innerHTML="Small Town! You are a small town guy/gal!"
      }
}

function restarts() {
  result.innerHTML="Your result is..."
  numQuestion=0;
  bigCityScore=0; 
  smallTownScore=0; 
  console.log(numQuestion);
  console.log(bigCityScore);
  console.log(smallTownScore);
}




