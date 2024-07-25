// arrays is better than objects to store info because in object we use different strings to add different items 
// let marks = [23, 45, 7, 890, 6];
// console.log(marks);
// console.log(marks.length);
// let heroes=["Muhammad Bin Qasim","Jabir Bin Hayat","tipu Sultan"]
// console.log(heroes);

// //array indices (to excess position) just like string str[number]
// console.log(heroes[0]);
// // how to change aaray but we cannot change the value of string because it is immutable
// heroes[1]="Khalid Bin Waleed";
// console.log(heroes);

//how to print arrays with loops (basic use of loop)
// let animals = ["cat", "dog", "lion", "donkey"];
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// for (const animal of animals) {
//     console.log(animal);
// }
let cities=["Jahanian","Lahore","Murree","Islamabad"];
for (let city of cities) {
    console.log(city.toUpperCase());
}


