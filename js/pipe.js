function Pipe(option){
    this.ctx=option.ctx;
    this.pipeImgTop=option.pipeImgTop;
    this.imgW=this.pipeImgTop.width;
    this.imgH=this.pipeImgTop.height;
    this.pipeImgBottom=option.pipeImgBottom;
    this.x=option.canvasX;
    this.pipeSpeed=2;
    this.topY=0;
    this.bottomY=0;
    this.space=150;
    this.getY();

}
Pipe.prototype={
    constructor:Pipe,
    drawPipe:function(){
        if(this.x<-(this.imgW*3)){
            this.x+=(3*this.imgW)*7;
            this.ctx.beginPath();
            this.getY();
        }

        this.x-=this.pipeSpeed;
        //�����ϱ߹ܵ�
        this.ctx.drawImage(this.pipeImgTop,this.x,this.topY);
        //�����ϱ�·��
        this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);
        //�����±߹ܵ�
        this.ctx.drawImage(this.pipeImgBottom,this.x,this.bottomY);
        //�����±�·��
        this.ctx.rect(this.x,this.bottomY,this.imgW,this.imgH)
    },
    getY:function(){
        this.topY=-(Math.random()*240+130);
        this.bottomY= this.topY + this.imgH + this.space;
    }
}
