
const user = {
    age:25,
    name:"abc"
};

console.log(user);
console.log(user.age);
console.log(user.name);
console.log(typeof user, user);

user.age = 40;
console.log(user.age);

user.name = "cde"
console.log(user.name);



const user = {
    age:25,
    name:"abc",
    fnc: function() {
        return 1 + 5;
    }
};

console.log(user.fnc());




const a = {};
a.name = 'abc'
a.age = 20;
a.fnc = function() {
    return 1 + 3;
};

console.log(a.name);
console.log(a.age);
console.log(a.fnc());




const user = {
    age:25,
    name:"abc",
    fnc: function() {
        return 1 + 5;
    }
};

console.log(user.fnc());


const user = {
    age:25,
    name:"abc",
    details:{
        phone:01000,
        hobby:"game",
        fnc: function(){
            return this.hobby;
        }
    }
};

console.log(user.details.fnc());

