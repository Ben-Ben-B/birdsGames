function Birds(option){
    this.ctx=option.ctx;
    this.birdsImg=option.birdsImg;
    this.index=0;
    this.birdsX=0;
    this.birdsY=0;
    this.birdsW=this.birdsImg.width/3;
    this.birdsH=this.birdsImg.height;
    //初始速度
    this.birdsSpeed=0;
    this.g=0.0003;
    //小鸟开始的位置
    this.canvasX=100;
    this.canvasY=100;
    //最大的旋转角度
    this.maxRotate=45;
    //最大下落速度
    this.maxSpeed=0.45;
}
Birds.prototype={
    constructor:Birds,
    drawBirds:function(offset){
        //让小鸟自由落体，重力加速度算法
        //distanceY=Vo*t+gt*t/2
        //Vt=Vo+gt
        var distanceY=this.birdsSpeed*offset+this.g*offset*offset/2;
        //小鸟落下的最大速度
        this.birdsSpeed=this.birdsSpeed+this.g*offset;
        this.canvasY+=distanceY;
        this.birdsX=this.index*this.birdsW;
        //下落中小鸟头部的旋转变化
        var birdsRotate=this.birdsSpeed*this.maxRotate/this.maxSpeed;
        this.ctx.save()
        this.ctx.translate(this.canvasX+this.birdsW/2,this.canvasY+this.birdsH/2)
        this.ctx.rotate(birdsRotate*Math.PI/180);

        this.ctx.drawImage(this.birdsImg,this.birdsX,this.birdsY,this.birdsW,this.birdsH,-this.birdsW/2,-this.birdsH/2,this.birdsW,this.birdsH);
        this.ctx.restore()
        this.index++;
        if(this.index>2){
            this.index=0
        }
    }
}