function Birds(option){
    this.ctx=option.ctx;
    this.birdsImg=option.birdsImg;
    this.index=0;
    this.birdsX=0;
    this.birdsY=0;
    this.birdsW=this.birdsImg.width/3;
    this.birdsH=this.birdsImg.height;
    //��ʼ�ٶ�
    this.birdsSpeed=0;
    this.g=0.0003;
    //С��ʼ��λ��
    this.canvasX=100;
    this.canvasY=100;
    //������ת�Ƕ�
    this.maxRotate=45;
    //��������ٶ�
    this.maxSpeed=0.45;
}
Birds.prototype={
    constructor:Birds,
    drawBirds:function(offset){
        //��С���������壬�������ٶ��㷨
        //distanceY=Vo*t+gt*t/2
        //Vt=Vo+gt
        var distanceY=this.birdsSpeed*offset+this.g*offset*offset/2;
        //С�����µ�����ٶ�
        this.birdsSpeed=this.birdsSpeed+this.g*offset;
        this.canvasY+=distanceY;
        this.birdsX=this.index*this.birdsW;
        //������С��ͷ������ת�仯
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