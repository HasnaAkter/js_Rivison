const vowels=["a","e","i","o","u","A","E","I","O","U"];

function vowelsLetter(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value){
       if(vowels.includes(value)){
        count++;
       }

    });
    return count;
}
console.log(vowelsLetter("I lOve  Bangladesh"))