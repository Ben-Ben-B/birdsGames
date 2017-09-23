function Land(option){
    this.ctx=option.ctx;
    this.img=option.landImg;
    this.landX=option.landX;
    this.landY=option.landY;
    this.landSpeed=2;
}
Land.prototype={
    constructor:Land,
    drawLand:function() {
        if(this.landX<-this.img.width){
            this.landX+=(this.img.width*4)
        }
        this.landX-=this.landSpeed;
        this.ctx.drawImage(this.img, this.landX, this.landY)
    }
}
