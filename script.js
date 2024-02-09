// ADD YOUR FUNCTIONS BELOW THIS LINE:
document.getElementById("rock").addEventListener("click", rockButton);
document.getElementById("paper").addEventListener("click", paperButton);
document.getElementById("scissors").addEventListener("click", scissorsButton);
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let winner = document.getElementById("winner");
let myChoice = document.getElementById("myChoice");
let computer = document.getElementById("com");
let myNum = 0;
let comNum = 0;

function rockButton() {
  myChoice.src = "images/rock.png";
  let random = Math.random();
  if (random <= 0.3333333333) {
    computer.src = "images/rock.png";
    winner.innerHTML = "DRAW";
  } else if (random <= 0.66666666) {
    computer.src = "images/paper.png";
    comNum++;
    num2.innerHTML = comNum;
    winner.innerHTML = "COMPUTER WINS";
  } else {
    computer.src = "images/scissors.png";
    myNum++;
    num1.innerHTML = myNum;
    winner.innerHTML = "PLAYER WINS";
  }
}

function paperButton() {
  myChoice.src = "images/paper.png";
  let random = Math.random();
  if (random <= 0.3333333333) {
    computer.src = "images/rock.png";
    myNum++;
    num1.innerHTML = myNum;
    winner.innerHTML = "PLAYER WINS";
  } else if (random <= 0.66666666) {
    computer.src = "images/paper.png";
    winner.innerHTML = "DRAW";
  } else {
    computer.src = "images/scissors.png";
    comNum++;
    num2.innerHTML = comNum;
    winner.innerHTML = "COMPUTER WINS";
  }
}

function scissorsButton() {
  myChoice.src = "images/scissors.png";
  let random = Math.random();
  if (random <= 0.3333333333) {
    computer.src = "images/rock.png";
    comNum++;
    num2.innerHTML = comNum;
    winner.innerHTML = "COMPUTER WINS";
  } else if (random <= 0.66666666) {
    computer.src = "images/paper.png";
    myNum++;
    num1.innerHTML = myNum;
    winner.innerHTML = "PLAYER WINS";
  } else {
    computer.src = "images/scissors.png";
    winner.innerHTML = "DRAW";
  }
}
