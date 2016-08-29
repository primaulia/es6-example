class Polygon {
  constructor(height, width, sides = 4) {
    this.height = height;
    this.width = width;
  }

}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength, 4);
  }
}

class Triangle extends Polygon {
  constructor(height, base) {
    super(height, base, 3);
  }
}

var s1 = new Square(50);
var t1 = new Triangle(10, 10);
