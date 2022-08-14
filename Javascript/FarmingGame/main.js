let canvas = /** @type {HTMLCanvasElement}*/(document.querySelector("canvas"));

canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.bottom = 0;
canvas.style.left = 0;
canvas.style.right = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = "rgb(0,125,0)";

let ctx = canvas.getContext("2d");
let gridSize = 32;
let gridPos = {x:0,y:0};

ctx.drawImage

let player,mouse;

let gridSquare = new Rect(0,0,gridSize,gridSize,"black",false,true);

function Setup(){
    player = new Player(new Rect(0,0,32,32,"coral"));
    mouse = new Mouse(new Rect(0,0,8,8,"black"));
    Update();
}
function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    gridPos.x = Math.floor((mouse.rect.x/gridSize))*gridSize;
    gridPos.y = Math.floor((mouse.rect.y/gridSize))*gridSize;
    
    gridSquare.x = gridPos.x;
    gridSquare.y = gridPos.y;

    gridSquare.Draw(ctx);
    
    // mouse.Draw(ctx);

    player.Update(ctx);
    
}

document.addEventListener("mousemove",(e)=>{
    mouse.rect.x = e.clientX;
    mouse.rect.y = e.clientY;
});

document.addEventListener("mousedown",(e)=>{
    mouse.keys[e.which] = true;
});

document.addEventListener("mouseup",(e)=>{
    mouse.keys[e.which] = false;
});

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

document.addEventListener("keydown",(e)=>{
    player.keys[e.key] = true;
})
document.addEventListener("keyup",(e)=>{
    player.keys[e.key] = false;
})
Setup();