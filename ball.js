class Ball {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.size = 20
    }

    run() {
        this.render();
        this.update();
        // this.sides();
    }
    update() {
        let distToShip = this.loc.dist(ship.loc)
        if(distToShip < 75){
            this.loc.x = random(width);
            this.loc.y = random(height);
        }
    }

    render() {
        fill(255,255,255);
        ellipse(this.loc.x, this.loc.y, this.size)
    }

    sides() {
    

    }
}