
1)

document.querySelector('input').addEventListener('input', function(){
    console.log('typing');
});

document.querySelector('button').addEventListener('click', function(){
    console.log('click');
});



2)


document.querySelector('input').addEventListener('input', function(){
    console.log('typing');
});

const onClick = function(){
    console.log('click');
}

document.querySelector('button').addEventListener('click', onClick);


3)

document.querySelector('input').addEventListener('input', function(){
    console.log('typing');
});


document.querySelector('input').addEventListener('input',() => {console.log('typing')
});

