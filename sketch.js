// Malcolm McDonald
// 2/2/22
// ship and ball

var ships = [];
var ball;

function setup() {
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadShips(1);

}

function draw(){
  background(20,20,20,20)
  ball.run();
  for(var i = 0; i < ships.length; i++) {
    ships[i].run()
  }
}


function loadShips(n) {
  ball = new ball(random(width), random(height));
  for(var j = 0; j < n; j++) {
    ships[j] = new Ship(random(width), random(height));
  }
}
