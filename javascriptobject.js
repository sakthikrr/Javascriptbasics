userobject = {
    "id":1,
    "name":"sakthi",
    "status":true
}
console.log("user object name=",userobject.name);

//Array Map
const user =[
    {"id":1,"name":"sakthi","status":true},
    {"id":2,"name":"vel","status":false},
    {"id":3,"name":"thanges","status":true}
]
const usernames = user.map((userdata)=>{
    return userdata.name;
})
console.log("array map");
console.log(usernames);

//Array filter

const activeusers = user.filter((userdata)=>userdata.status )
console.log(activeusers);   