
const token = localStorage.getItem("token");


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

//show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
	dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
	dptClass.classList.toggle("showdpt");
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