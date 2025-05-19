let mym  = require('./NodeModulemymodule2.js');

let num = mym.num;
console.log("Prime number: ",mym.isPrime(num));
console.log("Factorial number: ",mym.calFact(num));
console.log("Perfect number: ",mym.isPerfect(num));
