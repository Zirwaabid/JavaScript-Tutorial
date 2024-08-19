// class ToyotaCar {
//    constructor(brand, mileage) {
//       console.log("Hello buyers")
//       this.brand = brand;
//       this.mileage = mileage;

//    }
//    start() {
//       console.log("Start");
//    }
//    stop() {
//       console.log("stop");
//    }


// }
// // we can create many objects through this template (class) 
// let Fortuner = new ToyotaCar("fortuner", 14);
// console.log(Fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);

// // how to inherit parent class in child class 
// // eg 
// class parent {

//    hello() {
//       console.log("hello");
//    }
// };

// class child extends parent { };
// let obj = new child();

//another example

// class person {
//    constructor() {
//       this.species = "homo sapiens";
//    }
//    eat() {
//       console.log("eat");
//    }
//    sleep() {
//       console.log("sleep");
//    }
// };

// class engineer extends person {
//    work() {
//       console.log("solve problms, bulid something")
//    }
// };
// let Zirwa = new engineer();

// class doctor extends person {
//    work() {
//       console.log("treat patients");
//    }
// };

// let e1 = new engineer();
// let p1 = new person();
// console.log(e1);
// console.log(p1);

//super keyword to invoke parent constructor into child to access all the properties of parent 

class person {
   constructor(name) {
      this.species = "homo sapiens";
      this.name=name;
   }
   eat() {
      console.log("eat");
   }
};

class engineer extends person {
   constructor(branch,name){
      super(name) //to invoke parent constructor
      this.branch=branch;
   }
   work() {
      super.eat();
      console.log("solve problms, bulid something")
   }
};
let Obj= new engineer("software engineer","Zirwa");

