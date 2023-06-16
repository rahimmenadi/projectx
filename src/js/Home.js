
let number;
let subList=[];
function updateCartNumber(cartLenth,totalPrice){
    document.getElementById("cart-number").textContent= cartLenth + "";
    document.getElementById("cart-number-one").textContent= cartLenth + "";
    let Total_cart = document.getElementById("total-cart-home");
    Total_cart.textContent = totalPrice;
}


function sendProductIdCard(k){
    
    // Make a POST request to add the product
    axios.post('https://buy-it-sigma.herokuapp.com/api/v1/cart',  {productId : AllProductList[k]._id}  , {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
        console.log("added" , response.data.data)
        updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
    
}

function btn_add_cart(){
    console.log(i)
}

//copy menu for mobile
function copyMenu() {
	//copy inside .dpt-cat to .departments
	var dptCategory = document.querySelector(".dpt-cat");
	var dptPlace = document.querySelector(".departments");
	dptPlace.innerHTML = dptCategory.innerHTML;

	//copy inside nav to nav
	var mainNav = document.querySelector(".header-nav nav");
	var navPlace = document.querySelector(".off-canvas nav");
	navPlace.innerHTML = mainNav.innerHTML;

	//copy .header-top .wrapper to .thetop-nav
	var topNav = document.querySelector(".header-top .wrapper");
	var topPlace = document.querySelector(".off-canvas .thetop-nav");
	topPlace.innerHTML = topNav.innerHTML;
}




let home_sign_up_btn = document.getElementById("sign-up-home");
let home_my_account_btn = document.getElementById("my-account-home");
let home_wishlist_btn = document.getElementById("wishlist-home");
let home_wishlist_icon = document.getElementById("wish-list-icon-home");
if(localStorage.getItem('token')==null){
    home_my_account_btn.style.display="none";
    home_wishlist_btn.style.display="none";
    home_wishlist_icon.style.display="none";
}else{
    home_sign_up_btn.style.display="none";
}

let Total_cart = document.getElementById("total-cart-home");
//https://buy-it-sigma.herokuapp.com/api/v1/categories/id/subcategories
//https://buy-it-sigma.herokuapp.com/api/v1/products?sort=-createdAt

//categories code

function sendCategoryId(j){
    localStorage.setItem("subcatId",subList[j]._id);
    window.location.assign('/src/html/categoriesPage.html')
}


let all_categories_items = "";

// Create a map to store subcategories by category ID
const subcategoriesByCategoryId = new Map();

        // Fetch the categories separately
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/categories')
.then(categoryResponse => {
// Handle the category response data
const categories = categoryResponse.data.data;

// Loop through the categories and retrieve their subcategories

//category code sellers code
let swiper_categories = document.getElementById("swiper-category-js");
let swiper_items="";

let sellers = document.getElementById("sellers-part-js");
let three_sellers = "";

for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if(!subcategoriesByCategoryId.has(category._id)){
        subcategoriesByCategoryId.set(category._id,[]);
        }
        all_categories_items += `
                    <li class="has-child beauty">
                        <a href="#">
                            ${category.name}
                            <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                        </a>
                        <ul>
                        </ul>
                    </li>
                    `
            //category code sellers code
            axios.get(`https://buy-it-sigma.herokuapp.com/api/v1/categories/${category._id}/products?limit=3&sort=-sold`)
                .then(response => {
                    // Handle the response data
                    console.log(response.data.data);
    
                    
                    let three_sellers_first="";
                    three_sellers_first += `
                <div class="swiper-slide sellers-info">
                    <div class="three-sellers">
                        <ul>
                            `
                            let three_sellers_second="";
                            three_sellers_second += `
                        </ul>
                    </div>
                </div>
                `
                let the_three_sellers="";
                for (let i = 0; i < response.data.data.length; i++) {
                    const element = response.data.data[i];
                    the_three_sellers = the_three_sellers + `
                            <li>
                                <a href="" class="third-seller">
                                    <img src="${element.imageCover}" alt="">
                                    <div class="text">
                                    <div class="name">${element.title}</div>
                                    <p>${element.description}</p>
                                </div>
                                </a>
                            </li>
                    `
    
                }
                three_sellers += three_sellers_first + the_three_sellers + three_sellers_second;



    
                swiper_items = swiper_items + `<div class="swiper-slide"> 
                    <img src="${category.image}" alt="">
                </div>`
                
                if(i==(categories.length -1)){
                swiper_categories.innerHTML=swiper_items;
    console.log("in here swiper" + swiper_items)
    sellers.innerHTML=three_sellers;
    console.log("in here swipesellerr" + three_sellers)
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
                }
                })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                });
    
    
    
    
    
    
                
            
}



        
    axios.get('https://buy-it-sigma.herokuapp.com/api/v1/subcategories')
    .then(response => {
        // Handle the response data
        const subcategories = response.data.data;



        // Categorize subcategories by category ID
        
          //in here the category
        subcategories.forEach(subcategory => {
        const categoryId = subcategory.category;
        if (subcategoriesByCategoryId.has(categoryId)) {
            let table_sub = subcategoriesByCategoryId.get(categoryId);
            table_sub.push(subcategory);
            subcategoriesByCategoryId.set(categoryId,table_sub);
        } else {
            // let table_new_sub=[];
            // table_new_sub.push(subcategory);
            // subcategoriesByCategoryId.set(categoryId, table_new_sub );
            console.log("mkash lid ta3 categori hadi ftableaux")
        }
        
        });

        
        let all_categories_items = "";
            
            
            categories.forEach(category => {
                
            let sub_categories_code =""
                subcategoriesByCategoryId.get(category._id).forEach(subcat =>{
                    //in here the sub categories
                    subList.push(subcat);
                    number = subList.length - 1;
                    let the_id=parseInt(subcat._id);
                    sub_categories_code +=`
                    <li><a onclick="sendCategoryId(${number})" href="#">${subcat.name}</a></li>
                    `
                })

                all_categories_items += `
                            <li class="has-child electronic">
                                <a href="#">
                                    ${category.name}
                                    <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                </a>
                                <ul>
                                    ${sub_categories_code}
                                </ul>
                            </li>
                            `
            });
            let categories_contain = document.getElementById("categories-container");
            categories_contain.innerHTML = `
            <div class="dpt-head">
            <div class="main-text">All Departments</div>
            <div class="mini-text mobile-hide">Total 1059 Products</div>
            <a href="#" class="dpt-trigger mobile-hide">
                <i class="ri-menu-3-line ri-xl"></i>
            </a>
            </div>

            <div  class="dpt-menu">
            <ul class="second-links">
            ` + all_categories_items + `
            </ul>`;


            





        }


        
    )
    .catch(subcategoryError => {
        console.error(subcategoryError);
    });
})
.catch(categoryError => {
console.error(categoryError);
});





 



