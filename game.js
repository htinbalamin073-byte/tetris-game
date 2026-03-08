const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 0;
let score = 0;
let game;

function draw(){
ctx.clearRect(0,0,240,400);
ctx.fillStyle="cyan";
ctx.fillRect(x,y,20,20);
}

function update(){
y += 20;

if(y > 380){
y = 0;
score += 10;
document.getElementById("score").innerText = score;
}

draw();
}

function startGame(){
clearInterval(game);
game = setInterval(update,500);
}

function restartGame(){
x = 100;
y = 0;
score = 0;
document.getElementById("score").innerText = score;
startGame();
}

function moveLeft(){
x -= 20;
draw();
}

function moveRight(){
x += 20;
draw();
}

function moveDown(){
y += 20;
draw();
}

function rotate(){
}

document.addEventListener("keydown",function(e){

if(e.key=="ArrowLeft") moveLeft();
if(e.key=="ArrowRight") moveRight();
if(e.key=="ArrowDown") moveDown();

});
