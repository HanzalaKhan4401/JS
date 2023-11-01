// Synchronous Behaviour

// console.log("Hello World");
// console.log("Bye World");
// function names(){
//     console.log("saadUllah")
// }
// console.log("sorry World");
// names()

// Asynchronous Behaviour

// setInterval(function (){
//     document.write("Please Wait. . .")
// },1000)

// console.log("fake World");

// function registeration() {
//   setTimeout(function () {
//     console.log("Registration Successful");
//   }, 3000);
// }
// function GetData() {
//   setTimeout(function () {
//     console.log("Data Stored");
//   }, 2000);
// }
// function login() {
//   setTimeout(function () {
//     console.log("Login Successful");
//   }, 1000);
// }
// function DataDisplay() {
//   setTimeout(function () {
//     console.log("data Displayed");
//   }, 2500);
// }

// registeration()
// GetData()
// login()
// DataDisplay()

// function registration(cb) {
//   setTimeout(function () {
//     cb();
//   }, 3000);
// }

// function Login(cb) {
//   setTimeout(function () {
//     cb();
//   }, 2000);
// }
// function DataDisplay(cb) {
//   setTimeout(function () {
//     cb();
//   }, 1000);
// }

// // Callback Hell

// registration(() => { console.log("Registration completed")
//   Login(() => { console.log("Login completed");

//     DataDisplay( () => console.log("Data Displayed"));
//   });
// });

// //Promise

// function prom(complete) {
//   let result = new Promise(function (resolve, reject) {
//     if (complete) {
//       resolve("meeting seccessful");
//     } else {
//       reject("meeting rejected");
//     }
//   });
//   return result;
// }

// let a = prom(false)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// // console.log(a);

// // Async Await

// async function addition() {
//   let a = 3;
//   let b = 4;
//   const result = a + b;
//   await console.log("Please wait . . ");
//   return result;
// }
// console.log("The addition of two numbers is: ");
// // let res = addition();
// addition().then(data => console.log(data))
// console.log(res);

// immediately invoke function

// (
//    fetch("https://dummyjson.com/products").then(response => response.json()).then(data =>{
//     let con = document.getElementById('rootelement')
//   console.log(data);
//   data.products.forEach(value => {
// con.innerHTML += `
// <div class="col-sm-6 col-md-4 col-lg-3">
// <div class="card" style="height:300px; overflow-y: scroll">
// <img src="${value.images[0]}" class="card-img-top" alt="..." height="200px">
// <div class="card-body">
//   <h5 class="card-title">${value.title}</h5>
//   <p class="card-text">${value.description}</p>
//   <a href="#" class="btn btn-primary">${value.price}</a>
// </div>
// </div>
//         </div>

// `

//     })

// })
// )()

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let table = document.getElementById("tab");

//   function displayResults(result) {
//     table.innerHTML = "";
//     result.forEach((e) => {
//       table.innerHTML += `
//   <tr>
//   <th scope="row">${e.id}</th>
//   <td>${e.title}</td>
//   <td>${e.category}</td>
//   <td>${e.description}</td>
//   <td>${e.price}</td>
//   <td><img src="${e.image}" alt="" height="100px" width="100px"></td>
// </tr>

//   `;
//     });
//   }

//   let searchbar = document.getElementById("searchbar");
//   let btn = document.getElementById("btn");
//   function search() {
//     let query = searchbar.value;
//     console.log(query);

//     let result = data.filter(function (products) {
//       return (
//         products.category.toLowerCase().includes(query) ||
//         products.description.toLowerCase().includes(query)
//       );
//     });
//     // console.log(result);
//     displayResults(result);
//   }

//   btn.addEventListener("click", search);
// });

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let table = document.getElementById("tab");

    let searchbar = document.getElementById("searchInput");
    let btn = document.getElementById("btn");

    function display(result) {
      table.innerHTML = "";
      result.forEach((e) => {
        table.innerHTML += `
    <tr>
    <th scope="row">${e.id}</th>
    <th scope="row">${e.title}</th>
    <td>${e.category}</td>
    <td>${e.description}</td>
    <td>${e.price}</td>
    <td><img src="${e.image}" alt="images" height="100px" width="100px"></td>
  </tr>
    
    
    `;
      });
    }

    function search() {
      let query = searchbar.value;
      console.log(query);
      let result = data.filter(function (products) {
        return products.category.toLowerCase().includes(query);
      });
      console.log(result);
      display(result);
    }

    btn.addEventListener("click", search);
  });
