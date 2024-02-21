function myfunction(myArray){

    console.log(myArray.constructor.toString().indexOf('Array') > -1);
}
myfunction([1,2,5,5]);