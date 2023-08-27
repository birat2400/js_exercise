alert("Hellow world");
const name = prompt("ENter your useername");
const pw = prompt("enter your password");

if (pw === "birathoo"){
    alert("Welcome")
}
console.log(a);


const hour = prompt("Enter the time");
if(hour > 14 && hour < 18)
{
    alert("js class is running");
}

const isvalid = false;
if(!isvalid)
{
    alert("it is not valid");
}

// ternary operator
let h = 2;

if (h>0) {
    alert("a is greater then 0");
}
else {
    alert("a is less then 0");
}
a>5 ? alert("a is greater then 0") : alert("a is less then 0");

statement(for loop)

for(let a = 0; a < 10; a++)
{
    console.log(a);
}
let a=0;
while(a<10) {

    console.log(a);
a++;
}
let a=0;
do{

    console.log(a);
a++;
}
while(a<=10);

// ES5
function home(){
    console.log("hello world");
}

home();

// ES6

const hello = ()=> {}



// Function that says hello

const hello = () => 
{
console.log("hello")
}
hello();

// function to say hello to user

const user=(name)=>{
    console.log("hello", name);
}
user("Birat");

// function to add two Number

const sum =(a,b)=>{
 if (a>0 && b>0){   
    return a+b;
}
return "negetive number";
} 
const val =sum(2,3);
console.log(val);

const val1 = sum(-2,3);
console.log(val1);

const names = prompt("enter your name");
console.log(names);

const age = Number(prompt("enter your age"));
console.log(age);

const date = new Date();
console.log(date);

const car={
model: "ember",
brand: "suzuki",
lunchDate: "2014",

carInfo :{
 2023 - Number(lunchDate)  

}
}

const model1 = car.model;
const info = prompt("enter todays year");
const age = car.carInfo;
console.log(age);


const sum= {
    a: prompt("enter Anumber"),
    b: prompt("enter 2nd no")
}
 const num = Number(sum.a) + Number ( sum.b);
console.log(num);
_______________________________________________________________________
const car={
model: "ember",
brand: "suzuki",
lunchDate: "2014",

// carInfo :{
  2023 - Number(lunchDate)  

 }
 }

  const model1 = car.model;
  const info = prompt("enter todays year");
 const age = car.carInfo;
 console.log(age);


 const sum= {
     a: prompt("enter Anumber"),
     b: prompt("enter 2nd no")
 }
 const num = Number(sum.a) + Number ( sum.b);
 console.log(num);
    
 const car={
     model:"zzx",
     brand:"honda",
     lunch:"2010",
     currentDate: prompt("Enter todays date"),

 detail :(about)=> {
 return this.currentDate - this.lunch;
 }}


 const about = car.detail
 console.log(about);


 const day ={
    week: ["sunday","monday","tuesday"],
    date: [1,2,3,4,5,6,7,8],
    number: "100",
 calculate: ()=>{
 return 10 + Number(day.number);
 }

 }
 const week1 = day.week;
 console.log(day.calculate());


 const phone={
     brand: "realme",
     model: "9",
     lunched: "2001",

     calculate_howOld : ()=>
     {
        return phone.current_year - Number(phone.lunched); 
     }
 }
 phone.current_year = prompt("enter todays year");

 console.log(phone.brand, phone.model, phone.calculate_howOld());


 const product =
 {
     a: 10,
     b: 20,
 c:()=>{
  return product.a * product.b;
 }
 }

 console.log(product.c());


const temp={
   name: "kelvin", 
   kelvin: "274.15",
  current_tempeture : ()=> 
   {
   return temp.celcius * Number(temp.kelvin); 
}}

 temp.celcius = prompt("Enter the tempture in celcius");

console.log(temp.current_tempeture(), temp.name);

const arr = [Name : "birat","shrestha","me","he","man"]
console.log(arr);


const person =[
{name: "birat", age:10},
{name: "shrestha", age:20},
{name: "me", age:5}

];
const age = person.short((a,b) =>{
    return a.age - b.age;
});

console.log(age);

const newperson1 = person.map((person) => {
    return person.name})
;

console.log(newperson1);



