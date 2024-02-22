const obj= {
    a:"lws",b: undefined, c:"learn with me",d: false, e:"", f:"apple", g:40, h:"k", i:true, j:"Thanks All", k:NaN
};
const truthyObj= function(obj){
    for (let i in obj){
       if(!obj[i]){
        delete obj[i];
       }
       

    }
    return obj;
}
console.log(truthyObj(obj));