"use strict";

var name = "Boy",
    age = 25;

var me = { name: name, age: age };

var x = 1;

if (true) {
  var _x = 2;

  if (true) {
    var _x2 = 3;
  }
}

function testRest(x) {
  console.log(x);

  for (var _len = arguments.length, theArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    theArgs[_key - 1] = arguments[_key];
  }

  console.log(theArgs);
}

testRest(1, 2, 3, 4, 5);