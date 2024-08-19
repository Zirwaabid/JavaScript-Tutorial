const Student = {
    fullName: "Zirwa",
    Marks: 98.9,
    printMarks: function () {
        console.log("marks=", this.Marks); //this.Marks means student.Marks(repsent object)
    },
};

const employee = {
    calctax() {
        console.log("tax rate is 10%");
    },
};

const Anas = {
    salary: 50000,
}
const Anas1 = {
    salary: 50000,
}
const Anas2 = {
    salary: 50000,
}
const Anas3 = {
    salary: 50000,
}
Anas.__proto__ = employee;
Anas1.__proto__ = employee;
Anas2.__proto__ = employee;
Anas3.__proto__ = employee;

//if there is same method used in object or prototype of another object than method f=of their own objet win

//error handling 
// if we have chance of error in some line then we use this keywords for this line 
let a = 6;
let b = 3;
console.log(a);
console.log(b);
console.log(a + b);
console.log(a + b);

try {
    console.log(a + c); //error
} catch (err) {
    console.log(err);
}

console.log(a + b);
