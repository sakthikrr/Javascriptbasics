class User{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    getfullname(){
        return this.fname+ " " +this.lname;
    }
}
class Admin extends User{
    constructor(fname,lname,role){
        super(fname,lname);
        this.role = role;
    }
    getRole(){
        return this.role;
    }
}
let user1 = new User("tets","test2");
let user2= new Admin("test","test2","Admin");
console.log(user2.getRole());
console.log(user1.getfullname());