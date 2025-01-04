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

