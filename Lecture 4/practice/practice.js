// find the average marks of this aaray 
let marks=[85,97,44,37,76,60]
let sum=0;
for (let val of marks) {
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of class is ${avg}`)

let items=[250,645,300,900,50];
let i=0;
for(let val of items){
     offer=val/10;
    items[i]=items[i]-offer;
    console.log(`price of items after offer is ${items[i]}`)
    i++
}
// simple way to solve above question
for (let i = 0; i < items.length; i++) {
   let offer=items[i]/10;
   items[i]-=offer;
}
console.log(items)
// remove bloomberg,remove uber and add ola in its place and add amzaon at end 
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.splice(0,1); //remove bloomberg
console.log(companies);
companies.splice(1,1,"Ola"); // remove uber and add ola in its place
console.log(companies);
companies.push("Amazon"); // add amazon
console.log(companies);