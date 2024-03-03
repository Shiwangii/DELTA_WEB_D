//Functions in js---block of  code that performs a specific task, can be invoked whenever needed
console.log("hello!");
"abc".toUpperCase();
"xyz".toUpperCase();
[1,2,3].push(4);

function myFunction(){
    console.log("Welcome to Apna College!");
    console.log("We are learning JS");
}
myFunction();//function calling or function invoke

// function myf(msg, n){
//     console.log(msg*n);
// }
// myf("Mujhe mere bhai ko laptop or ipad dena hai", 90);//NaN is an error which means not a number


//Function->2 number, sum
//function parameters-->like local variables -> block scope  
function sum(x, y){
    //local variables-->scope
    s=x+y;
    console.log(x);
    console.log("Before return");
    return s;//kabhi bhi return k baad ka code execute nhi hota hai
    console.log("After return");
}

let val=sum(6, 9);
console.log(val);

//Arrow functions
//sum functions
function sum(a ,b){
    return a+b;
}

const arrowSum=(a,b)=>{
    console.log(a+b);
}

//multiplication function
function mul(a, b){
    return a*b;
}


//Arrow function->comapact way of writing function

