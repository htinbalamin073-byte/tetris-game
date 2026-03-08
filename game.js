const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const grid = 20;
const rows = canvas.height / grid;
const cols = canvas.width / grid;

let board = [];

for(let r=0;r<rows;r++){
    board[r] = [];
    for(let c=0;c<cols;c++){
        board[r][c] = 0;
    }
}

let piece = {
    x:5,
    y:0,
    shape:[
        [1,1],
        [1,1]
    ]
};

function drawSquare(x,y){
    ctx.fillStyle="cyan";
    ctx.fillRect(x*grid,y*grid,grid-1,grid-1);
}

function drawBoard(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(board[r][c]){
                drawSquare(c,r);
            }
        }
    }

    for(let r=0;r<piece.shape.length;r++){
        for(let c=0;c<piece.shape[r].length;c++){
            if(piece.shape[r][c]){
                drawSquare(piece.x+c,piece.y+r);
            }
        }
    }
}

function update(){
    piece.y++;

    if(piece.y > rows-2){
        piece.y = 0;
    }

    drawBoard();
}

setInterval(update,500);
