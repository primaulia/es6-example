'use strict';

var _the_other_side = require('./the_other_side');

var hellow = _interopRequireWildcard(_the_other_side);

var _Person = require('./Person');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// greeting();

hellow.adele();

// import Person.js

hellow.atan();
hellow.junius();
hellow.boy();
console.log(hellow.age);
console.log(hellow.MONGO_URL);

// adele();
// atan();

// console.log(MONGO_URL);
//
// function greeting() {
//   console.log( ` My name is ${name} and my age is ${age}` );
// }