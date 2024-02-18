function ludolist(min,max){
 
    return Math.floor(Math.random()*(max - min + 1)+ min);

}
console.log(ludolist (1, 6));