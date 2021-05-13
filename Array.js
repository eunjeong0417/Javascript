//Array

//Index position
const arr1 = new Array();
const arr2 = [1,2];

Index position

const fruits = [apple,banana];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length -1]);

//Looping over an array
//print all fruits
for(let i = 0; i <fruits.length; i++){
    console.log(fruits[i]);
}


for(let fruit of fruits){
    console.log(fruit);
}


fruits.forEach((fruit) => console.log(fruit));


//Add, delete,copy

fruits.push('mango','melon');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);



fruits.unshift('mango','melon');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits); 


//splice

fruits.push('lemon', 'apple','mango');
console.log(fruits);
fruits.splice(1,1)
fruits.splice(1,1,'watermelon','grape')


const fruits2 = ['lemon', 'apple'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits)




const arrayOfArray = [[1,2,3], [4,5]];
arrayOfArray[0];

const a = 5;
const b = 55;
const variableArray = [a, b, 30];
variableArray[0];


const a = 5;
const b = 55;
const variableArray = [a, b, 30];
variableArray[1];

const findLastElement = ['a', 'b', 'c', 'd','e'];
console.log(findLastElement[findLastElement.length -1]);


const arr = [1,2,3,4,5];
console.log(arr[arr.length -2]);

const target = ['a', 'b', 'c', 'd','e'];
target[2] = 'apple';
console.log(target);

const target = ['a', 'b', 'c', 'd','e'];
target[3] = 'banana';
console.log(target);

const target = ['a', 'b', 'c', 'd','e'];
target.unshift = ('banana');
console.log(target);

const target = ['a', 'b', 'c', 'd','e'];
target.push = ('banana');
console.log(target);




