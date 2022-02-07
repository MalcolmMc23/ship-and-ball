// Malcolm McDonald
// 2/2/22
// ship and ball

var ships = [];
var ball;
let ship;

function setup() {
  var cnv = createCanvas(600, 500);
  cnv.position((windowWidth-width)/2, 30);
  //loadShips(1);
  ball = new Ball(random(width), random(height));
  ship = new Ship(random(width), random(height));
}

function draw(){
  background(20)
  ball.run();
  ship.run();
  // for(var i = 0; i < ships.length; i++) {
  //   ships[i].run()
  // }
}


function loadShips(n) {
 
  for(var j = 0; j < n; j++) {
    ships[j] = new Ship(random(width), random(height));
  }
}
