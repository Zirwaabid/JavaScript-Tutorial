let data="Website Data";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data =",data);
    }
};
class admin extends user{
    constructor(name,email){
        super(name,email)
    }
   editData(){
    data="secret information"
   }
}

let student1=new user("Zirwa","Zirwa@gmail.com");
let student2=new user("Anas","Anas@gmail.com");
let teacher=new user("Azra","Azra@gmail.com");
let admin1=new admin("Abid","Abid@gmail.com");