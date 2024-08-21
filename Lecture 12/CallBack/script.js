function sum(a,b) {
    console.log(a+b)
}
function calculator(a,b,callback) {
   callback(a,b);
}
calculator(1,2,sum);

// we can also pass sum function in there as given below
function calculator(c,d,callback) {
   callback(c,d);
}
calculator(1,4,(c,d)=>{
    console.log(c+d);
})

//nesting (thing in another thing) eg 
// if statement in another if
let age = 19;
if (age <= 60) {
    if (age <= 18) {
        console.log("junior");
    }
    if (age >= 19) {
        console.log("middle")
    }
    else {
        console.log("senior")
    }
};