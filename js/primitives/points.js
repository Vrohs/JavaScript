class Points{

    constructor(x, y){

        this.x = x;
        this.y = y;
    }

    draw(cntxt, size = 18, color = black){

        const rad = size/2;
        cntxt.beginPath();
        cntxt.fillstyle = color;
        cntxt.arc(this.x, this.y, rad, 0, Math.PI * 2);
        cntxt.fill();
    }
}