function showCategoriesData(){
// for (let index = 0; index < 11; index++) {
    
// }
/*
 <li class="has-child beauty">
        <a href="#">
            <div class="icon-large"><i class="ri-bear-smile-line"></i></div>
            Beauty
            <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
        </a>
        <ul>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Hair Care</a></li>
            <li><a href="#">Fragrance</a></li>
            <li><a href="#">Foot & Hand Care</a></li>
            <li><a href="#">Tools & Accessories</a></li>
            <li><a href="#">Shave & Hair Removal</a></li>
            <li><a href="#">Personal Care</a></li>
        </ul>
    </li>
*/

}







console.log("hleoo");
//header code

//==================================SEARCH CODE=========================================================

let searchis = document.getElementById("searchis");
let searchisis = document.getElementById("searchisis");
let btn_search = document.getElementById("search-btn");



  document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    localStorage.setItem('searchValue',searchis.value);
  
    // Get the search query from the input field
    var searchQuery = document.getElementById("searchis").value;
  
    // Redirect to another page with the search query as a parameter
    window.location.href = "/src/html/Search.html?query=" + encodeURIComponent(searchQuery);
  });

  document.getElementById("myformone").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    localStorage.setItem('searchValue',searchisis.value);
  
    // Get the search query from the input field
    var searchQuery = document.getElementById("searchisis").value;
  
    // Redirect to another page with the search query as a parameter
    window.location.href = "/src/html/Search.html?query=" + encodeURIComponent(searchQuery);
  });



