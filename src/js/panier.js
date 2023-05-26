

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
                                <div class="desc">${product_item.description}</div>
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

