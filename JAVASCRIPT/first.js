// console.log("Apna College");
// console.log("I love JavaScript");
// console.log("Shiwangi Maurya");

//variables are containers for data 
fullName=25;
fullname="Aman Dhattarwal";
console.log(fullName);
age=24;
radius=40;
price=99.99;
// x=undefined;
isFollow = false;//assignment operator
console.log(isFollow);//javascript is dynamically typed
let name="Tony Stark";
console.log(name);
var age=24;
const a=10;
console.log(a);
{
    let a=5;
    console.log(a);
}
price=100.5;
isFollow=true;
// let x=null;
let x=BigInt("123"); 
let y=Symbol("Hello!");
const Student={
    fName:"Rahul Kumar",
    age: 23,
    cgpa:9.5,
    isPass:true,
};
Student["age"]=Student["age"]+2;
console.log(Student["age"]);

//practice questions
const product={
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

// practice question-2
const profile={
    username: "Shradha khapra",
    isFollow: false,
    posts:195,
    followers:569,
    profession:"Entrepreneur",
};
console.log(typeof profile["username"]);

//Arithematic operators
let u=5;
let b=2;
console.log("a = ", u, " & b =",b);
console.log("a + b = ", u+b); 
console.log("a - b = ", u-b); 
console.log("a / b = ", u/b); 
console.log("a * b = ", u*b); 
console.log("a % b = ", u%b); 
console.log("a ** b = ", u**b); 