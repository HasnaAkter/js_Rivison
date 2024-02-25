class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
      run(){
        
        console.log(this.name+' is running');
      }
    }
  
  const bmw = new Car('BMW',1999);
  //console.log(bmw);
  bmw.run();