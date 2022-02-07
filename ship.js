class Ship {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.vel = createVector(random(-3,3), random(-3,3))
        this.acc = createVector(0, 0);

        this.size = 20
    }

    run() {
        this.render();
        this.update();
        this.sides();
    }

    render() {
        // rect(this.loc.x, this.loc.y, this.size);
        push();
        translate(this.loc.x, this.loc.y);
        rotate(this.vel.heading());
        quad(-10, -10, -5, 0, -10, 10, 15, 0);
        pop();
    }

    update() {
        // let distToBall = this.loc.dist(ball.loc)
        this.acc = p5.Vector.sub(ball.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(1.0);
        this.vel.add(this.acc);
        this.vel.limit(3);
          this.loc.add(this.vel);          
    }

    sides() {
        if (this.loc.x > width) this.loc.x = 0;
        if (this.loc.x < 0) this.loc.x = width;
        if (this.loc.y > height) this.loc.y = 0;
        if (this.loc.y < 0) this.loc.y = height;
    
    }
}