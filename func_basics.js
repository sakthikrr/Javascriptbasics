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

//single line arrow function with one argument no bracket
const s1 = data => data+2;
console.log("sinle line arrow function with one argument and no bracket",s1(5));

//Single line arrow function with two argument and bracket
const s = (data,data2)=> data-data2;
console.log("sinle line arrow function with one argument with bracket",s(5,4));

//Multi line arrow function
const v = (a,b) => {
    return a+b;
}
console.log(v(5,4));

//Arrow function with array
arr1 = [1,2,3,4,5];
const newarr =arr1.map((val)=>{
    return val*2;
})
console.log(newarr);