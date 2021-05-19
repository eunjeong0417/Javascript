class User1 {
    constructor(){
        this.name = "abc";
        this.age = 12;
    }

    information() {
        return 'Hello';
    }
}

const a = new User1();
console.log(a.age, a.information());




class User1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    information() {
        return 'Hello';
    }
}

const a = new User1('abc', 13);
console.log(a.age, a.information());


//extends

class User1 {
    constructor(name){
        this.name = name;
    }
}


class User2 extends User1 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}


const a = new User2("abc", 13);
console.log(a.name, a.age);



class Animal {
    constructor(name) {
        this.name = name;
    }

    information(){
        return 'Hello!'
    }
}

Animal.prototype.age = 10;

const a = new Animal('abc');
console.log(a.hasOwnProperty('name'));
console.log(a.hasOwnProperty('age'));


