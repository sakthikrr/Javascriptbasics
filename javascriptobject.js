//javascript objects
const objdata = {
    name:"test",
    age:23
};
objdata.role = "Admin";
console.log(objdata);
//delete objdata.role;
console.log(objdata);

const checkrole = (user)=>{
    if(user.role === "Admin"){
        console.log("Full Access");
    }else{
        console.log("No full Access");
    }
}

checkrole(objdata);