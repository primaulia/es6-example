"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function Polygon(height, width) {
  var sides = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];

  _classCallCheck(this, Polygon);

  this.height = height;
  this.width = width;
};

var Square = function (_Polygon) {
  _inherits(Square, _Polygon);

  function Square(sideLength) {
    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, sideLength, sideLength, 4));
  }

  return Square;
}(Polygon);

var Triangle = function (_Polygon2) {
  _inherits(Triangle, _Polygon2);

  function Triangle(height, base) {
    _classCallCheck(this, Triangle);

    return _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, height, base, 3));
  }

  return Triangle;
}(Polygon);

var s1 = new Square(50);
var t1 = new Triangle(10, 10);