//==================================SEARCH CODE=========================================================






let newProductList = [];
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products?sort=-createdAt')
  .then(response => {
    newProductList = response.data.data;
    
    displayFeaturedProduct();
  })
  .catch(error => {
    console.log(error)
  });

function displayFeaturedProduct(){
    let featured_product = document.getElementById("featured-product-js");
    let featured_product_items = ""
    let maximize_length = 8;
    if(newProductList.length<8){
        maximize_length = newProductList.length;
    }
    for (let i=0 ; i < maximize_length; i++) {
        var serializedProductId = JSON.stringify(newProductList[i]);

        // Encode the serialized product ID to handle special characters
      
        featured_product_items += `
        <div class="item">
        <div class="media">
            <div class="thumbnail object-cover">
                <a onclick="sendNewProductId(${i}) href="#">
                    <img src="${newProductList[i].imageCover}" alt="">
                </a>
            </div>
            <div class="hoverable">
                <ul>
                    <li class="active"><a id="click-me${newProductList[i]._id}" onclick="btn_wishlist_new(this,${i})" id="add-wishlist-btn"><i class="ri-heart-line"></i></a></li>
                    <li ><a  onclick="sendNewProductIdCart(${i})"><span class="iconify" data-icon="iconoir:shopping-bag-add"></span></a></li>
                </ul>
            </div>
            <div class="discount circle flexcenter"><span>${newProductList[i].price/newProductList[i].priceAfterDiscount*100}%</span></div>
        </div>
        <div class="content">
        
            <div class="rating">
                <div style="width:${newProductList[i].ratingAverage/5*80}px" class="stars"></div>
                <span class="mini-text">${newProductList[i].ratingAverage}</span>
            </div>
            <h3><a href="#">${newProductList[i].description}</a></h3>
            <div class="price">
                <span class="current">$${newProductList[i].priceAfterDiscount}</span>
                <span class="normal mini-text">$${newProductList[i].price}</span>
            </div>
        </div>
    </div>
        `
    
    }

//${5/productList[i].ratingAverage


     featured_product.innerHTML=featured_product_items;
    
    
     let a = 0;
     

}
let wishListProductList = [];

function btn_wishlist_all(link,i){
    link.classList.toggle('checked');
  
  const isChecked = link.classList.contains('checked');
  if(isChecked){
    link.style.backgroundColor = 'red';
    link.style.color = 'white'
    addProduct(AllProductList[i]);
  }else{
    link.style.backgroundColor = 'white';
    link.style.color = 'black'
    removeProduct(AllProductList[i]._id);
  }
  
}
function btn_wishlist_new(link,i){
    link.classList.toggle('checked');
  
  const isChecked = link.classList.contains('checked');
  if(isChecked){
    link.style.backgroundColor = 'red';
    link.style.color = 'white'
    addProduct(newProductList[i]);
  }else{
    link.style.backgroundColor = 'white';
    link.style.color = 'black'
    removeProduct(newProductList[i]._id);
  }
  
}

