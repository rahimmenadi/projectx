let cart_id;
function updateCartNumber(cartLenth,totalPrice){
    document.getElementById("cart-number").textContent= cartLenth + "";
    document.getElementById("cart-number-one").textContent= cartLenth + "";
    let Total_cart = document.getElementById("total-cart-home");
    Total_cart.textContent = totalPrice;
}

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



//category code
//==========================================================================================================================================================
let all_categories_items = "";

// Create a map to store subcategories by category ID
const subcategoriesByCategoryId = new Map();

        // Fetch the categories separately
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/categories')
.then(categoryResponse => {
// Handle the category response data
const categories = categoryResponse.data.data;

// Loop through the categories and retrieve their subcategories


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
                <i class="ri-close-line ri-xl"></i>
            </a>
            </div>

            <div  class="dpt-menu">
            <ul class="second-links">
            ` + all_categories_items + `
            </ul>`;

            console.log(categories_contain.innerHTML);
            
            // dptButton.addEventListener("click", function () {
            //     dptClass.classList.toggle("showdpt");
            // });
            copyMenu();
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
//show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
    dptClass.classList.toggle("showdpt");
  });




        }


        
    )
    .catch(subcategoryError => {
        console.error(subcategoryError);
    });
})
.catch(categoryError => {
console.error(categoryError);
});

//=============================================================================================================================================
//end header


//==============================================ORDER SUMMARY==============================================

const subtotal_items = document.getElementById("subtotal-items");
const subtotal_items_price = document.getElementById("subtotal-price");
const coupoun_discount = document.getElementById("coupoun-discount");
const shipping_price = document.getElementById("shipping-price");
const total_price_summary = document.getElementById("total-price-summary");



//==============================================ORDER SUMMARY END==============================================

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
    console.log(response.data)
    console.log("kadia")
    console.log(panier_item);
    cartItemsis = panier_item.cartItems;
    console.log(cartItemsis.length)

    subtotal_items_price.textContent=panier_item.totalCartPrice;
    coupoun_discount.textContent="0";
    shipping_price.textContent="Not Free";
    total_price_summary.textContent=panier_item.totalCartPrice;

    updateCartNumber(response.data.data.cartItems.length,panier_item.totalCartPrice);

    
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
                                            <button onclick="changeQuantityminus(${i})" id="minus${i}" class="minus">-</button>
                                            <div id="num${i}" class="num">${cartItemsis[i].quantity}</div>
                                            <button onclick="changeQuantityplus(${i})" id="plus${i}" class="plus">+</button>
                                        </div>
                                    </div>
                                    <div class="centered">
                                
                                    <button onclick="removeFromCart(${i})"  id="remove"><a><img src="/images/megaphone-icon.svg" alt=""></a></button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
        `

        panierall.innerHTML=panier_items;
        
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });

        
        
            
    
    }
})
.catch(error => {
  console.error('Error adding product:', error);
});

const waitingDialog = document.querySelector('.waiting-dialog');
let plus,minus,num;
//-------------------------CHANGE QUANITYT-------------------------------------------
function changeQuantityminus(r){
    // Show the waiting dialog
    waitingDialog.style.display = 'flex';

        minus=document.getElementById("minus"+r);
        num = document.getElementById("num"+r);
  


  let a = cartItemsis[r].quantity;
  console.log(a)
  
  if(a<=2){
    minus.disabled = true;
  }

  a--;
  num.innerHTML=a;


    const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}` // Include the authentication token in the headers
        }
      });
      
      // Make the request to update the product quantity
      axiosInstance.put(`https://buy-it-sigma.herokuapp.com/api/v1/cart/${cartItemsis[r]._id}`, { quantity: a })
        .then(response => {
          console.log('Product quantity updated successfully', response.data.data.cartItems);
          cartItemsis = response.data.data.cartItems
          // Handle the response or perform additional actions
          subtotal_items_price.textContent=response.data.data.totalCartPrice;
          coupoun_discount.textContent="0";
          shipping_price.textContent="Not Free";
          total_price_summary.textContent=response.data.data.totalCartPrice;
      
          // document.getElementById("wishlist-number").textContent= response.data.data.length + "";
          
          updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);
              
          waitingDialog.style.display = 'none';
        })
        .catch(error => {
          console.error('Error updating product quantity', error);
          // Handle the error or display an error message
        });
}
function changeQuantityplus(r){
    // Show the waiting dialog
    waitingDialog.style.display = 'flex';

    minus=document.getElementById("minus"+r);

        num = document.getElementById("num"+r);
  
  let a = cartItemsis[r].quantity;
  console.log(a)

  if(a<=4){
    minus.disabled=false;
  }

  a++;
  num.innerHTML=a;



    const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}` // Include the authentication token in the headers
        }
      });
      
      // Make the request to update the product quantity
      axiosInstance.put(`https://buy-it-sigma.herokuapp.com/api/v1/cart/${cartItemsis[r]._id}`, { quantity: a })
        .then(response => {
          console.log('Product quantity updated successfully', response.data.data.cartItems);
          cartItemsis = response.data.data.cartItems
          // Handle the response or perform additional actions
          subtotal_items_price.textContent=response.data.data.totalCartPrice;
          coupoun_discount.textContent="0";
          shipping_price.textContent="Not Free";
          total_price_summary.textContent=response.data.data.totalCartPrice;
      
          // document.getElementById("wishlist-number").textContent= response.data.data.length + "";
          
          updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);
              
          waitingDialog.style.display = 'none';
        })
        .catch(error => {
          console.error('Error updating product quantity', error);
          // Handle the error or display an error message
        });
}

//remove product from panier
function removeFromCart(i) {
    console.log(cartItemsis)
    console.log(i)
  
    // Make a DELETE request to remove the product
    axios.delete(`https://buy-it-sigma.herokuapp.com/api/v1/cart/${cartItemsis[i]._id}`, {
      headers: {
          Authorization: `Bearer ${token}`
        }
    })
      .then(response => {
        subtotal_items_price.textContent=response.data.data.totalCartPrice;
        coupoun_discount.textContent="0";
        shipping_price.textContent="Not Free";
        total_price_summary.textContent=response.data.data.totalCartPrice;
    
        // document.getElementById("wishlist-number").textContent= response.data.data.length + "";
        
        updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);
            
        console.log("product deleted" ,response.data)
        location.reload();

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

copyMenu();


//=====================================COUPOUN CODE ===============================================
let btn_apply_coupoun = document.getElementById("apply-coupoun-btn");
let coupoun_text = document.getElementById("coupoun-text")

btn_apply_coupoun.addEventListener("click" , ()=>{
  console.log(coupoun_text.value);


  // Assuming you have the coupon code stored in a variable called "couponCode"

axios.patch('https://buy-it-sigma.herokuapp.com/api/v1/cart/applyCoupon', { coupon: coupoun_text.value }, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
.then(response => {
  // const newTotalPrice = response.data.totalPriceAfterDiscount;
  // console.log('New Total Price:', newTotalPrice);
  // subtotal_items_price.textContent=newTotalPrice;
  // coupoun_discount.textContent="0";
  // shipping_price.textContent="Not Free";
  // total_price_summary.textContent=newTotalPrice;
  console.log("jih")

})
.catch(error => {
  console.error('Error applying coupon:', error);
});


})