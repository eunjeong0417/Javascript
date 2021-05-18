function a(x,y){
    return x + y + 5;
}
a(9,2)




function a(x,y){
    return x + y + 3 + 5;
}

a(2,3)
a(5,9)



const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);




function a(){
    document.getElementById('alert').style.display = 'block';
}

let f2 = function(age) {
    return age + 2;
}
f2(3);


let f2 = age => age + 2;
console.log(f2(1));



let func = (name) =>  console.log('Hi!' + name);

func('eunjeong');




let func = (name) => {
    
    console.log('Hi!' + name);
}

func('eunjeong');



let func = () => {
    
    console.log('Hi!');
}

func();
 
let f3 = function (a,b) {
    return a + b;
}
f3(2,8);

let f3 = (a,b) => a + b;
f3(3,9);


var a = {
    b: function(){

    }
}

var a = function(func) {
    func();
};
var b = function() {
    alert('Hi!')
}
a(b);

