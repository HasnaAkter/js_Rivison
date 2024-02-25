const car ={
    Name:"MWS",
    color:"red",
    size:24,

    get cars(){
        //return this.Name;
        return this.Name+""+this.size;
    }
}
console.log(car.cars);
