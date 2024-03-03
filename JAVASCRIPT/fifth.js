//Functions in js---block of  code that performs a specific task, can be invoked whenever needed
console.log("hello!");
"abc".toUpperCase();
"xyz".toUpperCase();
[1, 2, 3].push(4);

function myFunction() {
  console.log("Welcome to Apna College!");
  console.log("We are learning JS");
}
myFunction(); //function calling or function invoke

// function myf(msg, n){
//     console.log(msg*n);
// }
// myf("Mujhe mere bhai ko laptop or ipad dena hai", 90);//NaN is an error which means not a number

//Function->2 number, sum
//function parameters-->like local variables -> block scope
function sum(x, y) {
  //local variables-->scope
  s = x + y;
  console.log(x);
  console.log("Before return");
  return s; //kabhi bhi return k baad ka code execute nhi hota hai
  console.log("After return");
}

let val = sum(6, 9);
console.log(val);

//Arrow functions
//sum functions
function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => {
  console.log(a + b);
};
let arrowMul = (a, b) => {
  return a * b;
};
arrowMul = 5;

//multiplication function
function mul(a, b) {
  return a * b;
}

const printHello = () => {
  console.log("Hello");
};

//Arrow function->comapact way of writing function

//Practice Questions-1
// function vowelsCount() {
//   let string = prompt("Enter a string");
//   let count = 0;
//   for (const str of string) {
//     if (
//       str === "a" ||
//       str === "e" ||
//       str === "i" ||
//       str === "o" ||
//       str === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(`The total number of vowels in the string ${string} is ${count}`);
// }
// vowelsCount();


//Practice question-2
let count=0;
const vc=(str)=>{
    
    for(const fr of str){
        if(fr==="a"||fr==="e"||fr==="i"||fr==="o"||fr==="u"){
            count++;
        }
    }
    return count;
}


//forEach loop in Arrays
/*
arr.forEach (callBackFunction)
CallbackFunction : Here, it is a function to execute for each element in the array
A callback is a function passed as an argument to another function.

arr.forEach((val)=>{
    console.log(val);

})*/
"abc".toUpperCase();

//In javascript a function can be passed as a variable and can be returned also as a string
function abc(){
    console.log("hello");
}
function myFunc(abc){
    return abc;
}


//example of forEach function
let arrr=["chandauli", "varanasi","ghaziabad"];
// arrr.forEach(function printVal(val){//value at each index
//     console.log(val);
// })
arrr.forEach((val, idx, arrr)=>{
    console.log(val.toUpperCase(), idx, arrr);
});
    
// Practice Question-1
let aa=[1, 2, 3, 4, 5, 6,7];
// aa.forEach((v)=>{
//     console.log(v**2);
// })
let calcSquare=(aa)=>{
    console.log(aa**2);
};
aa.forEach(calcSquare);

//Map---some more array methods
/*
Map creates a new array with the results of some operation. The value its callback returns
are used to form new array
arr.map(callbackFnx(value, index,array))

let newArr=arr.map((val)=>{
    return val*2;
})*/
let np = [67, 93, 57];
let newArr = np.map((val)=>{
    return val**2;
    // console.log(val);
});
console.log(newArr);

/*
FILTER
creates a new array of elements that give true for a condition/filter
Eg: all even elements 
let newArr=arr.filter((val)=>{
    return val%2==0;
})
*/
let n=[1,3,2, 4 ,6 , 7, 5, 9];
let evenArr=n.filter((n)=>{
    return n>3;
});
console.log(evenArr);

/*
REDUCE

Performs some operations & reduces the array to a single value.It returns that single value.

*/
const array1= [1,2,3,4,5,6];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator,currentaValue)=> accumulator + currentaValue, initialValue, 

);
console.log(sumWithInitial);

let ary=[1, 2,3,4, 5,6];
const output = ary.reduce((res, curr)=>{
    return res+ curr;
});
console.log(output);
//to print the largest elements in an aaray
let ary2=[8,7,37,98,7];
const largest=ary2.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(largest);


// Practice Questions-1
let marks=[87,93, 64, 99, 86];
const higher=marks.filter((marks)=>{
    return marks>90;
});
console.log(higher);


// Practice Questions-2
let input = prompt("Enter a number");
let i=0;
let sum2=0, fact=1;
for( i=1; i<=input; i++){
    sum2+=i;
    fact*=i;

};
console.log(sum2);
console.log(fact);

//another method
let inp=prompt("Enter a number");
let arr=[];
for(let i=0; i<=inp; i++){
    arr[i-1]=i;

}
console.log(arr);
let output3=arr.reduce((prev, curr)=>{
    return prev + curr;
});
let prod=arr.reduce((prev, curr)=>{
    return prev* curr;
});
console.log("sum =" ,output3);
console.log("Product=",prod);


