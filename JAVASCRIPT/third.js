//Loops and Strings---->loops are used to execute a piece of code again and again
// for(let i=1; i<=10; i++){
//     console.log("Apna college");
// }
// console.log("loop has ended");

//sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++){//let scope is within the braces..whereas var is global variable
    sum=sum+i;
}
console.log("sum= ", sum);
// console.log("loop has ended");


//infinite loops
//while loops
let u=1;
while(u <= 10){
    console.log("apna career");
    u++;
}

//do-while loop
let y=1;
do{
    console.log("y=",y);
    y++;
}while(y<=5);

//for-of loops
let str="Javascript";
let size=0;
for(let i of str){//iterator
    console.log("i=",i);
    size++;
}
console.log("String size=", size);


//for-in loops
let student={
    name: "Rahul Kumar",
    age: 23,
    cgpa: 9.5,
    isPass: true,
};
for(let key in student){
    console.log("key=", key, "value=",student[key]);
}


// Practice Questions-1
for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log("i=",i);

    }
}

// Practice question-2
// let gameNum = 25;
// userNum=prompt("Guess the game number:");
// while(userNum != gameNum){
//     userNum=prompt("You entered wrong number, Guess again: ")

// }
// console.log("Congratulations!,  you entered the right number");


//Strings in Javascript
let str2="apna college";
let str3= 'Shiwangi Maurya';
console.log(str3[3]);

//Template Literals-->the way to have an embedded expressions in a strings
let obj = {
    item: " Pen",
    price: 10,
};
let output= `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output); 
// console.log("the cost of ", obj.item, "is ", obj.price, "rupees");
// let specialString = `This is a template literal.`;
// console.log(typeof specialString);

//String Interpolation --->to create strings by doing substitution of placeholders
let specialString = `This is a template literal ${1+2+3}.`;
console.log(specialString);

//escape characters
//  /n->next line
//  \t-->tab space
let str5 ="Apna \t college";
console.log(str5.length);


//String methods-->These are built in function to manipulate a string 
//Strings are immutable in javascript---immutable means whose value cannot be changed in original string always changes are stored in new string
let str8="Apna College";
str8=str8.toUpperCase();
str0=str8.toLowerCase();
console.log(str0);
console.log(str8);
let sr="         aaj javascript khatam krna hai sara lectures";
console.log(sr.trim());//trim function removes starting and ending spaces from string
let ss= "umbrella";
console.log(ss.slice(3));
let ress="I am learning cosing from"+str8+ss;
console.log(ress);
console.log(ss.replace("m", "u"));
let tt="Hellololo";
console.log(tt.replaceAll("lo","p"));
console.log(ss.charAt(2));


//Practice Question
let uname=prompt("Enter your full name:");
let res="@"+uname+uname.length;
console.log(res);



