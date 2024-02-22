//input: linearsearch(['a','b','c','d','c'],'c)
//output: 2 or 'not found!

function linearsearch(arr, val){

    const length = arr.length;

    for(let i=0; i<arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "not found!"; 
}

console.log(linearsearch(['a','b','c','d','c'],'c'));