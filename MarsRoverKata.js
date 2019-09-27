let marsRover = {
  name: "Rover-I",
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[
    {x: 0, y: 0}
  ],
};

let secondRover = {
  name: "Rover-II",
  direction: "S",
  x: 0,
  y: 9,
  travelLog:[
    {
      x: 0, y: 9
    }
  ],
};

let obstacle = {
  x: 2,
  y: 4,
};

let newX = 0;
let newY = 0;


function turnLeft(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    default:
      rover.direction = "N";
      console.log("Direction was not properly set. Turned to the default direction. " + rover.name + " now facing: " + rover.direction);
      break;
  }
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log(rover.name + " facing: " + rover.direction);
      break;
    default:
      rover.direction = "N";
      console.log("Direction was not properly set. Turned to the default direction. " + rover.name + " now facing: " + rover.direction);
      break;
  }
}

function moveForward(rover){
  newX = rover.x;
  newY = rover.y;
  switch(rover.direction){
    case "N":
      newY -= 1;
      break;
    case "E":
      newX += 1;
      break;
    case "S":
      newY += 1;
      break;
    case "W":
      newX -= 1;
      break;
    default:
      rover.direction = "N";
      console.log("Direction was not properly set. Turned to the default direction. " + rover.name + " now facing: " + rover.direction);
      break;
  }
  printCoordinatesAfterMoving(rover);
 
}


function moveBackward(rover){
  newX = rover.x;
  newY = rover.y;
  switch(rover.direction){
    case "N":
      newY += 1;
      break;
    case "E":
      newX -= 1;
      break;
    case "S":
      newY -= 1;
      break;
    case "W":
      newX += 1;
      break;
    default:
      rover.direction = "N";
      console.log("Direction was not properly set. Turned to the default direction. " + rover.name + " now facing: " + rover.direction);
      break;
  }
printCoordinatesAfterMoving(rover);
}



function printCoordinatesAfterMoving(rover){
  if (newX == obstacle.x && newY == obstacle.y){
    console.log("This moving command cannot be performed, as obstacle is found, and it is blocking the way.");
    console.log(`${rover.name}'s current position is x: ${rover.x}, y: ${rover.y}`);
  }
  else if((newX == secondRover.x && newY == secondRover.y) || 
  (newX == marsRover.x && newY == marsRover.y)){
    console.log("This moving command cannot be performed, as another rover is blocking the way.");
    console.log(`${rover.name}'s current position is x: ${rover.x}, y: ${rover.y}`);
  }
  else if(newX >= 0 && newX <= 9 && newY >= 0 && newY <= 9){
    rover.x = newX; 
    rover.y = newY;
    let newPosition = {x: rover.x,y: rover.y};
    rover.travelLog.push(newPosition);
    console.log(`${rover.name}'s current position is x: ${rover.x}, y: ${rover.y}`);
  }
  else{
    console.log("This moving command cannot be performed, as the rover cannot be placed out of the grid.");
    console.log(`${rover.name}'s current position is x: ${rover.x}, y: ${rover.y}`);
  }
}



function listOfCommand(rover, commandString){

  var validCommand = false;
  var count = 0;

  for(var i = 0; i < commandString.length; i++){
    if(commandString[i] != "f" && commandString[i] != "b" && commandString[i] != "l" && commandString[i] != "r"){
      console.log("This command list cannot be performed, as invalid Input is found. Please enter the command again.");
      break;
    }else{
      count++;
    }
  }  

  if (count == commandString.length) {
    validCommand = true;
  }

  if(validCommand){

    for(var i = 0; i < commandString.length; i++){
      switch(commandString[i]){
          case "f":
            moveForward(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          default:
            turnRight(rover);
            break;
      }          
    }   
  } 
}

turnLeft(marsRover);  //W
turnLeft(marsRover);  //S
turnLeft(marsRover);  //E
turnLeft(marsRover);  //N
listOfCommand(marsRover, "rrrr");  // E S W N
moveForward(marsRover);  // can't move forward   position: 0,0
listOfCommand(marsRover, "bbb");      // 0,1  0,2  0,3
listOfCommand(marsRover, "rrlcbll");  //Invalid input
listOfCommand(marsRover, "brf");     // 0,4  E  1,4  
moveForward(marsRover);  //Obstacle found. Rover-I's current position is x: 1, y: 4"



listOfCommand(secondRover, "rrffffflb"); // W N  0,8  0,7  0,6  0,5  0,4  W   
//another rover is blocking the way   current position: 0,4


console.log(marsRover.name, marsRover.travelLog);
console.log(secondRover.name, secondRover.travelLog);

marsRover.direction = "I";
turnLeft(marsRover); //Improper diection setting