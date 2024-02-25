const car ={
    Name:"MWS",
    color:"red",
    size: '',

    set cars(cars){
       this.size=45;
    }
}
car.cars=45;
console.log(car);