function Sky(option){
    this.ctx=option.ctx;
    this.img=option.skyImg;
    this.skyX=option.skyX;
    this.skyW=this.img.width;
    this.skyY=0;
    this.skySpeed=2;
}
Sky.prototype={
    constructor:Sky,
    drawSky:function(){
        if(this.skyX<-this.skyW){
            this.skyX+=(this.skyW*2)
        }
        this.skyX-=this.skySpeed;
        this.ctx.drawImage(this.img,this.skyX,this.skyY)
    }
}