function btn_wishlist(link,i) {
    link.classList.toggle('checked');
  
  const isChecked = link.classList.contains('checked');
  if(isChecked){
    link.style.backgroundColor = 'red';
    link.style.color = 'white'
    
    
    addProduct(AllProductList[i]);
  }else{
    link.style.backgroundColor = 'white';
    link.style.color = 'black'
    removeProduct(AllProductList[i]._id);
    
  }
  
  }

  const token = localStorage.getItem("token");


  axios.get('https://buy-it-sigma.herokuapp.com/api/v1/cart',  {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
        console.log("gettedcart" , response.data.data)
        updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);      })
      .catch(error => {
        console.error('Error adding product:', error);
      });

  function addProduct(product) {
    // Make a POST request to add the product
    axios.post('https://buy-it-sigma.herokuapp.com/api/v1/wishlist', {productId:product._id} , {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
        document.getElementById("wishlist-number").textContent= response.data.data.length + "";
        
        console.log("product added",response.data.data)
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  }

  function removeProduct(productId) {
  
      // Make a DELETE request to remove the product
      axios.delete(`https://buy-it-sigma.herokuapp.com/api/v1/wishlist/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then(response => {
          document.getElementById("wishlist-number").textContent= response.data.data.length + "";
          console.log("product deleted" ,response.data.data)
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    
  }




//all product code

// for (let index = 0; index < 20; index++) {
//     all_product_items += `
//     <div class="item">
//     <div class="media">
//         <div class="thumbnail object-cover">
//             <a href="#">
//                 <img src="assets/products/apparel1.jpg" alt="">
//             </a>
//         </div>
//         <div class="hoverable">
//             <ul>
//                 <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
//                 <li><a href="#"><i class="ri-eye-line"></i></a></li>
//                 <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
//             </ul>
//         </div>
//         <div class="discount circle flexcenter"><span>25%</span></div>
//     </div>
//     <div class="content">
//         <div class="rating">
//             <div class="stars"></div>
//             <span class="mini-text">(1,955)</span>
//         </div>
//         <h3><a href="#">Under Armour Men's Tech</a></h3>
//         <div class="price">
//             <span class="current">$56.50</span>
//             <span class="normal mini-text">$75.50</span>
//         </div>
//     </div>
// </div>
//     `
// }
function sendProductId(k){
    
    localStorage.setItem('productId',AllProductList[k]._id);
    
    window.location.assign('/product-details.html');
}
function sendBestProductId(k){
    
    localStorage.setItem('productId',BestProductList[k]._id);
    
    window.location.assign('/product-details.html');
}
function sendNewProductId(k){
  // Serialize the object to JSON
  // Navigate to another page with the encoded product ID
  

  localStorage.setItem('productId',newProductList[k]._id);
  window.location.assign('/product-details.html');
}

function sendNewProductIdCard(k){
  // Serialize the object to JSON
  // Navigate to another page with the encoded product ID
  
  
  axios.post('https://buy-it-sigma.herokuapp.com/api/v1/cart',   newProductList[k]._id , {
    headers: {
        Authorization: `Bearer ${token}`
      }
  })
  .then(response => {
    console.log("added" + response.data.data)
    
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });
  
}

console.log(localStorage.getItem("token"))

let AllProductList = [];
let BestProductList = [];
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products')
  .then(response => {
    AllProductList = response.data.data;
    
    displayProduct();
    axios.get('https://buy-it-sigma.herokuapp.com/api/v1/wishlist', {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
        for (let i = 0; i  <response.data.data.length; i++) {
        document.getElementById("click-me" + response.data.data[i]._id +"a").click();
        
        }
        document.getElementById("wishlist-number").textContent=response.data.data.length+"";
        console.log('Product added:', response.data.data);
      })
      .catch(error => {
        console.error('Error get product:', error);
      });
  })
  .catch(error => {
    console.log(error)
  });
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products')
  .then(response => {
    BestProductList = response.data.data;
    
    displayBestProduct();

  })
  .catch(error => {
    console.log(error)
  });


function displayProduct(){
    let all_product = document.getElementById("all-product-js");
    let all_product_items = ""
    for (let i=0 ; i < AllProductList.length; i++) {
        var serializedProductId = JSON.stringify(AllProductList[i]);

        // Encode the serialized product ID to handle special characters
      
        all_product_items += `
        <div class="item">
        <div class="media">
            <div class="thumbnail object-cover">
                <a onclick="sendProductId(${i})" href="#">
                    <img src="${AllProductList[i].imageCover}" alt="">
                </a>
            </div>
            <div class="hoverable">
                <ul>
                    <li  class="active"><a id="click-me${AllProductList[i]._id}a" onclick="btn_wishlist_all(this,${i})" id="add-wishlist-btn"><i class="ri-heart-line"></i></a></li>
                    <li><a  onclick="sendProductIdCard(${i})"  ><span class="iconify" data-icon="iconoir:shopping-bag-add"></span></a></li>
                </ul>
            </div>
            <div class="discount circle flexcenter"><span>${(AllProductList[i].price/AllProductList[i].priceAfterDiscount*100).toFixed(1)}%</span></div>
        </div>
        <div class="content">
        
            <div class="rating">
                <div style="width:${AllProductList[i].ratingAverage/5*80}px" class="stars"></div>
                <span class="mini-text">${AllProductList[i].ratingAverage}</span>
            </div>
            <h3><a href="#">${AllProductList[i].description}</a></h3>
            <div class="price">
                <span class="current">$${AllProductList[i].priceAfterDiscount}</span>
                <span class="normal mini-text">$${AllProductList[i].price}</span>
            </div>
        </div>
       
    </div>
        `
    
    }

//${5/productList[i].ratingAverage


     all_product.innerHTML=all_product_items;
    
    
    
    
}
function displayBestProduct(){

//trendig 8 product
let first_offer_row = document.getElementById("offer-first-row");
let second_offer_row = document.getElementById("offer-second-row");

let offer_products_first="";
let offer_products_second="";
let product_offer_content
for (let i = 1; i < 9; i++) {
    if(i<5){
        offer_products_first+=`
        <div onclick="sendProductId(${i})" class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a onclick="sendProductId(${i})" href="#">
                        <img src="${BestProductList[i].imageCover}" alt="">
                    </a>
                </div>
                <div class="discount circle flexcenter"><span>${(BestProductList[i].price/BestProductList[i].priceAfterDiscount).toFixed(1)}%</span></div>
            </div>
            <div class="content">
                <h3 class="main-linksis"><a href="#">${BestProductList[i].description}</a></h3>
                
                <div class="rating">
                <div style="width:${BestProductList[i].ratingAverage/5*80}px" class="stars"></div>
                <span class="mini-text">${BestProductList[i].ratingAverage}</span>
                </div>
                <div class="price">
                    <span class="current">$${BestProductList[i].priceAfterDiscount}</span>
                    <span class="normal mini-text">$${BestProductList[i].price}</span>
                </div>
                <div class="mini-text">
                    <p>2975 sold</p>
                    <p>Free Shipping</p>
                </div>
            </div>
        </div>
        
        `
    }else{
        offer_products_second+=`
        <div onclick="sendProductId(${i})" class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a onclick="sendProductId(${i})" href="#">
                        <img src="${BestProductList[i].imageCover}" alt="">
                    </a>
                </div>
                <div class="discount circle flexcenter"><span>${(BestProductList[i].price/BestProductList[i].priceAfterDiscount).toFixed(2)}%</span></div>
            </div>
            <div class="content">
                <h3 class="main-links"><a href="#">${BestProductList[i].title}</a></h3>
                
                <div class="rating">
                <div style="width:${BestProductList[i].ratingAverage/5*80}px" class="stars"></div>
                <span class="mini-text">${BestProductList[i].ratingAverage}</span>
                </div>
                <div class="price">
                    <span class="current">$${BestProductList[i].priceAfterDiscount}</span>
                    <span class="normal mini-text">$${BestProductList[i].price}</span>
                </div>
                <div class="mini-text">
                    <p>2975 sold</p>
                    <p>Free Shipping</p>
                </div>
            </div>
        </div>
        `
    }
}
first_offer_row.innerHTML=offer_products_first;
second_offer_row.innerHTML=offer_products_second;

let img_special_offre = document.getElementById("special-offre-img");
let rating_special_offre = document.getElementById("special-offre-rating");
let count_rating = document.getElementById("rating-count");
let offer_text = document.getElementById("offer-text");
let current_offer_price = document.getElementById("current-offer-price");
let old_offer_price = document.getElementById("old-offer-price");
let discount_offer = document.getElementById("discount-offer");
let offer_qty = document.getElementById("offer-qty");
let offer_qty_sold = document.getElementById("offer-qty-sold");
let offer_bar = document.getElementById("offer-bar");

img_special_offre.src=BestProductList[1].imageCover;
rating_special_offre.style.width="50px";
count_rating.innerHTML=`(${50})`;
offer_text.textContent="Happy Sailed Womens Summer Boho Florals";
current_offer_price.textContent="$129.99";
old_offer_price.textContent="$189.98";
discount_offer.textContent="31%";
offer_qty.textContent="3000";
offer_qty_sold.textContent="3522";
offer_bar.style.width="30%"

    
}


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDY3YWU5NjExODljYjBkMzE1ZDNmYzgiLCJpYXQiOjE2ODQ3NzY2OTgsImV4cCI6MTY5MjU1MjY5OH0.6ctG0e--AOFYaWCzVi7F6F-xsvcBc3BU41Q4XPDKqew';

// const newProduct = {
//   name: 'lias lja7ch',
//   // Include any other necessary fields 
// };



// axios.post('https://buy-it-sigma.herokuapp.com/api/v1/categories', newProduct, {
//   headers: {
//     Authorization: `Bearer ${token}`
//   },
// })
//   .then(response => {
//     // Handle the response data
//     const createdProduct = response.data.data;
//     console.log('Product created:', createdProduct);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });


//=====================================
//==============TRENDING===============
//=====================================

//special offre
// // Set the date we're counting down to
// var countDownDate = new Date("Dec 13, 2023 15:13:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("days").innerHTML = days + "d";
//   document.getElementById("hours").innerHTML = hours + "h";
//   document.getElementById("minutes").innerHTML = minutes + "m";
//   document.getElementById("seconds").innerHTML = seconds + "s";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);












copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
	closeButton = document.querySelector(".t-close"),
	addclass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
	addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
	addclass.classList.remove("showmenu");
});

//show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
	e.preventDefault();
	submenu.forEach((item) =>
		item != this
			? item.closest(".has-child").classList.remove("expand")
			: null
	);
	if (this.closest(".has-child").classList != "expand");
	this.closest(".has-child").classList.toggle("expand");
}



//show search
const searchButton = document.querySelector(".t-search"),
	tClose = document.querySelector(".search-close"),
	showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
	showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
	showClass.classList.remove("showsearch");
});

