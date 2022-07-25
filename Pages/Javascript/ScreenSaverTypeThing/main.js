let canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#canvas'));
let ctx = canvas.getContext("2d");

canvas.style.position = "absolute";
canvas.style.backgroundColor = "black";
canvas.style.left = 0;
canvas.style.right = 0;
canvas.style.top = 0;
canvas.style.bottom = 0;


class Dot{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    UpdatePos(){
        let rm = getRandomInt(0,4);
        if(this.x < canvas.width - this.r*2){
            if(rm == 0){
                this.x += this.r*2;
            }
        }
        if(this.x > this.r*2){
            if(rm == 1){
                this.x -= this.r*2;
            }
        }
        if(this.y < canvas.height - this.r*2){
            if(rm == 2){
                this.y += this.r*2;
            }
        }
        if(this.y > this.r*2){
            if(rm == 3){
                this.y -= this.r*2;
            }   
        }
    }
    Draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
        ctx.fill();
    }
    Update(ctx){
        this.UpdatePos();
        this.Draw(ctx);

    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let d1;

function Setup(){
    canvas.width = window.innerWidth;    
    canvas.height = window.innerHeight;    
    d1 = new Dot(32,32,32);
    Update();
}
function Update(){
    requestAnimationFrame(Update)
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    d1.Update(ctx);
}

Setup();