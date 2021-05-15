
var word = "phone"
while(true) {
    var answer = prompt(word)
    if(word[word.length - 1] === answer[0]) {
        alert('great!')
        word = answer;
    }else
    alert('wrong!')
}
