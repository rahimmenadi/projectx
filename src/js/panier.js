



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
document.addEventListener("click", (e) => {
	const isClosest = e.target.closest(divtoShow);
	if (!isClosest && divPopup.classList.contains("show")) {
		divPopup.classList.remove("show");
	}
});

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
    let cartItemsis = panier_item.cartItems;
    console.log(cartItemsis)
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
        panier_items += `
        <div class="product">
                            <div class="product-image">
                                <img src="${product_item.imageCover}" alt="">
                            </div>
                            <div class="product-info">
                                <div class="prix">${product_item.price} USD</div>
                                <div class="product-name">${product_item.title}</div>
                                <p class="desc">${product_item.description}</p>
                                <div class="seller">ROZANA</div>
                                <div class="rule">
                                    <div class="icon">hh</div>
                                    <div class="content">This item cannot be exchange or returned</div>
                                </div>
                                <div class="buttons">
                                    <div class="change-qts">
                                        <div class="text">${product_item.quantity}</div>
                                        <div class="wrapper">
                                            <button class="minus">-</button>
                                            <div class="num">1</div>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <div class="centered">
                                    <button id="wishlist">
                                        <img src="/images/contract-icon.svg" alt="">
                                    </button>
                                
                                    <button id="remove"><img src="/images/megaphone-icon.svg" alt=""></button>
                                    
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

