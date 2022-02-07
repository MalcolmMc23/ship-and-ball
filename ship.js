class Ship {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.vel = createVector(random(-3,3), random(-3,3))
        this.acc = createVector(0, 0);
        this.size = 20

        this.anch2 = createVector(random(width), random(height));

        this.anchAcc = createVector(0, 0);


    }

    run() {
        this.render();
        this.update();
        this.sides();
    }

    render() {


        xoff = xoff + -0.01;
        var x = noise(xoff) * -45
        var y = random(5, -5);

        this.anch = createVector(mouseX, mouseY);

        

        // rect(this.loc.x, this.loc.y, this.size);
        push();
        translate(this.loc.x, this.loc.y);
        rotate(this.vel.heading());
        fill(255,255,255);
        quad(-10, -10, -5, 0, -10, 10, 15, 0);//ship
        fill(255,0,0)
        quad(-10, -5,   -5, 0,   -10, 5,   x, y);//flame
        pop();
        fill(255,255,255);
        // line(this.loc.x, this.loc.y, ball.loc.x, ball.loc.y)
        // bezier(this.loc.x, this.loc.y, this.anch.x, this.anch.y, this.anch2.x, this.anch2.y, ball.loc.x, ball.loc.y)

        fill(255,0,0);
        ellipse(this.anch.x, this.anch.y, this.size);//ancher 1
        fill(0,255,0)
        ellipse(this.anch2.x, this.anch2.y, this.size);//ancher 2


    }

    update() {
        this.acc = p5.Vector.sub(ball.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
        this.vel.add(this.acc);
        this.vel.limit(3);
        this.loc.add(this.vel); 
        
        
        var distToAnch = this.anch.dist(this.loc); // anch attraction 
         if(distToAnch < 200) {
            console.log('working')

        this.anchAcc = p5.Vector.sub(this.anch, this.loc);
        this.anchAcc.normalize();
        this.anchAcc.mult(0.09);
        this.vel.add(this.anchAcc);
         }

    }

    sides() {
        if (this.loc.x > width) this.loc.x = 0;
        if (this.loc.x < 0) this.loc.x = width;
        if (this.loc.y > height) this.loc.y = 0;
        if (this.loc.y < 0) this.loc.y = height;
    
    }
}