console.log(localStorage.getItem('productId'));
var a =localStorage.getItem('productId')
//nav bar code
//search code
let search_input = document.getElementById("input");
let search_btn = document.getElementById("search-btn");
search_btn.addEventListener("click" , ()=>{
    
    console.log(search_input.value);
});




//banner section and category code
//category code sellers code
let swiper_categories = document.getElementById("swiper-category-js");
let swiper_items="";

let sellers = document.getElementById("sellers-part-js");
let three_sellers = "";

for (let index = 0; index < 10; index++) {
    swiper_items = swiper_items + `<div class="swiper-slide"> 
        <img src="../../images/SHOES.svg" alt="">
    </div>`
    three_sellers += `
    <div class="swiper-slide sellers-info">
        <div class="three-sellers">
            <ul>
                <li>
                    <a href="" class="first-seller">
                        <img src="../../SHOES.svg" alt="">
                        <div class="text">
                        <div class="name">hello there</div>
                        <p>Lorem ipsum dolor sit, amet consectetur</p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="" class="second-seller">
                        <img src="../../SHOES.svg" alt="">
                        <div class="text">
                        <div class="name">hello there</div>
                        <p>Lorem ipsum dolor sit, amet consectetur</p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="" class="third-seller">
                        <img src="../../SHOES.svg" alt="">
                        <div class="text">
                        <div class="name">hello there</div>
                        <p>Lorem ipsum dolor sit, amet consectetur</p>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `
}
var a=sessionStorage.getItem('token')
console.log(a)
swiper_categories.innerHTML+=swiper_items;
sellers.innerHTML=three_sellers;

//banner 1 code

let banner_one = document.getElementById("banner-one-js");
let banners_one = ""
for (let index = 0; index < 4; index++) {
    banners_one += `
    <div class="swiper-slide">
        <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    </div>
    `
}
banner_one.innerHTML=banners_one;
//banner 2 code
let banner_two = document.getElementById("banner-two-js");
let banners_two = ""
for (let index = 0; index < 7; index++) {
    banners_two += `
    <div class="swiper-slide">
        <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    </div>
    `
}
banner_two.innerHTML=banners_two;

//top category code
let top_categories=document.getElementById("top-categories-js");
let six_categories ="";
for (let index = 0; index < 6; index++) {
    six_categories += `
    <div class="category-item">
        <div class="img">
            
        <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        </div>
        <div class="category-name">shoes</div>
    </div>
    `
    
}
top_categories.innerHTML = six_categories;



let productList = [];
axios.get('https://tiny-jade-reindeer-cape.cyclic.app/api/v1/products')
  .then(response => {
    productList = response.data.data;
    
    console.log(productList)

    displayProduct();
  })
  .catch(error => {
    console.log(error)
  });

//display product

function displayProduct(){
    let table='';
    for (let i=0 ; i < productList.length; i++) {
        table =table + `
        <div class="items">
            <div class="img img1">
                <img
                    src="${productList[i].imageCover}"
                    alt=""
                />
            </div>
            <div class="icons">
                <a href="https://www.google.com"  class="add-cart">
                <span class="iconify" data-icon="iconoir:shopping-bag-add"></span>
                </a>
                <a href="https://www.google.com" class="add-wish">
                <span class="iconify" data-icon="material-symbols:heart-plus-outline"></span>
                </a>
                <a href="https://www.google.com" class="display">
                <span class="iconify" data-icon="mdi:eye-arrow-right-outline"></span>
                </a>
            </div>
            <div class="name">${productList[i].title}</div>
            <div class="info">
            ${productList[i].description} lkdfsjlfddsafsdfadfasdfasdsdfsd
            </div>
            <div class="foot-items">
                <div class="prices">
                    <div class="price">${productList[i].priceAfterDiscount}.99 USD</div>
                    <div class="old-price">${productList[i].price} USD</div>
                </div>
                <div class="review">
                    <div class="review-is">${productList[i].ratingAverage}</div>
                    <img class="start-img" src="/star.png" alt="">
                    
                </div>
            </div>
            
        </div>
        `
    
    document.getElementById('items-container').innerHTML += table+table + table+table+table + table+table+table + table+table+table + table;
   
    }
    
    
    
    
}

console.log(sessionStorage.getItem('token'))
// <!-- Initialize Swiper -->
let j = 1;
let degree=30;

function repeate(){
    j=j+1;
    degree = degree+120;
    switch (j % 10) {
        case (0):
        document.documentElement.style.setProperty("--selection-background", "#444");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (1):
        document.documentElement.style.setProperty("--selection-background", "#bbb");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (2):
        document.documentElement.style.setProperty("--selection-background", "#f7f705");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (3):
        document.documentElement.style.setProperty("--selection-background", "#f78605");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (4):
        document.documentElement.style.setProperty("--selection-background", "#A4CDFF");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (5):
        document.documentElement.style.setProperty("--selection-background", "#5d2871");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (6):
        document.documentElement.style.setProperty("--selection-background", "#c500bf");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (7):
        document.documentElement.style.setProperty("--selection-background", "#000dc5");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (8):
        document.documentElement.style.setProperty("--selection-background", "#c500ab");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (9):
        document.documentElement.style.setProperty("--selection-background", "#00c52b");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
    
        default:
            break;
    }
}
function repeateLeft(){
    j=j+1;
    degree = degree-120;
    switch (j % 10) {
        case (0):
        document.documentElement.style.setProperty("--selection-background", "#444");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (1):
        document.documentElement.style.setProperty("--selection-background", "#bbb");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (2):
        document.documentElement.style.setProperty("--selection-background", "#f7f705");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (3):
        document.documentElement.style.setProperty("--selection-background", "#f78605");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (4):
        document.documentElement.style.setProperty("--selection-background", "#A4CDFF");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (5):
        document.documentElement.style.setProperty("--selection-background", "#5d2871");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (6):
        document.documentElement.style.setProperty("--selection-background", "#c500bf");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (7):
        document.documentElement.style.setProperty("--selection-background", "#000dc5");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (8):
        document.documentElement.style.setProperty("--selection-background", "#c500ab");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
        case (9):
        document.documentElement.style.setProperty("--selection-background", "#00c52b");
        document.documentElement.style.setProperty("--rotate-repeted", +degree+"deg");
            break;
    
        default:
            break;
    }
}

