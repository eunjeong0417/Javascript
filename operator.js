1.String concatenation

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(`string literals: 

........1 + 2 = ${1 + 2}`);


console.log('eunjeong\'s book');

2. Numeric operators
console.log( 1 + 2); //add
console.log( 1 - 1); //substract
console.log( 1 / 1); //divide 
console.log( 1 * 1); //multiply
console.log( 5 % 2); //remainder
console.log( 2 ** 3); //exponentiation


3. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;

counter = counter + 1;
preIncrement = counter;


console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


  
preIncrement = counter;
counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


for( let i = 0; i < 10; i++ ){
    if( i % 2 === 0){
        console.log(i)
    }
}


for( let i = 0; i < 15; i++ ){
    if( i % 3 === 0){
        console.log(i)
    }
}
