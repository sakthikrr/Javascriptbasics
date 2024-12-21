//function declaration
basfunc("function before call");
function basfunc(s){
    console.log(s);
}

basfunc("function after call");


basfunc("function after call");

//Single line arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

//Multi line arrow function
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
  };
  console.log(calculate(2, 3)); 

//Arrow Functions in Arrays
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]
//Single line arrow function with wo argument
const s = (data,data2)=> data-data2;
console.log(s(5,4));

const v = (a,b) => {
    return a+b;
}
console.log(v(5,4));

arr1 = [1,2,3,4,5];

const newarr =arr1.map(val=>{
    return val*2;
})
console.log(newarr);