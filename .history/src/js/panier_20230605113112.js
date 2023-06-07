let cart_id;



sessionStorage.getItem('token')
console.log(sessionStorage.getItem('token'))



console.log(sessionStorage.getItem('productId'));

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
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");


//product image slider
var productThumb = new Swiper(".small-image", {
	
	spaceBetween:10 ,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		481: {
			spaceBetween: 32,
		},
	},
});
var productBig = new Swiper(".big-image", {
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: productThumb,
	},
});

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
const divTrigger = document.querySelector(".cart-trigger")
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
let addtocart=document.getElementById('add-to-cart')
// addtocart.addEventListener("click",function(e) {
// 	e.preventDefault()
// 	window.location.assign("")

// })

//start header
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


//category code
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
    
                    three_sellers += three_sellers_first + the_three_sellers + three_sellers_second;
                }


    
                swiper_items = swiper_items + `<div class="swiper-slide"> 
                    <img src="${category.image}" alt="">
                </div>`
                
                if(i==(categories.length -1)){
                swiper_categories.innerHTML=swiper_items;
    console.log("in here swiper" + swiper_items)
    sellers.innerHTML=three_sellers;
    console.log("in here swipesellerr" + three_sellers)
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
                    sub_categories_code +=`
                    <li><a href="#">${subcat.name}</a></li>
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


            
            dptButton.addEventListener("click", function () {
                dptClass.classList.toggle("showdpt");
            });
copyMenu();




        }


        
    )
    .catch(subcategoryError => {
        console.error(subcategoryError);
    });
})
.catch(categoryError => {
console.error(categoryError);
});

//end header



let cartItemsis;

let panierall= document.getElementById("panier-all");
let panier_items = "";
const token = localStorage.getItem("token");
console.log(token)
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/cart', {
  headers: {
      Authorization: `Bearer ${token}`
    }
})
.then(response => {
    let panier_item = response.data.data;
    cart_id = panier_item._id;
    console.log(cart_id)
    console.log(panier_item);
    cartItemsis = panier_item.cartItems;
    console.log(cartItemsis.length)
    document.getElementById("cart-number").textContent= response.data.data.cartItems.length + "";
    document.getElementById("cart-number-one").textContent= response.data.data.cartItems.length + "";
    Total_cart.textContent = panier_item.totalCartPrice;
    for (let i = 0; i  <cartItemsis.length; i++) {
        axios.get(`https://buy-it-sigma.herokuapp.com/api/v1/products/${cartItemsis[i].product}`
        , {
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
        let product_item = response.data.data;
        console.log(product_item)
        console.log(i)
        panier_items += `
        <div class="product">
                            <div onclick="sendProductId(${i})" class="product-image">
                                <img src="${product_item.imageCover}" alt="">
                            </div>
                            <div  class="product-info">
                                <div class="prix">${product_item.price} USD</div>
                                <div onclick="sendProductId(${i})" class="product-name">${product_item.title}</div>
                                <p onclick="sendProductId(${i})" class="desc">${product_item.description}</p>
                                <div class="seller">ROZANA</div>
                                <div class="rule">
                                    <div class="icon">hh</div>
                                    <div class="content">This item cannot be exchange or returned</div>
                                </div>
                                <div class="buttons">
                                    <div class="change-qts">
                                        <div class="text">Quantity</div>
                                        <div class="wrapper">
                                            <button class="minus">-</button>
                                            <div class="num">${product_item.quantity}</div>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <div class="centered">
                                
                                    <button onclick="removeFromCart(${i})"  id="remove"><img src="/images/megaphone-icon.svg" alt=""></button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
        `

        panierall.innerHTML=panier_items;
        const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
        num = document.querySelector(".num");
  
  let a = 1;
  
  plus.addEventListener("click",()=>{
      a++;
      num.innerHTML=a;
      minus.disabled=false;
  });
  minus.addEventListener("click",()=>{
      if(a<=2){
          minus.disabled=true;
      }else{
          minus.disabled=false;
      }
      a--;
      num.innerHTML=a;
  });

      })
      .catch(error => {
        console.error('Error adding product:', error);
      });

        
        
            
    
    }
})
.catch(error => {
  console.error('Error adding product:', error);
});


//remove product from panier
function removeFromCart(i) {
    console.log(cartItemsis)
    console.log(i)
  
    // Make a DELETE request to remove the product
    axios.delete(`https://buy-it-sigma.herokuapp.com/api/v1/cart/${cartItemsis[i].product}`, {
      headers: {
          Authorization: `Bearer ${token}`
        }
    })
      .then(response => {
        // document.getElementById("wishlist-number").textContent= response.data.data.length + "";
        document.getElementById("cart-number").textContent= response.data.data.length + "";
        console.log("product deleted" ,response.data.data)
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  
}

//checkout
let checkout_btn = document.getElementById("checkout");
checkout_btn.addEventListener("click" , ()=>{
    localStorage.setItem("cart_id" , cart_id);
    console.log(cart_id);
    window.location.href = "/shiping-details.html"
})

function sendProductId(k){
    
    localStorage.setItem('productId',cartItemsis[k].product);
    
    window.location.assign('../../product-details.html');
}