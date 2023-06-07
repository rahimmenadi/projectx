
const token = localStorage.getItem("sellertoken");

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
const searchvalue = localStorage.getItem("searchValue");

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
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products?keyword='+searchvalue)
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


//=============================FILTER==================================================

function toggleFilterOptions() {
  var filterOptions = document.getElementById('filter-options');
  if (filterOptions.style.display === 'none') {
    filterOptions.style.display = 'block';
  } else {
    filterOptions.style.display = 'none';
  }
}


const rangeqin = document.querySelectorAll(".rangeq-input input"),
quantityInput = document.querySelectorAll(".priceq-input input"),
rangeq = document.querySelector(".slider .progressq");
let quantityGap = 0;

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 0;

let minVal=0 , maxVal=parseInt(rangeInput[1].value) , minqVal=0 , maxqVal=parseInt(rangeqin[1].value);



quantityInput.forEach(input =>{
input.addEventListener("input", e =>{
    let minQuanti = parseInt(quantityInput[0].value),
    maxQuanty = parseInt(quantityInput[1].value);
    
    if((maxQuanty - minQuanti >= quantityGap) && maxQuanty <= rangeqin[1].max){
        if(e.target.className === "inputq-in"){
            rangeqin[0].value = minQuanti;
            rangeq.style.left = ((minQuanti / rangeqin[0].max) * 100) + "%";
        }else{
            rangeqin[1].value = maxQuanty;
            rangeq.style.right = 100 - (maxQuanty / rangeqin[1].max) * 100 + "%";
        }
    }
});
});

rangeqin.forEach(input =>{
input.addEventListener("input", e =>{
    minqVal = parseInt(rangeqin[0].value),
    maxqVal = parseInt(rangeqin[1].value);

    if((maxqVal - minqVal) < quantityGap){
        if(e.target.className === "rangeq-min"){
            rangeqin[0].value = maxqVal - quantityGap
        }else{
            rangeqin[1].value = minqVal + quantityGap;
        }
    }else{
        quantityInput[0].value = minqVal;
        quantityInput[1].value = maxqVal;
        rangeq.style.left = ((minqVal / rangeqin[0].max) * 100) + "%";
        rangeq.style.right = 100 - (maxqVal / rangeqin[1].max) * 100 + "%";
    }

});
});




priceInput.forEach(input =>{
input.addEventListener("input", e =>{
    let minPrice = parseInt(priceInput[0].value),
    maxPrice = parseInt(priceInput[1].value);
    
    if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
        if(e.target.className === "input-min"){
            rangeInput[0].value = minPrice;
            range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
        }else{
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
    }
   // console.log(maxPrice + "min" + minPrice)
});
});

rangeInput.forEach(input =>{
input.addEventListener("input", e =>{
    minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

    if((maxVal - minVal) < priceGap){
        if(e.target.className === "range-min"){
            rangeInput[0].value = maxVal - priceGap
        }else{
            rangeInput[1].value = minVal + priceGap;
        }
    }else{
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
});
});



const apply_filter_btn = document.getElementById("apply-filter-btn");
apply_filter_btn.addEventListener("click" , ()=>{
var form_filter = document.getElementById("filter-form");
var checkboxes = form_filter.elements["filter-choice"];
var selectedValues = [];

for (var i = 0; i < checkboxes.length; i++) {
if (checkboxes[i].checked) {
  selectedValues.push(checkboxes[i].value);
}
}








let the_filter_link="";

if (selectedValues.includes("price-filter-choice")) {
let the_min_price = minVal;
let the_max_price = maxVal;
the_filter_link+="&price[gt]=" + minVal + "&price[lt]=" + maxVal;
}
if (selectedValues.includes("quantity-filter-choice")) {
let the_min_quantity = minqVal;
let the_max_quantity = maxqVal;
if(the_filter_link.length==1){
    the_filter_link+="&quantity[gt]=" + minqVal + "&quantity[lt]=" + maxqVal;

}else{
    the_filter_link+="&quantity[gt]=" + minqVal + "&quantity[lt]=" + maxqVal;

}

}
if (selectedValues.includes("review-filter-choice")) {
let value_review=0;
const selectedqOption = document.querySelector('input[name="selected-review"]:checked');
let = selectedqValue="one-star"
if(selectedqOption){
selectedqValue = selectedqOption.value;

}

if(selectedqValue == "five-star"){
    value_review=5;
}
if(selectedqValue == "four-star"){
    value_review=4;    }
if(selectedqValue == "three-star"){
    value_review=3;    }
if(selectedqValue == "two-star"){
    value_review=2;    }
if(selectedqValue == "one-star"){
    value_review=1;    }


    if(the_filter_link.length==1){
        the_filter_link+="$ratingAverage[gte]=" + value_review;

    }else{
        the_filter_link+="&ratingAverage[gte]=" + value_review;

    }
}

console.log(the_filter_link)
axios.get('https://buy-it-sigma.herokuapp.com/api/v1/products?keyword='+searchisis.value+the_filter_link)
.then(response => {
  SearchProductList = response.data.data;
  console.log('https://buy-it-sigma.herokuapp.com/api/v1/products?keyword='+searchisis.value+the_filter_link)
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





//=============================FILTER==================================================