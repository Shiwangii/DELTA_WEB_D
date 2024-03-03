//Arrays----collection of items
//arrays are mutable in javascript while strings are immutable
let marks = [97,82, 75, 64, 36];
console.log(marks);
console.log(marks.length);//property
let heroes=["ironman","thor", "hulk", "shaktiman","spiderman","antman"];
for(let idx=0;idx<heroes.length; idx++){
    console.log(heroes[idx]);
}


//Looping over an arrays

//for-of loops
for(let hero of heroes){
    console.log(hero);
}
let cities=["delhi","pune", "mumbai", "hyderabad", "gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}

// Practice Questions-1
let smarks=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks){
    sum+=val;
    
}
let avg=sum/smarks.length;
console.log(`Average marks of the class= ${avg}`);

// Practice question-2
// let prices=[250, 645, 300, 900, 50];
// let offer=0;
// for(let dis of prices){
//     offer=dis-(0.1*dis);
//     console.log(offer);
// }
let items=[250, 645, 300, 900, 50];
// let i=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer=val/10;
//     items[i]= items[i]-offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
// }
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);

//arrays methods
let foodItems=["potato", "lichies","tomatoes","spinach"];
console.log(foodItems);
foodItems.pop();
let deletedItems=foodItems.pop();
// foodItems.push("cip", "popcorn","halwa");
console.log(foodItems);
console.log(`deleted item is ${deletedItems}`);


let jtems=[250, 645, 300, 900, 50];

//concat()-->joins multiple arrays and result
// let marvelHeroes=["thor", "spiderman", "ironman"];
// let dcHeroes=["superman", "batman"];
// let indianHeroes=["shaktiman","balvir"];
// let heroee=marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroee);

//unshift()-->add to start
// marvelHeroes.unshift("antman");
// let vau= marvelHeroes.shift();
// console.log("deleted", vau);

//Slice()-->returns a piece of array---no change in original array
let marvelHeroes=["thor", "spiderman", "ironman","antman","Dr.Strange"];
console.log(marvelHeroes.slice(1,3));
//splice()-->change original array(add, remove, replace)
let arr=[1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice( 2, 2, 101, 102);
//Add element
arr.splice(2, 0, 101);
//Delete elements
arr.splice(3,1);
//replace elements 
arr.splice(3, 1, 101);

//Practice question-1
let company=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// company.splice(0,1);
// company.splice(1,1,"Ola");
// company.splice(5, 0, "Amazon");
company.shift();
// company.replace("Uber", "Ola");
company.push("Amazon");