let name = "Boy",
    age = 25;

let me = { name, age };

let x = 1;

if(true) {
  let x = 2;

  if(true) {
    let x = 3;
  }
}

function testRest(x, ...theArgs) {
  console.log(x);
  console.log(theArgs);
}

testRest(1, 2, 3, 4, 5);
