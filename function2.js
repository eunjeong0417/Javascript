


function printOrange(){
    console.log("orange");
}
printOrange();



function printOrange(name){
    console.log(name);
}
printOrange('apple');
 


function printOrange(name, price){
    console.log(name + "은 "+price+"원 입니다.");
}
printOrange('apple',5000);


function add(x,y){
    return x + y;
}
add(5,3);

function a(a,b){
    console.log(a,b);
}
a('Hello','Parameter','Argument');



function a(x,y,z){
    return x * y * z;
}
console.log(a(5,3,2));
console.log(a(20,12,5));



const a = (x, y, z) =>{
    return x * y * z;
}
a(3,5,2)



const a = (x, y, z) =>  x * y * z;

a(3,5,2)



function m(x,y){
    const a = 100;
    return (x - y) * a;
}
console.log(m(5,3));



const a = 50;
function m(x,y){
    return (x - y) * a;
}
console.log(m(5,3));

