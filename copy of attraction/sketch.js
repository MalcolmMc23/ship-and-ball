// McDonald
// 9 9 21
//Lab 909 attraction
let movers = [];
let mainMover;

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.position((windowWidth - width) / 2, 30);
  loadMovers(100);
}

function draw(){
  background(20)
  mainMover.run()
  for( let i = 0; i < movers.length; i++){
      movers[i].run();
    }
}
function loadMovers(n){
  mainMover = new Mover (width/2, height/2)
  for( let i =0; i < n; i++){
  let a = random(width)
  let b = random(height)
  movers[i] = new Mover(a,b)
}
    // movers.push(new Mover(width/2, 33, random(20,30)))
  }

//++++++++++++++++++++++++++++++  Mover class

class Mover{

  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-3,3), random(-3,3));
    this.acc = createVector(0, 0)
    this.clr = color (250,100,50)
    this.diam = 15;
  }

  run(){
    this.update();
    this.checkEdges();
    this.render();
  }

  update(){
    let distToMainMover = this.loc.dist(mainMover.loc)
    this.acc = p5.Vector.sub(mainMover.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.06);

  if (distToMainMover < 150) {
    this.acc = p5.Vector.sub(this.loc, mainMover.loc);
    this.acc.normalize();
    this.acc.mult(1.5);
  }
  this.vel.add(this.acc);
  if (this === mainMover) {
this.vel.limit(2);
  } else {
  this.vel.limit(3);
}
    this.loc.add(this.vel);
  }

  checkEdges(){
    if (this.loc.x > width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = width;
    if (this.loc.y > height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = height;


  }

  render(){
    let distToMainMover = this.loc.dist(mainMover.loc)

    if (this === mainMover) {
      this.clr = color(20, 250, 230);
    } else {
      this.clr = color(250,0,0);
    }
    if(distToMainMover > 150){
      this.clr = color(250, 120, 90);
    } 
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.diam)
  }

}//++++++++++++++++++++++++++++++  end ball class