let butotn = document.getElementById('swipe');
function reee(){
    butotn.click();
    
}
let btnPreviews = document.getAnimations('swipe-left');

var swipe3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  centeredSlides: true,
  allowTouchMove:false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  speed:600,
  navigation: {
    nextEl: ".button",
    prevEl: ".button-previews",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  
  centeredSlides: true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed:600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

setInterval(reee, 4000);





















// Define the Product class

// let firstChoice = document.getElementById('choice-1');
// let secondChoice = document.getElementById('choice-2');
// document.getElementById('select-choice').innerHTML=secondChoice;

// const { default: axios } = require("axios");


//guest page













//json
//============================
// FIRST METHODE :axios API, syntax : axios(config)
/*
axios({
    url:'/todos',
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'get'
})
.then((response)=>{
    // hundle success
    console.log(response.data)
})
.catch((err)=>{
    // hundle error
    console.log(err)
})
.then(() => {
    //always excuted
    console.log('end http request');
})
*/
//axios(config) https://jsonplaceholder.typicode.com/todos

//Request config

//response Shema (response object)
/* there are many object like status , statusText , header , config , request
you just write response.status
*/

//performing a GET request & with params

// axios({
//     url:'/todos',
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     method: 'get',
//     params: {
//         id:1 //he will get the object that there id equal 1
//     }
// })
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })
// .then(() => {
//     //always excuted
//     console.log('end http request');
// })

// if you have api by restfull or ... you should install it and include it in your project
// and copy the link and send the data from your server side
/*
axios({
    url:'http://localhost:3000/api/books',
    method: 'get',
})
.then((response)=>{
    // hundle success
    console.log(response.data)
})
.catch((err)=>{
    // hundle error
    console.log(err)
})


*/
//Performing a POST request
/*
axios({
    url:'http://localhost:3000/api/books',
    method: 'post',
    data: {
        title:"learn c++",
        author: "mr.c++"
    }
})
.then((response)=>{
    // hundle success
    console.log("the book was added successfully")
})
.catch((err)=>{
    // hundle error
    console.log(err)
})
*/
//=================================

//SECOND METHODE Request methode aliases


// axios.post('https://jsonplaceholder.typicode.com/todos',{
//     title:'i just learn',
//     completed:true,
// })
// .then((response)=>{
//     // hundle success
//     console.log("data was seccessfully added")
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })


// axios.delete('https://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>{
//     // hundle success
//     console.log("seccusfully deleted")
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })




/*
Request method aliases
for convenience aliases have been provided for all supported request methods
axias.request(config)
axias.get(url[, config])
axias.delete(url[, config])
axias.head(url[, config])
axias.options(url[, config])
axias.post(url[,data[, config[]])
axias.put(url[,data[, config[]])
axias.patch(url[,data[, config[]])

*/
//use async/awaint with axios

// const getAllbooks = async () =>{
//     try {
//         const response = await axios.get("lingk")
//         console.log(response.data);
//     } catch (e) {
//         console.log(e)
//     }
// }
// getAllbooks();
// console.log('start .....')

//Creating an instance

// const books = axios.create({
//     baseURL:"url",
//     url:'/books'
// })

// const todos = axios.create({
//     baseURL:"url",
// })

// todos.get('/todos')
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })

// config Defaults

//axios.defaults.baseURL = "url";
// axios.get('/todos')
// .then((response)=>{
//     // hundle success
//     console.log(response.data)
// })
// .catch((err)=>{
//     // hundle error
//     console.log(err)
// })


// Axios multiple requests

// axios.all({
//     todos.get('/todos'),
//     books.get('/books')
// })
// .then(axios.spread((todosResponse,postsResponses) => {
//     console.log(todosResponse.data)
//     console.log(postsResponses.data)
// }))

// interceptors





// Define the Product class
// class Product {
//     constructor(name, category, review, link, img, description, quantity, price, oldPrice) {
//       this.name = name;
//       this.category = category;
//       this.review = review;
//       this.link = link;
//       this.img = img;
//       this.description = description;
//       this.quantity = quantity;
//       this.price = price;
//       this.oldPrice = oldPrice;
//     }
//   }




// let firstProduct = new Product(
//     "SHOES",
//     "shoes",
//     4.8,
//     "https://example.com/product3",
//     "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     "Description of Product SHOES",
//     2,
//     29.99,
//     34.99
//   );
// for (let index = 0; index < 50; index++) {

//     productList.push(firstProduct);
// }
// console.log(productList)