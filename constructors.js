function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName+' '+this.lastName
    }
  }
  const hena =new Person('hena','moni',24);
  const ena = new Person('ena','oni',14);
  const rina =new Person('rina','monio',20);
  const jhon = new String('jhon');
  console.dir(jhon);
  console.log(jhon.toUpperCase());
  
  //console.log(hena.fullName());
  //hena.country="BD";
 // console.log(hena);
//  Person.prototype.country='Bd';
//  console.dir(Person);
//  console.log(hena.country);
