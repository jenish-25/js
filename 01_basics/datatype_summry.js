 //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null   //null
let userEmail;   //undefined

const id = Symbol('*')
const anotherId = Symbol('*')
// console.log(id);
// console.log(typeof id);
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n  //bigint
console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"];   //array     //type>object
let myObj = {                        //object               //type>object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){         //function stored in variable        //type>function
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);