//User Selection Image
let userSelection = document.querySelector('#userSelection');

//CPU Selection Image
let cpuSelection = document.querySelector('#cpuSelection');

//Button event listeners
let btnRock = document.querySelector('button#btnRock')
let rockClicked = btnRock.addEventListener('click', function(){  //Click event to 'Rock' button
    playGame('rock')
})

let btnPaper = document.querySelector('button#btnPaper')
let paperClicked = btnPaper.addEventListener('click', function(){  //Click event to 'Paper' button
    playGame('paper')
})

let btnScissors = document.querySelector('button#btnScissors')
btnScissors.addEventListener('click', function(){  //Click event to 'Scissors' button
    playGame('scissors')
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

function playGame(val){  //Game function. It will be renamed and optimized

    //The logic of the Rock Paper and Scissors game is based in a If Else statement

    //Logic of Rock
    if (val == 'rock' && randomItem == 'rock') {

        resultDisplay.innerHTML='<h1>Tie</h1>'

        userSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'rock' && randomItem == 'paper'){

        resultDisplay.innerHTML='<h1>You Lose</h1>'

        userSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>CPU = ' + (cpuPoints+=1) + ' Points</h3>'

        // resultDisplay.innerText = 'PIERDES' + 'User = Paper. ' 
        // + userPoints + ' Puntos. ' + 'CPU ' + (cpuPoints+=1) + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'rock' && randomItem == 'scissors'){

        resultDisplay.innerHTML='<h1>You Win</h1>'

        userSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>You = ' + (userPoints+=1) + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        // resultDisplay.innerText = 'GANAS' + 'User = Scissors. ' 
        // + (userPoints+=1) + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    //Logic of Paper
    }else if(val == 'paper' && randomItem == 'rock') {

        resultDisplay.innerHTML='<h1>You Win</h1>'

        userSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>You = ' + (userPoints+=1) + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        // resultDisplay.innerText = 'GANAS ' + 'User = Rock. ' + (userPoints+=1) + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'paper' && randomItem == 'paper'){

        resultDisplay.innerHTML='<h1>Tie</h1>'

        userSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        // resultDisplay.innerText = 'EMPATES' + 'User = Paper. ' 
        // + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'paper' && randomItem == 'scissors'){

        resultDisplay.innerHTML='<h1>You Lose</h1>'

        userSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>CPU = ' + (cpuPoints+=1) + ' Points</h3>'

        // resultDisplay.innerText = 'PIERDES' + 'User = Scissors. ' 
        // + userPoints + ' Puntos. ' + 'CPU ' + (cpuPoints+=1) + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    //Logic of Scissors
    }else if(val == 'scissors' && randomItem == 'rock') {

        resultDisplay.innerHTML='<h1>You Lose</h1>'

        userSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/rock.jpeg" alt=""><h3>CPU = ' + (cpuPoints+=1) + ' Points</h3>'

        // resultDisplay.innerText = 'PIERDES' + 'User = Rock. ' 
        // + userPoints + ' Puntos. ' + 'CPU ' + (cpuPoints+=1) + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'scissors' && randomItem == 'paper'){

        resultDisplay.innerHTML='<h1>You Win</h1>'

        userSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>You = ' + (userPoints+=1) + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/paper.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        // resultDisplay.innerText = 'GANAS' + 'User = Paper. ' 
        // + (userPoints+=1) + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];

    }else if(val == 'scissors' && randomItem == 'scissors'){

        resultDisplay.innerHTML='<h1>Tie</h1>'

        userSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>You = ' + userPoints + ' Points</h3>'

        cpuSelection.innerHTML='<img src="images/scissors.jpeg" alt=""><h3>CPU = ' + cpuPoints + ' Points</h3>'

        // resultDisplay.innerText = 'EMPATES' + 'User = Scissors. ' 
        // + userPoints + ' Puntos. ' + 'CPU ' + cpuPoints + ' Puntos';
        randomItem = items[Math.floor(Math.random()*items.length)];
}

//This If Else statement displays a win or lose message to the first one (between User or CPU) who reaches 5 points.
if (userPoints == 5) {
    resultDisplay.style.color='white';
    resultDisplay.style.textAlign='center';
    resultDisplay.innerText = 'YOU WIN!';
    }else if(cpuPoints == 5){
    resultDisplay.style.color='white';
    resultDisplay.style.textAlign='center';
    resultDisplay.innerText = 'YOU LOSE';
    }

};