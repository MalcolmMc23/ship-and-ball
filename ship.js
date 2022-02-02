class Ship {
    constructor(x, y) {
        this.loc = createVector(x, y)
        this.size = 20
    }

    run() {
        this.render();
        this.update();
        this.sides();
    }

    render() {
        rect(this.loc.x, this.loc.y, this.size);
    }
}