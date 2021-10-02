const companies = [
    {name: "Company One", category : "Finance" , start:1981, end:2003},
    {name: "Company two", category : "Retail" , start:1999, end:2008},
    {name: "Company three", category : "Auto" , start:1999, end:2007},
    {name: "Company four", category : "Retail" , start:1989, end:2010},
    {name: "Company five", category : "Technology" , start:2009, end:2014},
    {name: "Company six", category : "Finance" , start:1987, end:2010},
    {name: "Company seven", category : "Auto" , start:1986, end:1996},
    {name: "Company eight", category : "Retail" , start:2011, end:2016},
];
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//for loop//
 
// let num = 10
// for(i = 0; i < num; i++){
//     console.log(i)
// };

// while loop

// let number = 0;
//  while(number < 20){
//     number++;
//     console.log(number);
// }

//Concat() // 

//Takes one array and joins it together with the specified array//
// const numbers = [1,2,3,4,5];
// const num = [10,20,30,40,50];
// const check = numbers.concat(num);
// console.log(check);

//IndexOf()//

//Check the index of an item in an array//
// const Item = ages.indexOf(16);
// console.log(Item); // 3

//Pop()//

//It removes the last item inside an array//
// const remove = ages.pop();
// console.log(remove); // 32 has been removed from the array;

//Push()//

//Adds a new item inside the array at the end//
// ages.push(100);
// console.log(ages) // 100 is added inside the array//

//FOREACH()//

//For Each is just the same as a for loop but it is more easier than a for loop....Only loops over the array//
// for(i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }

// companies.forEach((company)=>{
//     console.log(company)
// });
// const can = companies.forEach((company) => {
//     console.log(company);
// });

// ages.forEach((item,index,arr) => {
//     console.log(arr)
// })

//Reverse()//

//Reverse rewrites the array backwards//
// const fruits = ["Banana", "Apple", "Pawpaw"];
// fruits.reverse();
// console.log(fruits)

//Shift()//

//Used to remove the first item of an array//
// const fruits = ["Banana", "Apple", "Pawpaw"];
// fruits.shift();
// console.log(fruits);

//Unshift()//

//Used to add an items at the beginning of an array
// const fruits = ["Banana", "Apple", "Pawpaw"];
// fruits.unshift("Grapes");
// console.log(fruits);

//Slice() //

//Used for selecting an item inside an array...The first digit starts counting from 0 while the second digit starts counting from 1 all from the left side//
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const take = fruits.slice(0,3);
// console.log(take);

//Splice//

//Used for adding and deleting items in an array//
//In slice() and splice() the index starts at 1// 
// let numbers = [1,2,3,4,5];
// const deleted = numbers.splice(3,1,"Banana");// removes item 4 from the array and adds banana in its place the [1] defines the number of items it removes..If it was 2 it will remove 2 items from the array//
// console.log(numbers); // to see the full array with the items
// console.log(deleted) // to see the deleted items

//Includes()//

//Checks if there is an item in an array that matches your specification and returns either true or false//
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const check = fruits.includes("Banana");
// console.log(check)

//FILTER//

//Filter allows us to filter things from the array and displays it one the console...Also used for logical expressions//
// const drink = [];
// for(i = 0; i < ages.length; i++) {
//     ages[i] >= 45 ? drink.push(ages[i]) : "all of them are below 21";
// };
// console.log(drink)
// const drink = ages.filter((age)=> {
//     if(age >= 60) {
//         console.log(age);
//     }
// });
// const drink = ages.filter(age => age >= 60);
// console.log(drink);
// const finance = companies.filter(company => company.category === "Technology");
// console.log(finance)
// const started = companies.filter(began => began.start >= 1990);
// console.log(started);
// const great = companies.filter(greater => greater.start >= 2000);
// console.log(great);
// const less = companies.filter(company => company.start >= 1980 && company.start <= 2000);
// console.log(less)
// const ageGroups = ages.filter(age => age >= 50 && age <= 60);
// console.log(ageGroups)

//MAP//

//Used to iterate over an array and call back every function on every element of an array.Can be able to call each element...You can also manipulate the data .. You can create a new array//;
// const test = companies.map(test => {
//     return `${test.name} ${test.start} ${test.end}`;
// });
// console.log(test);
// const check = companies.map(test => {
//     return `[${test.start} - ${test.end}]`
// });
// console.log(check);
// const check = companies.map(test => `[${test.start} - ${test.end}]`);
// console.log(check);
// const ageSquare = ages.map(age => Math.floor(Math.sqrt(age)));
// console.log(ageSquare);
// const square = ages.map(age => age * 2);
// console.log(square);
// Shorthand for the above ....It first look for the square root and then multiplies it by 2//
// const math = ages
// .map(age => Math.floor(Math.sqrt(age)))
// .map(age => age * 2);
// console.log(math);

//Sort//

//The sort() method sorts the elements of an array in place and returns the sorted array.Compares two things and then return them in the right order//
// const place = companies.sort(function(c1,c2) {
//     if(c1.end > c2.end) {
//         return 1;
//     } else {
//         return 2;
//     }
// });
// console.log(place);
//arranges the dates in order either from the largest to the smallest or vice versa//
// const sorted = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(sorted);

//sorts the ages from the smallest to the largest//
// const sortAges = ages.sort((a,b) => a > b ? 1 : -1);
// console.log(sortAges);

//sorts the ages from the largest to the smallest//
// const sortAges = ages.sort((a,b) => a < b ? 1 : -1);
// console.log(sortAges)

//Reduce//

//Used for all Arithmetic Calculations//
// let AgeSum = 0;
// for(i = 0; i < ages.length; i++) {
//     AgeSum += ages[i];
// }
// console.log(AgeSum)

// const sum = ages.reduce(function(total,age){
//     return total + age;
// },0);
// console.log(sum)
//Short hand for the above
// const sum = ages.reduce((total,age) => total + age,0);
// console.log(sum);
//It adds all the ending years and all the starting years then it subtracts them to give us the total years//
// const years = companies.reduce((total,year) => total + (year.end - year.start),0);
// console.log(years)

// All combined//
// const sum = ages
// .map((age => Math.floor(Math.sqrt(age))))
// .map((age => age * 2))
// .sort((a,b) => a > b ? 1 : -1)
// .filter((age => age >= 10 && age <= 12))
// .reduce((total,age) => total + age,0);
// console.log(sum);