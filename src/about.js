let progressCircleOne = document.querySelector('.progressOne')
let progressValueOne = document.querySelector('#progressValueOne')
let progressCircleTwo = document.querySelector('.progressTwo')
let progressValueTwo = document.querySelector('#progressValueTwo')
let progressCircleThree = document.querySelector('.progressThree')
let progressValueThree = document.querySelector('#progressValueThree')

let progressCircleFour = document.querySelector('.progressFour')
let progressValueFour = document.querySelector('#progressValueFour')
let progressCircleFive = document.querySelector('.progressFive')
let progressValueFive = document.querySelector('#progressValueFive')
let progressCircleSix = document.querySelector('.progressSix')
let progressValueSix = document.querySelector('#progressValueSix')


// progress One 
let progressStartValueOne = 0,
 progressEndValueOne = 60,
 progressOneColor = "#f19046";
 speed = 55;
 progressOne = setInterval(()=>{
    progressStartValueOne++
    timing(progressStartValueOne,progressEndValueOne,progressValueOne,progressOne,progressCircleOne,progressOneColor)
 },speed)

//  for progressTwo 

 let progressStartValueTwo = 0,
 progressEndValueTwo = 75,
 progressTwoColor = "#586af3";
 progressTwo = setInterval(()=>{
    progressStartValueTwo++
    timing(progressStartValueTwo,progressEndValueTwo,progressValueTwo,progressTwo,progressCircleTwo,progressTwoColor)
 },speed)
    


//  for progressThree 

let progressStartValueThree = 0,
progressEndValueThree = 60,
progressThreeColor = "#f1ff19";
progressThree = setInterval(()=>{
   progressStartValueThree++
   timing(progressStartValueThree,progressEndValueThree,progressValueThree,progressThree,progressCircleThree,progressThreeColor)
},speed)
   
// progress Four 
let progressStartValueFour = 0,
 progressEndValueFour = 80,
 progressFourColor = "#8d41f6";
 speed = 60;
 progressFour = setInterval(()=>{
    progressStartValueFour++
    timing(progressStartValueFour,progressEndValueFour,progressValueFour,progressFour,progressCircleFour,progressFourColor)
 },speed)

//  for progressFive 

 let progressStartValueFive = 0,
 progressEndValueFive = 85,
 progressFiveColor = "#38bdf8";
 progressFive = setInterval(()=>{
    progressStartValueFive++
    timing(progressStartValueFive,progressEndValueFive,progressValueFive,progressFive,progressCircleFive,progressFiveColor)
 },speed)
    


//  for progressSix 

let progressStartValueSix = 0,
progressEndValueSix = 50,
progressSixColor = "#2be541";
progressSix = setInterval(()=>{
   progressStartValueSix++
   timing(progressStartValueSix,progressEndValueSix,progressValueSix,progressSix,progressCircleSix,progressSixColor)
},speed)
   





// Common Function 
 function timing(progressStartValue,progressEndValue,progressValue,progressName,progressCircle,color){
    progressCircle.style.backgroundImage = `conic-gradient(${color} ${progressStartValue * 3.6}deg,#f1f1f1 0deg)`
    progressValue.textContent = `${progressStartValue}%`
    if(progressStartValue == progressEndValue){
        clearInterval(progressName)
    }
 }