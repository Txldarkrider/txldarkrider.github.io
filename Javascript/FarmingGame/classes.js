class Rect{
    constructor(x,y,w,h,c,fill=true,otln=false,image=false,imgF=""){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.otln = otln;
        this.fill = fill;
        this.img = image;
        this.imgF = imgF;
    }
    Draw(ctx){
        ctx.save();
            if(this.fill){
                ctx.fillStyle = this.c;
                ctx.fillRect(this.x, this.y,this.w,this.h);
            }
            if(this.otln){
                ctx.strokeStyle = this.c;
                ctx.strokeRect(this.x,this.y,this.w,this.h);
            }
            if(this.img){
                ctx.drawImage(this.imgF,this.x,this.y,this.w,this.h);
            }
        ctx.restore();
    }
}
class Player{
    constructor(rect){
        this.rect = rect;
        this.MaxSpd = {x:5,y:5};
        this.accel = {x:1,y:1};
        this.vel = {x:0,y:0};
        this.keys = [];
    }
    Draw(ctx){
        this.rect.Draw(ctx);
    }
    UpdatePos(){
        if(this.keys["w"] == true || this.keys["W"] == true){
            if(this.vel.y > -this.MaxSpd.y){
                this.vel.y -= this.accel.y;
                if(this.vel.y < this.MaxSpd.y){
                    this.vel.y = -this.MaxSpd.y;
                }
            }
        }else if(this.keys["s"] == true || this.keys["S"] == true){
            if(this.vel.y < this.MaxSpd.y){
                this.vel.y +=  this.accel.y;
                if(this.vel.y > this.MaxSpd.y){
                    this.vel.y = this.MaxSpd.y;
                }
            }
        }else{
            this.vel.y = 0;
        }
        if(this.keys["a"] == true || this.keys["A"] == true){
            if(this.vel.x > -this.MaxSpd.x){
                this.vel.x -= this.accel.x;
                if(this.vel.x < this.MaxSpd.x){
                    this.vel.x = -this.MaxSpd.x;
                }
            }
        }else if(this.keys["d"] == true || this.keys["D"] == true){
            if(this.vel.x < this.MaxSpd.x){
                this.vel.x +=  this.accel.x;
                if(this.vel.x > this.MaxSpd.x){
                    this.vel.x = this.MaxSpd.x;
                }
            }
        }else{
            this.vel.x = 0;
        }
        this.rect.x += this.vel.x;
        this.rect.y += this.vel.y;
    }
    Update(ctx){
        this.UpdatePos();
        this.Draw(ctx);
    }
}

class Mouse{
    constructor(rect){
        this.rect = rect;
        this.keys = [];
    }
    Draw(ctx){
        this.rect.Draw(ctx);
    }
}

class Plot{
    constructor(rect){
        this.rect = rect;
        this.currentPlant = "";
    }
    Draw(ctx){
        this.rect.Draw(ctx);
    }
}