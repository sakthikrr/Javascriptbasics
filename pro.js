Person ={
     name: "",
     age: 18,
     city: "",
     sayhi: function() {
         console.log("Hello, my name is " + this.name);
     }
}

let jim={"name":"John"};
Object.setPrototypeOf(jim, Person);
console.log(jim);
console.log(Person.hasOwnProperty("name"));