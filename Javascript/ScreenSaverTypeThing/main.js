let canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#canvas'));
let ctx = canvas.getContext("2d");

canvas.style.position = "absolute";
canvas.style.backgroundColor = "black";
canvas.style.left = 0;
canvas.style.right = 0;
canvas.style.top = 0;
canvas.style.bottom = 0;

let x = 16;
let y = 16;
let r = 32

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function Setup(){
    canvas.width = window.innerWidth;    
    canvas.height = window.innerHeight;    
    
    Update();
}
function Update(){
    requestAnimationFrame(Update)
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    let rm = getRandomInt(0,4);
    if(x < canvas.width - r*2){
        if(rm == 0){
            x += r*2;
        }
    }
    if(x > r*2){
        if(rm == 1){
            x -= r*2;
        }
    }
    if(y < canvas.height - r*2){
        if(rm == 2){
            y += r*2;
        }
    }
    if(y > r*2){
        if(rm == 3){
            y -= r*2;
        }
    }
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
    ctx.fill();
}

Setup();