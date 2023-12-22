class Segments{

    constructor(p1, p2){

        this.p1 = p1;
        this.p2 = p2;
    }

    draw(cntxt, width = 2, color = "black"){
        
        cntxt.beginPath();
        cntxt.lineWidth = width;
        cntxt.strokestyle = color;
        cntxt.moveTo(this.p1.x, this.p1.y);
        cntxt.lineTo(this.p2.x, this.p2.y);
        cntxt.stroke(); 
    }
}