let doorImage1= document.getElementById('door1');
let doorImage2= document.getElementById('door2');
let doorImage3= document.getElementById('door3');
let numClosedDoors= 3
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById('start');
let currentlyPlaying=true;

const isBot=(door) => {
    if(door.src===pizzaPath){
      return true;
    } else{
      return false;
    }
}

const isClicked = (door) => {
    if (door.src===closedDoorPath){
      return false;
    } else{
      return true;
    }
}

const playDoor=(door)=>{
  numClosedDoors=numClosedDoors-1;
  if (numClosedDoors===0){
    gameOver('win');
  } else if(isBot(door)){
      gameOver();
  }
}

const randomChoreDoorGenerator=()=>{
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor===0){
      openDoor1 = pizzaPath;
      openDoor2 = veggie1Path;
      openDoor3 = veggie2Path;
  } else if(choreDoor===1){
      openDoor2 = pizzaPath;
      openDoor1 = veggie1Path;
      openDoor3 = veggie2Path;
  } else{
      openDoor3 = pizzaPath;
      openDoor2 = veggie1Path;
      openDoor1 = veggie2Path;
  }
}

doorImage1.onclick= () => {
  if (currentlyPlaying&&!isClicked(doorImage1)){
  doorImage1.src=openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick= () => {
  if (currentlyPlaying&&!isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}
doorImage3.onclick= () => {
  if (currentlyPlaying&&!isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}

startButton.onclick=()=>{
  if(currentlyPlaying===false){
  startRound();
  }
}


function startRound(){
  doorImage1.src= closedDoorPath;
  doorImage2.src= closedDoorPath;
  doorImage3.src= closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML='Good luck!'
  currentlyPlaying =true;
  randomChoreDoorGenerator()
}

function gameOver(status){
  if (status==='win') {
    startButton.innerHTML = 'Game over! Veggie time~';
  } else{
    startButton.innerHTML="You win! Enjoy pizza*^^*";
  }
  currentlyPlaying=false;
}


const pizzaPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT96j-scMAlPk5sKB1LXc1N87H7N33_TdPEBA&usqp=CAU";
const veggie1Path= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC4sqxC2vkOP0annKn4Rn1p_3BRXZCo6GoQA&usqp=CAU";
const veggie2Path= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxz-ZOByTpTALO7eQ2ebL7m2mvJ8kfakeWdQ&usqp=CAU";

startRound()
