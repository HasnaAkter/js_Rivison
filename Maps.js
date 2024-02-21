const color = new Map([
    ["red",500],
    ["blue",200],
    ["green",300],
    ["yellow",100],
]);
let text = "";
// color.set("red", 500);
// color.set("blue", 200);
// color.set("orange", 400);
// console.log(color);
// color.forEach(function(value, key){
//     //text += key + " = " +value;
//     text = key+value;
// })

//console.log(color);

for(const x of color.entries()){
    text = text + x;
}
console.log(text);