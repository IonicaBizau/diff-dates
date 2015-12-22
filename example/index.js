const diffDates = require("../lib");

var present = new Date(2015, 11, 16)
  , romanianRevolution = new Date(1989, 11, 16)
  ;

console.log(diffDates(present, romanianRevolution));
// => 820454400000

console.log(diffDates(present, romanianRevolution, "years"));
// => 26

console.log(diffDates(present, romanianRevolution, "months"));
// => 312

console.log(diffDates(present, romanianRevolution, "days"));
// => 9496

console.log(diffDates(present, romanianRevolution, "hours"));
// => 227904

console.log(diffDates(present, romanianRevolution, "minutes"));
// => 13674240

console.log(diffDates(present, romanianRevolution, "seconds"));
// => 820454400
