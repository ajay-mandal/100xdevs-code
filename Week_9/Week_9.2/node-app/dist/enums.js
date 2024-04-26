"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "Ajay";
    Direction["Down"] = "Mandal";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
}
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
