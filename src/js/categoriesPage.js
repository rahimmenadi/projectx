
const token = localStorage.getItem("token");
function updateCartNumber(cartLenth,totalPrice){
    document.getElementById("cart-number").textContent= cartLenth + "";
    document.getElementById("cart-number-one").textContent= cartLenth + "";
    let Total_cart = document.getElementById("total-cart-home");
    Total_cart.textContent = totalPrice;
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

//search code
const searchvalue = localStorage.getItem("subcatId");
console.log(searchvalue)

    // displaySearchProduct();
    axios.get(`https://buy-it-sigma.herokuapp.com/api/v1/subcategories/${searchvalue}/products`)
  .then(response => {
    SearchProductList = response.data.data;
    console.log(SearchProductList)
    displaySearchProduct();

  })
  .catch(error => {
    console.log(error)
  });


let searchis = document.getElementById("searchis");

let searchisis = document.getElementById("searchisis");

function searchclick(){

    localStorage.setItem('searchValue',searchis.value);
console.log("searchbtnclicked")
    // Get the search query from the input field
	axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products?keyword='+searchisis.value)
  .then(response => {
    SearchProductList = response.data.data;
    
    displaySearchProduct();
    // axios.get('https://buy-it-sigma.herokuapp.com/api/v1/wishlist', {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //   })
    //   .then(response => {
    //     for (let i = 0; i  <response.data.data.length; i++) {
    //     document.getElementById("click-me" + response.data.data[i]._id +"a").click();
        
    //     }
    //     document.getElementById("wishlist-number").textContent=response.data.data.length+"";
    //     console.log('Product added:', response.data.data);
    //   })
    //   .catch(error => {
    //     console.error('Error get product:', error);
    //   });
  })
  .catch(error => {
    console.log(error)
  });
}


let btn_search = document.getElementById("search-btn");
btn_search.addEventListener("click" , ()=>{
	
    localStorage.setItem('searchValue',searchis.value);
console.log("searchbtnclicked")
    // Get the search query from the input field
	axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products?keyword='+searchis.value)
  .then(response => {
    SearchProductList = response.data.data;
    
    displaySearchProduct();
    // axios.get('https://buy-it-sigma.herokuapp.com/api/v1/wishlist', {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //   })
    //   .then(response => {
    //     for (let i = 0; i  <response.data.data.length; i++) {
    //     document.getElementById("click-me" + response.data.data[i]._id +"a").click();
        
    //     }
    //     document.getElementById("wishlist-number").textContent=response.data.data.length+"";
    //     console.log('Product added:', response.data.data);
    //   })
    //   .catch(error => {
    //     console.error('Error get product:', error);
    //   });
  })
  .catch(error => {
    console.log(error)
  });
})



let SearchProductList = [];




function displaySearchProduct(){
    let search_product = document.getElementById("search-product-js");
    let search_product_items = ""
    for (let i=0 ; i < SearchProductList.length; i++) {
        var serializedProductId = JSON.stringify(SearchProductList[i]);

        // Encode the serialized product ID to handle special characters
      
        search_product_items += `
        <div class="item">
        <div class="media">
            <div class="thumbnail object-cover">
                <a onclick="sendProductId(${i})" href="#">
                    <img src="${SearchProductList[i].imageCover}" alt="">
                </a>
            </div>
            <div class="hoverable">
                <ul>
                    <li  class="active"><a id="click-me${SearchProductList[i]._id}a" onclick="btn_wishlist_all(this,${i})" id="add-wishlist-btn"><i class="ri-heart-line"></i></a></li>
                    <li><a  onclick="sendProductIdCard(${i})"  ><span class="iconify" data-icon="iconoir:shopping-bag-add"></span></a></li>
                </ul>
            </div>
            <div class="discount circle flexcenter"><span>${SearchProductList[i].price/SearchProductList[i].priceAfterDiscount*100}%</span></div>
        </div>
        <div class="content">
            <div style="width:${SearchProductList[i].ratingAverage/5*80}px" class="rating">
                <div class="stars"></div>
                <span class="mini-text">${SearchProductList[i].ratingAverage}</span>
            </div>
            <h3><a href="#">${SearchProductList[i].description}</a></h3>
            <div class="price">
                <span class="current">$${SearchProductList[i].priceAfterDiscount}</span>
                <span class="normal mini-text">$${SearchProductList[i].price}</span>
            </div>
        </div>
        
    </div>
        `
    
    }

//${5/productList[i].ratingAverage


     search_product.innerHTML=search_product_items;
    
    
    
    
}

document.getElementById("categories-container").innerHTML=`
<div class="dpt-head">
                                    <div class="main-text">All Departments</div>
                                    <div class="mini-text mobile-hide">Total 1059 Products</div>
                                    <a href="#" class="dpt-trigger mobile-hide">
                                        <i class="ri-menu-3-line ri-xl"></i>
                                        <i class="ri-close-line ri-xl"></i>
                                    </a>
                                </div>
                                <div class="dpt-menu">
                                    <ul class="second-links">
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
                                        <li class="has-child electronic">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-bluetooth-connect-line"></i></div>
                                                Electronic
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Cell Phone</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphones</a></li>
                                                <li><a href="#">Home Audio</a></li>
                                                <li><a href="#">Television</a></li>
                                                <li><a href="#">Video Projectors</a></li>
                                                <li><a href="#">Wearable Technology</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Jewelry</a></li>
                                                <li><a href="#">Watches</a></li>
                                                <li><a href="#">Handbags</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </a>
                                        </li>

                                        <li class="has-child homekit">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div class="icon-small"><i class="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <div class="mega">
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Kitchen & Dining</a></h4>
                                                        <ul>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Dining Room</a></li>
                                                            <li><a href="#">Pantry</a></li>
                                                            <li><a href="#">Great Room</a></li>
                                                            <li><a href="#">Breakfast Nook</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Living</a></h4>
                                                        <ul>
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Family Room</a></li>
                                                            <li><a href="#">Sunroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Bed & Bath</a></h4>
                                                        <ul>
                                                            <li><a href="#">Bathroom</a></li>
                                                            <li><a href="#">Powder Room</a></li>
                                                            <li><a href="#">Bedroom</a></li>
                                                            <li><a href="#">Storage & Closet </a></li>
                                                            <li><a href="#">Baby & Kids</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <h4><a href="#">Utility</a></h4>
                                                        <ul>
                                                            <li><a href="#">Laundry</a></li>
                                                            <li><a href="#">Garage</a></li>
                                                            <li><a href="#">Mudroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flexcol">
                                                    <div class="row">
                                                        <h4><a href="#">Outdoor</a></h4>
                                                        <ul>
                                                            <li><a href="#">Landscape</a></li>
                                                            <li><a href="#">Patio</a></li>
                                                            <li><a href="#">Deck</a></li>
                                                            <li><a href="#">Pool</a></li>
                                                            <li><a href="#">Backyard</a></li>
                                                            <li><a href="#">Porch</a></li>
                                                            <li><a href="#">Exterior</a></li>
                                                            <li><a href="#">Outdoor Kitchen</a></li>
                                                            <li><a href="#">Front Yard</a></li>
                                                            <li><a href="#">Driveway</a></li>
                                                            <li><a href="#">Poolhouse</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                        </li>
   
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-android-line"></i></div>
                                                Pet Supplies
                                            </a>
                                        </li>

                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-basketball-line"></i></div>
                                                Sports
                                            </a>
                                        </li>
                                        <li class="has-child fashion">
                                            <a href="#">
                                                <div class="icon-large"><i class="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
`


//show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
  // dptButton.addEventListener("click", function () {
  //   dptClass.classList.toggle("showdpt");
  // });

  copyMenu()

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


//======================cart number=============================================================

axios.get('https://buy-it-sigma.herokuapp.com/api/v1/cart',  {
    headers: {
        Authorization: `Bearer ${token}`
      }
  })
  .then(response => {
    updateCartNumber(response.data.data.cartItems.length,response.data.data.totalCartPrice);  })
  .catch(error => {
    console.error('Error adding product:', error);
  });

//======================cart number=============================================================