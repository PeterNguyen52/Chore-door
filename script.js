var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");


var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var numClosedDoors = 3;
var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
var openDoor1;
var openDoor2;
var openDoor3;
var startButton = document.getElementById("start");
var currentlyPlaying = true; 
// neu cua da duoc mo la Bot thi true, ket qua true co the chay xuong ham playDoor
var isBot = (door) =>{
    console.log('isBot')
    if(door.src === botDoorPath){
        return true;
    }else{return false;}
}

var isClicked = (door) =>{// neu cua dang dong thi tra ve false, neu la true thi tuc la dang mo, khi do onclick se ko run
    if(door.src === closedDoorPath){
        return false;
 }else {return true;}
}

var playDoor = (door) =>{ // ham nay de tru so luong cua dong sau khi da duoc mo, neu so cua dong = 0 tuc la bot o cuoi => win, neu khong thi check                                 isBot, neu la iBot thi chay xuong ham gameOver, neu khong thi mo khong xay ra van de gi
    numClosedDoors --;
    if(numClosedDoors === 0){
        gameOver('win')
        ;
   }else if(isBot(door)==true){ ///
       gameOver();
       numClosedDoors =0;//khi da mo ra Bot,neu tiep tuc click thi playDoor se chay tiep len ham if de thuc hien dk numCloseDoors =0, nen ko de xay ra
   }
}

var randomChoreDoorGenerator = () =>{// tao mac dinh hinh anh cho moi cua
    var choreDoor = Math.floor(Math.random()*numClosedDoors);
    console.log(choreDoor);
    if(choreDoor === 1){
     openDoor1 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
    }
    else if(choreDoor === 2){
     openDoor2 = botDoorPath;
     openDoor1 = beachDoorPath;
     openDoor3 = spaceDoorPath;
    }
     else if(choreDoor === 0){
     openDoor3 = botDoorPath;
     openDoor1 = beachDoorPath;
     openDoor2 = spaceDoorPath;
    }
}
doorImage1.onclick = () =>{
    if(isClicked(doorImage1)==false && currentlyPlaying){ //neu cua click vao dang dong(not isClicked) va curentlyPlaying là true( neu là false thì                                                           Gameover nhu trong ham gameover) thi mo cua
    doorImage1.src = openDoor1; 
    
    playDoor(doorImage1);
    }
}

doorImage2.onclick = () =>{
    if(isClicked(doorImage2)==false && currentlyPlaying){ 
    doorImage2.src = openDoor2; 
    playDoor(doorImage2);
    }
}

doorImage3.onclick = () =>{
    if(isClicked(doorImage3)==false && currentlyPlaying){
    doorImage3.src = openDoor3; 
    playDoor(doorImage3);
    }
}
var startRound = () => { // reset lai tu dau
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}


startButton.onclick = () =>{
    if(!currentlyPlaying){
        startRound();
}
}
var gameOver = (status) =>{// ham nay duoc goi trong playDoor
    if(status === 'win'){
        startButton.innerHTML="You win! Play again?";
    }else{startButton.innerHTML = 'Game over! Play again?';}
    currentlyPlaying = false;
}
startRound();



