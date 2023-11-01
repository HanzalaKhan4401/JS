//ES-5

// var name;

// var name = "Ali";

// // ES-6

// let fullname;
// fullname = "Ahmed";
// console.log(fullname);

// console.log(age);
// age = 33;
  
// console.log(age)

//conditional statments
// if, ifelse, else if, nested if

// const std = prompt("Enter your number");

// if(std <= 100){
//     console.log("you are eligible for picnic");
// }
// else if(std > 100 && std < 200){
//     console.log("Outsiders are not allowed")
// }
// else{
//     console.log("sorry better luck next time");
// }

// let number = prompt("enter the number");

// if (number % 2 === 0){
//     console.log("the number is even");
// }
// else{
//     console.log("number is odd");
// }

// Functions: A Block of code that can be reuse

// function fullName(firstname, lastname){
// // return console.log("your fullname is :" + firstname + lastname);
// return `you fullname is : ${firstname + " " + lastname}`
// }

// let result = fullName("saad", "Ali");
// console.log(result);

// let addition = (a , b) => {
//     return `the addition of two numbers is ${a + b}`;
// }
// let result = addition(2, 4)
// document.write(result)

// let arr = [2, 3, 5, 6, 78, 98, 20, 40];

// function sortedArr(a) {
//   // return `the sorted array is : ${a.sort()}`;
//   return a.sort(function (a, b) {
//     return b - a;
//   });
// }

// let array = sortedArr(arr);
// // document.write("<br>" + array);
// console.log(array);

// let names = ["Ebad", "Saad", "Sami", "Ali", "Yahya", "Aman"];
// // for(let i = 0; i < names.length; i++){
// //     console.log(names[i]);
// // }
// names.forEach((value) => {
//   console.log(value);
// });

// let displayname = (name, father) => console.log(name + father);
// displayname("Salman", "saleem");

// let car = {
//   Name: "Civic",
//   Model: "2022",
//   Phone: "033333333",
//   Make: "Honda"
// };

// console.log(car);

// for (let i in car) {
//   document.write(i + " " + car[i] + "<br>");
// }

// function Details(name, email, phone, city) {
//   (this.Name = name),
//     (this.Email = email),
//     (this.phone = phone),
//     (this.city = city);
// }

// let displayDetails1 = new Details(
//   "Sami",
//   "sami@gmail.com",
//   0834237596,
//   "Karachi"
// );
// let displayDetails2 = new Details(
//   "Sani",
//   "sani@gmail.com",
//   0835537596,
//   "Lahore"
// );
// console.log(displayDetails1);
// console.log(displayDetails2);
// // document.write(displayDetails)


// let age = 34;   //Global Scope

// function getAge(){
// let result = age + 2;   //local Scope
// console.log(result) // 36
// }
// // console.log(result);



// // console.log(result);
// getAge(); 
// console.log(age); // 34

// function getanotherAge(){
//   let result = age + 5;
//   console.log(result);
// }

// getanotherAge() // 39













// class Parent {
//   constructor(name, phone, gender, email) {
//     (this.Name = name),
//       (this.phone = phone),
//       (this.gender = gender),
//       (this.email = email);
//   }

//   msg() {
//     console.log("Hello");
//   }
//   static greet() {
//     console.log("Geetings");
//   }
// }



// class Child extends Parent{
//   constructor(name, phone, gender, email){
//     super(name, phone, gender, email)

//   }
//   childmsg(){
//     console.log("abbuuuu");
//   }
// }

// let parent = new Parent("ali", "9203573495", "Male", "ali@gmail.com");
// let child = new Child("ahmed", "025445662", "Male", "ahmed@gmail.com");
// child.msg()
// child.class = "1st year";
// child.childmsg()
// console.log(parent);
// console.log(child);


// Encapsulation


// function add(){
//   let a = 2;    // Local Scope
//   let b = 4;
//   let result = a + b;
//   console.log(result);
// }
// add()


// function subt(cb){
//   let a = 3;
//   let b = 5;
//   let result = a - b;
//   console.log(result);
//   cb();
// }

// subt(add)   //Global scope


// class Phone{
//   constructor(feature1, feature2){
//     this.Feature1 = feature1,
//     this.Feature2 = feature2
//   }
//   car(){
//     console.log("Honda civic");
//   }
// }

// class Smartphone extends Phone {
// constructor(feature1, feature2, Camera, videoSupp, game){
//   super(feature1, feature2)
//   this.Camera = Camera,
//   this.video = videoSupp,
//   this.Game = game
// }

// realme(){
//   console.log("Realme 5i");
// }

// }
// let phone = new Phone ("incommigCall", "outGoing");
// console.log(phone);


// let mobile = new Smartphone("incommigCall", "outGoing","galaxy", "A32", "Samsung");
// let nokia = new Smartphone("incoming", "outgoing", "CameraSupp", "videoSupp", "Gamesupp");
// console.log(nokia);
// console.log(mobile);
// mobile.car()



// Modules in JS












// let samsung = new Smartphone("galaxy", "A32", "Samsung");
// console.log(samsung);
// samsung.car();




































































