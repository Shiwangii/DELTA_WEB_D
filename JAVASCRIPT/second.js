// unary operator
// let a=5;
// let b=2;
// console.log("a =",a, " & b =", b );
// a=a-1;
// console.log("++a=", a++);

// Assignment operators
let a=5;
let b="5";
a*=4;
console.log("a = ", a);
console.log("a==b", a==b);

//comaparision operators
let x=5;
let y=2;
console.log("5 ===2", x===y);


//logical operators
let h=6;
let o= 5;
console.log("!(6<5)=", !(a<b));
let cond1=h>o;
let cond2 =h ===6;
console.log("cond1 && cond2=", cond1 && cond2);

//conditional statements
let age=89;
if(age<18){
    console.log("you can vote");
}
else if(age>60){
    console.log("senior");
}
else{
    console.log("middle");
}

let color;
let mode="dark";
if(mode==="dark"){
    color= "black";
}
else if(mode=="blue"){
    color="blue";
}
else if(mode=="pink"){
    color="pink";
}
else{
    color="white";
}
console.log(color);
if(mode=="dark"){
    console.log(mode);
} 
//odd or even
let i=2;
if(i%2===0){
    console.log(i,"Even number");
}
else{
    console.log(i,"odd number");
}

//syntax->rules

//ternary operator
let umr=25;
umr>=18? console.log("adult "):console.log("not adult");
// console.log(result);
//switch statements
const expr="Papaya";
switch(expr){
    case 'Oranges':
        console.log('Oranges are $0.59 a pound');
        break;
    case 'Mangoes':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of $(exp).');

}


//Practice question-1
// alert("Hello!");//one time popup
let name=prompt("hello");
console.log(name);


//Practice question-2
let num=prompt("Enter a number");
if(num% 5==0){
    console.log(num, "is a multiple of 5");
}
else{
    console.log(num, " is not a multiple of 5");
}



//practice question-3
let score=prompt("Enter students score");
let grade;
if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70){
    grade="B";
}
else if(score>=60){
    grade="C";
}
else if(score>=50){
    grade="D";
}
else{
    grade="F";
}
console.log("according to your scores, your grade was :",grade);
// default{
//     console.log("Invalid score");
// }

