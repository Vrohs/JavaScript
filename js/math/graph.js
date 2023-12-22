class Graph {

    constructor(points = [], segments = []) {
        
        this.points = points;
        this.segments = segments;
    }

    draw(cntxt){

        for(const segs of this.segments){

            segs.draw(cntxt);
        }

        for(const pts of this.points){

            pts.draw(cntxt);
        }
    }
}



