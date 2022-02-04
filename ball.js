class Ball {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.size = 20
    }

    run() {
        this.update();
        this.render();
        // this.sides();
    }
    update() {
        // let distToShip = this.loc.dist()
        // if(distToShip < 100){
        //     this.loc.x = random(width);
        //     this.loc.y = random(height);
        // }
    }

    render() {
        ellipse(this.loc.x, this.loc.y, this.size)
    }

    sides() {
    

    }
}