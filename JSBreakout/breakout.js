"use strict";
document.addEventListener('DOMContentLoaded', function(){
  //Add Bricks
  var x = 0;
  var y = 0;
  var brickCounter = 0;
  var main = document.getElementById('main');
  for (x=0; x<10; x++){
    for (y=-0; y<10; y++){
      var myBrick = document.createElement('div');
      myBrick.className = 'brick';
      myBrick.classList.add('row'+x);
      myBrick.classList.add('col'+y);
      main.appendChild(myBrick);
    };
  };

  //Show Paddle & Center it on Screen
  var myPaddle = document.createElement('div');
  myPaddle.id = 'paddle';
  myPaddle.style.left = (main.clientWidth-140)/2; //Dynamic Implementation Boken --> myPaddle.style.left = (main.clientWidth-myPaddle.offsetWidth)/2;
  main.appendChild(myPaddle);

  //Event Handler for Mouse move
 document.body.addEventListener('mousemove', function (event)
 {
   var x = event.clientX;
   var myx = x-main.offsetLeft-(myPaddle.offsetWidth/2);
   if (myx < 0){
     myx = 0;
   }
   else if(myx > main.clientWidth-(myPaddle.offsetWidth)){
     myx = main.clientWidth-(myPaddle.offsetWidth);
   }
   myPaddle.style.left = myx;
   myPaddle.style.right = (myx+parseInt(myPaddle.clientWidth));
   myPaddle.style.top = 550;
 })

   //Show the Ball & Center it on Screen
 var myBall = document.createElement('div');
 var makeBall = function(){
    myBall.id = 'ball';
    //myBall.style.left = (main.clientWidth-myBall.offsetWidth)/2;
    myBall.style.left = (main.clientWidth-30)/2;
    myBall.style.top = (main.clientHeight)/2;
    main.appendChild(myBall);
    main.removeEventListener('click', makeBall);
  }

  // Add Variables for Move Ball
  main.addEventListener('click', makeBall);
  var brokenBricks=[];
  var totalBricks = 0;
  var msPerFrame = 20; // ball velocity
  var secondsPerFrame = msPerFrame / 1000;
  var vx = secondsPerFrame * (Math.floor(Math.random() * 400) + 200); // This sets horizontal rate to 200-600 pixels/second
  if (Math.random() < 0.5){
   vx = -vx;
 };
  var vy = secondsPerFrame * 500; // This sets verical rate to 500 pixels/second
  var xHitSolidObject = false;
  var yHitSolidObject = false;
  var hitPaddle = false;

  //Does Ball hit a brick?
  function hitBrick(x, y) {
    var brickx = 80;  // dimensions of a brick
    var bricky = 20;
    var col = Math.floor(x / brickx);
    var row = Math.floor((y - 100) / bricky);
    if (!(row < 0 || row >= 10 || col < 0 || col >= 10)) {// not in the right area
      if (!((x+2) % brickx < 4 || (y+2) % bricky < 4)){// not quite in the brick--it's in the white border around a brick
      var key = String(col)+','+String(row);
        if (!(brokenBricks[key] === true)){
          brokenBricks[key] = true; // now it has
          var brokenBrick = document.getElementsByClassName("row"+row+' '+"col"+col);
          brokenBrick[0].classList.add('broken');
          return true;
        }
      }
    }
    else{
      return false;
    }
  }

  //MoveBall Function
  var moveBall = function() {
    var x = parseInt(myBall.style.left);
    var y = parseInt(myBall.style.top);
    //Does Ball Hit a Brick
    if (hitBrick(x, y) === true){ // Top Left
      totalBricks += 1;
      yHitSolidObject =  true; //reverse
    }
    else{
      if (hitBrick(x+parseInt(myBall.clientHeight), y) === true){ // Top Right
        totalBricks += 1;
        yHitSolidObject =  true; //reverse
      }
    }
    if (hitBrick(x, y+parseInt(myBall.clientWidth)) === true){ // Bottom Left
      totalBricks += 1;
      yHitSolidObject =  true; //reverse
    }
    else{
      if (hitBrick(x+parseInt(myBall.clientWidth), y+parseInt(myBall.clientWidth)) === true){ // Bottom Right
        totalBricks += 1;
        yHitSolidObject =  true; //reverse
      }
    }
    //Check if Game Over
    if (totalBricks >= 101){
      alert("Congratulations!!! You've Won!");
      document.location.reload();
    }
    //Does Ball hit the paddle
    if  (!(x  > parseInt(myPaddle.style.right))){
      if (!(x+parseInt(myBall.clientWidth) < parseInt(myPaddle.style.left))){
        if(!(y+parseInt(myBall.clientHeight) < parseInt(myPaddle.style.top))){
          if(!(y > parseInt(myPaddle.style.top)+parseInt(myPaddle.clientHeight))){
            y = (parseInt(myPaddle.style.top)-parseInt(myBall.clientHeight));
            hitPaddle = true;
          }
        }
      }
    }
    //Does Ball Hit a Wall
    if (x <= 0){ //Left Wall
      myBall.style.left = myBall.clientWidth;
      xHitSolidObject = true;
    }
    else if (x >= parseInt(main.clientWidth)-parseInt(myBall.clientWidth)){ //Right Wall
      myBall.style.left = parseInt(main.clientWidth)-parseInt(myBall.clientWidth);
      xHitSolidObject = true;
    }
    else if (y  <= 1){// Top Wall
      myBall.style.top = parseInt(myBall.clientHeight);
      yHitSolidObject = true;
    }
    else if (y  >= parseInt(main.clientHeight)-parseInt(myBall.clientWidth)){ // Bottom Wall
      myBall.style.top = parseInt(main.clientHeight)-parseInt(myBall.clientWidth);
      yHitSolidObject = true;
      alert("Epic Fail!");
      document.location.reload();
    }
    //Change Ball Direction
    if (xHitSolidObject === true){
      vx *= -1;
      yHitSolidObject = false;
      xHitSolidObject = false;
    }
    if (yHitSolidObject === true){
      vy *= -1;
      yHitSolidObject = false;
      xHitSolidObject = false;
    }
    if (hitPaddle === true){
      vy = Math.abs(vy)*-1;
      hitPaddle = false;
    }
    myBall.style.left = x+vx;
    myBall.style.top = y+vy;
  }
  var intervalID = window.setInterval(moveBall, msPerFrame); //Timer Event to get the Ball Moving
});