//show dpt menu
conutton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
// dptButton.addEventListener("click", function () {
// 	dptClass.classList.toggle("showdpt");
// });

//product image slider


//stock products bar width percentage
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
	let stock = stocks[x].dataset.stock,
		available = stocks[x].querySelector(".qty-available").innerHTML,
		sold = stocks[x].querySelector(".qty-sold").innerHTML,
		percent = (sold * 100) / stock;

	stocks[x].querySelector(".available").style.width = percent + "%";
}

//show cart on click
const divtoShow = ".mini-cart";
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector(".cart-trigger");

// divTrigger.addEventListener("click", () => {
// 	setTimeout(() => {
// 		if (!divPopup.classList.contains("show")) {
// 			divPopup.classList.add("show");
// 		}
// 	}, 250);
// });

//close by click outside
// document.addEventListener("click", (e) => {
// 	const isClosest = e.target.closest(divtoShow);
// 	if (!isClosest && divPopup.classList.contains("show")) {
// 		divPopup.classList.remove("show");
// 	}
// });

//show modal on load
window.onload = function () {
	document.querySelector(".site").classList.toggle("showmodal");
};
// document.querySelector(".modalclose").addEventListener("click", function () {
// 	document.querySelector(".site").classList.remove("showmodal");
// });






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



setInterval(reee, 4000);


