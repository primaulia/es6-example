function Polygon(height, width) {
  this.height = height;
  this.width = width;

  this.calcArea = function() {
    return this.height * this.width;
  }
}

var square = new Polygon( 50, 50 );


function Square(height, width, sides) {
  Polygon.call(this, height, width);
  this.sides = sides;
}

Square.prototype.calcArea = function() {
  return Math.pow(height, 2);
}


var s1 = new Square(50, 50, 4);
var s2 = new Square(100, 100, 4);
