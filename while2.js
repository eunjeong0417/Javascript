for (let i = 0; i < 100; i++) {
    console.log('Hello World');
} 


for(i = 0; i < 100; i += 1){
    console.log(i+1);
}


for(i = 0; i < 100; i = i + 1){
    console.log(i+1);
}


for(i = 0; i < 20; i = i + 2){
    console.log(i+1);
}

for(i = 0; i < 30; i = i + 3){
    console.log(i+1);
}


let i = 0;
while (i < 100){
    console.log('Hello World')
    i++;
}

let i = 5;
while (i < 100){
    console.log('Hello World')
    i++;
}

let i = 0;
while (i < 100){
    console.log(i)
    i++;
}

let i = 0;
while (i < 100){
    console.log(i + 1)
    i++;
}

let i = 0;
while(true){
    if(i === 5) break;
    i++;
}
console.log(i);


let i = 0;
while(true){
    if(i === 100) break;
    i++;
}
console.log(i); 


let i = 0;
while( i < 10){
    i++;
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}


