nam_arr = ["test1","test2","test3"];
console.log("Full Array",nam_arr);
console.log("first element ",nam_arr[1]);
nam_arr.push("test5");
console.log(nam_arr);
nam_arr.pop();
console.log("Array after pop",nam_arr,nam_arr.length);
//Index of an element
console.log("index of an element test2= ",nam_arr.indexOf("test2"));
//Reverse an Array
console.log("reverse array",nam_arr.reverse());

//Chek value exist   
console.log("test2 exist in array =",nam_arr.includes("test2"));
//test
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2); 
console.log("Array after concat",combined); 