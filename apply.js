const person = {
    fullName: function(city,country) {
      return this.firstName + " " + this.lastName+" "+city+" "+country}
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  
  console.log(person.fullName.apply(person1,['Dhaka','BD']));

