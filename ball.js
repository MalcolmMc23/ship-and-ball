class Ball {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.size = 20
    }

    run() {
        this.update();
        this.render();
        this.sides();
    }
    update() {

    }

    render() {
        ellipse(this.loc.x, this.loc.y, this.size)
    }

    sides() {
        var distToBall = this.loc.dist(ship.loc)
        if(distToBall < 50) {
            console.log("true")
        }

    }
}