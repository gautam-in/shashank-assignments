class Person {
    constructor(name, age, line1,line2,city,state,zip,country) {
        this.name = name;
        this.age = age;
        this.address = new Address (line1,line2,city,state,zip,country);
    }
    getPerson() {
        console.log(`Name = ${this.name}`);
        console.log(`Age = ${this.age}`);
        console.log(`Address = `);
        this.address.getAddress();
    }
    isBirthday(birthday){
        if(birthday==true){
            this.age+=1;
        }
    }
 }
 class Address {
     constructor(line1,line2,city,state,zip,country){
         this.line1 = line1;
         this.line2 = line2;
         this.city = city;
         this.state = state;
         this.zip = zip;
         this.country = country;
     }
     getAddress(){
        console.log(`Line 1 = ${this.line1}`);
        console.log(`Line 2 = ${this.line2}`);
        console.log(`City = ${this.city}`);
        console.log(`State = ${this.state}`);
        console.log(`Zip = ${this.zip}`);
        console.log(`Country = ${this.country}`);
     }
 }

var person1 = new Person('Ram', 22,'Flat 1','Garden','Delhi','Delhi',110095,'India');
person1.getPerson();
person1.isBirthday(true);
person1.getPerson();


