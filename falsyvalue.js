//false value search;
const mixedArray = [
    "lws", undefined, "learn with me", false, "", "apple", 40, "k", true, "Thanks All", NaN
];
// const trueArray = mixedArray.filter(function(el){
// if(el){
//     return true;
// } else{
//     return false;
// }
// });

//console.log(trueArray);
const trueArrays = mixedArray.filter(Boolean);
console.log(trueArrays);