class Person{
    //declare private  adultage
    #adultage = 18;
    constructor(firstname, lastname, age, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
    }
    get fullname(){
        return this.firstname + " " + this.lastname;
    }
    set fullname(name){
        console.log("Setting fullname to: " + name);
        const parts = name.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
    
    sayhi(){
        console.log("Hello, my name is " + this.firstname + " " + this.lastname);
    }
    isAdult(){
        return this.age >= this.#adultage;
    }
}
emp1 = new Person("John", "Doe", 30, "New York");
console.log(emp1);
//setter
emp1.fullname = "Jane Smith";
emp1.sayhi();
//getter
console.log(emp1.fullname);

class Studen extends Person{
    constructor(firstname, lastname, age,city,course){
        super(firstname, lastname, age, city);
        this.course = course;
    }
    get course(){
        return this._course;
    }
    set course(course){
        console.log("Setting course to: " + course);
        this._course = course;
    }
    //override isAdult method
    isAdult(){
        return this.age >= 21; //students are considered adults at 21
    }
}
let student1 = new Studen("Alice", "Johnson", 22, "Los Angeles", "Computer Science");
console.log(student1);
console.log("hi",student1.course);
console.log("Is student an adult? " + student1.isAdult());