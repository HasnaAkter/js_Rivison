const numbers =[1,2,4, 2, 3, 4 ,5 ,6, 7,8,9,7];
const duplicates = numbers.filter(function (value, index, array) {

return array.indexOf(value) !== index
    
});
console.log(duplicates);