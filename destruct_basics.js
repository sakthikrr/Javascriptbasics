const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
}

//Destructuring like php extracrt array variables need to declare as const
const [starter, main] = restaurant.categories;
console.log("Destructrin first 2 values=",starter, main);

const arr = [1,2,3];
const [x, ,z] = arr;
console.log("Destructring array without second",x, z);

const arr2 = [1,2,3,["a","b"]]
const [a,b,, [c,d]] = arr2
console.log("Inner array desctructure=",a,b,c,d);

// Destructurin Objects
console.log("====================")
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant_data = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours : {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      open: 11,
      close: 23,
    },
   wed: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }

};

const { name:restaurant_name,openingHours} = restaurant_data;
console.log("Object Desctructuring with name = ",restaurant_name);
console.log("Object Desctructuring with openingHours = ",openingHours);

let s = 7 
let w = 10
const obj = {s:27,w:30};
console.log(obj);

 ({s,w} = obj)
console.log(s,w);

const {openingHours:{mon:{open:op,close:cl}}} = restaurant_data;
console.log("Monday opening =",op,"close=",cl);