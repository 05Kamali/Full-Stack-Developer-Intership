// Merge
let a="Hello";
let b="kamal";
console.log(a.concat(" ",b));
//splice
let c = ["Äpple", "Mango", "Orange", "cherry"];
let s = c.splice(1, 2);   
console.log(s);       
//sort
let d=[1,10,7,6,54,38,80];
console.log(d.sort(function(a, b){return a - b}));
//include specific item
let e = ["Banana", "Apple", "Orange"];
console.log(e.includes("Apple"));
//index
let f=["Banana", "Apple", "Orange"];
console.log(f.indexOf("Apple"));