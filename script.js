let inputUser = prompt('Rock, paper or Scissors?');
inputUser = inputUser.toLocaleLowerCase()

function randomItem(value){
    return items[Math.floor(Math.random()*items.length)];
}

let items = ['rock','paper','scissors'];

if (inputUser == 'rock' && randomItem(items) == 'rock'){
    console.log('you ROCK and cpu ROCK. TIE')
}else if (inputUser == 'rock' && randomItem(items) == 'paper'){
    console.log('you ROCK and cpu PAPER. YOU LOSE')
}else if (inputUser == 'rock' && randomItem(items) == 'scissors'){
    console.log('you ROCK and cpu SCISSORS. YOU WIN')
}else if (inputUser == 'paper' && randomItem(items) == 'rock'){
    console.log('you PAPPER and cpu ROCK. YOU WIN')
}else if (inputUser == 'paper' && randomItem(items) == 'paper'){
    console.log('you PAPER and cpu PAPER. TIE')
}else if (inputUser == 'paper' && randomItem(items) == 'scissors'){
    console.log('you PAPER and cpu SCISSORS. YOU LOSE')
}else if (inputUser == 'scissors' && randomItem(items) == 'rock'){
    console.log('you SCISSORS and cpu ROCK. YOU LOSE')
}else if (inputUser == 'scissors' && randomItem(items) == 'paper'){
    console.log('you SCISSORS and cpu PAPER. YOU WIN')
}else if (inputUser == 'scissors' && randomItem(items) == 'scissors'){
    console.log('you SCISSORS and cpu SCISSORS. TIE')
}else{
    console.log('Bad Command, refresh the page')
}