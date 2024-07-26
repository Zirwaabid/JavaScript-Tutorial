// arrays is better than objects to store info because in object we use different strings to add different items 
let marks = [23, 45, 7, 890, 6];
console.log(marks);
console.log(marks.length);
let heroes=["Muhammad Bin Qasim","Jabir Bin Hayat","tipu Sultan"]
console.log(heroes);

// //array indices (to excess position) just like string str[number]
console.log(heroes[0]);
// // how to change aaray but we cannot change the value of string because it is immutable
heroes[1]="Khalid Bin Waleed";
console.log(heroes);

//how to print arrays with loops (basic use of loop)
let animals = ["cat", "dog", "lion", "donkey"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (const animal of animals) {
    console.log(animal);
}
let cities=["Jahanian","Lahore","Murree","Islamabad"];
for (let city of cities) {
    console.log(city.toUpperCase());
}

// arrays methods
// add or remove or slice dont effect original array but it gives new array 
let fruititems=["tomato","mango","banana","plum"];
fruititems.push("orange") ;//to add something in aarays at the end
console.log(fruititems);
fruititems.unshift("peach")// add somethin in start
console.log(fruititems)

fruititems.pop() //delete last item from arrays
console.log(fruititems);
  fruititems.shift()  //to delete from start
console.log(fruititems);

// slice 
console.log(fruititems.slice(1,3))

// to change original array (add,remove,replace)
let numbers=[1,4,5,6,7];
numbers.splice(2,2,100,101); //slice(startind,delcount,newelement)
console.log(numbers);
// convert array to string 
let marks1=[33,44,55,55]
console.log(marks1.toString())

// // add different arrays together 
let colors=["red","purple"]
let colors2=["orange","green"]
let colors3=colors.concat(colors2);
console.log(colors3)




