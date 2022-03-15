//Button event listeners
let btnRock = document.querySelector('button#btnRock')
let rockClicked = btnRock.addEventListener('click', function(){  //Click event to 'Rock' button
    test('rock')
})

let btnPaper = document.querySelector('button#btnPaper')
let paperClicked = btnPaper.addEventListener('click', function(){  //Click event to 'Paper' button
    test('paper')
})

let btnScissors = document.querySelector('button#btnScissors')
btnScissors.addEventListener('click', function(){  //Click event to 'Scissors' button
    test('scissors')
})

//Live result display functionality
let resultDisplay = document.querySelector('#resultDisplay');
resultDisplay.style.fontSize='50px'
resultDisplay.style.fontWeight='bold'

let items = ['rock','paper','scissors'] //CPU posblie inputs

let randomItem = items[Math.floor(Math.random()*items.length)];  //CPU random input between 'rock', 'paper' and 'scissors'

//Initialize user points and CPU points to 0
let userPoints = 0; 

let cpuPoints = 0;

//Transform points into numbers
Number(userPoints)  

Number(cpuPoints)



function test(val){  //Game function. It will be renamed and optimized

    //The logic of the Rock Paper and Scissors game is based in a If Else statement

    //Logic of Rock
    if (val == 'rock' && randomItem == 'rock') {
        resultDisplay.innerText = 'EMPATES ' + 'User = Rock. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'rock' && randomItem == 'paper'){
        resultDisplay.innerText = 'PIERDES' + 'User = Paper. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        cpuPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'rock' && randomItem == 'scissors'){
        resultDisplay.innerText = 'GANAS' + 'User = Scissors. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        userPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    //Logic of Paper
    }else if(val == 'paper' && randomItem == 'rock') {
        resultDisplay.innerText = 'GANAS ' + 'User = Rock. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        userPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'paper' && randomItem == 'paper'){
        resultDisplay.innerText = 'EMPATES' + 'User = Paper. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'paper' && randomItem == 'scissors'){
        resultDisplay.innerText = 'PIERDES' + 'User = Scissors. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        cpuPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    //Logic of Scissors
    }else if(val == 'scissors' && randomItem == 'rock') {
        resultDisplay.innerText = 'PIERDES' + 'User = Rock. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        cpuPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'scissors' && randomItem == 'paper'){
        resultDisplay.innerText = 'GANAS' + 'User = Paper. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        userPoints+=1;
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'scissors' && randomItem == 'scissors'){
        resultDisplay.innerText = 'EMPATES' + 'User = Scissors. ' 
        + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];
}

//This If Else statement will diplay a win or lose message to the first one (between User or CPU) who reaches 5 points. Is not working well
if (userPoints == 5) {
    resultDisplay.innerText = 'YOU WIN!'

    }else if(cpuPoints == 6){
    resultDisplay.innerText = 'YOU LOSE'
    }

};