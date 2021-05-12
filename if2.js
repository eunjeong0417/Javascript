for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(i,j);
    }
}




for(let i = 0; i < 5; i++) {
    if(i % 2 === 0) continue;
    for(let j = 0; j < 5; j++) {
        if(j % 2 === 0) continue;
        for(let k = 0; k < 5; k++) {
            if(k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}
