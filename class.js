class human{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    apply (){

        console.log(`${this.name} is apply`)
        
    }

}

const man1 = new human("Hena",24);
const man2 = new human("mina",22);
const man3 = new human("ena",22);

//console.log(man1);
man1.apply();
man2.apply();