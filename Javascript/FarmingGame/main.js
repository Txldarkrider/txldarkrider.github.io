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

let player;

function Setup(){
    player = new Player(new Rect(0,0,32,32,"coral"));
    Update();
}
function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.Update(ctx);
    
}

document.addEventListener("keydown",(e)=>{
    player.keys[e.key] = true;
})
document.addEventListener("keyup",(e)=>{
    player.keys[e.key] = false;
})
Setup();