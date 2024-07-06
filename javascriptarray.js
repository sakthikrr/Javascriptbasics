nam_arr = ["test1","test2","test3"];
console.log(nam_arr);
console.log(nam_arr[1]);
nam_arr.push("test5");
console.log(nam_arr);
//Remove array element 
nam_arr.splice(2,1);
console.log(nam_arr)
//Array Map
const user =[
    {"id":1,"name":"sakthi","status":true},
    {"id":2,"name":"vel","status":false},
    {"id":3,"name":"thanges","status":true}
]
const usernames = user.map(userdata=>{
    return userdata.name;
})
console.log("array map");
console.log(usernames);
//Array filter
const activeusers = user.filter(userdata=>userdata.status )
console.log(activeusers);