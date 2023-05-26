

let panierall= document.getElementById("panier-all");
let panier_items = "";
const token = localStorage.getItem("token");
  axios.get('https://buy-it-sigma.herokuapp.com/api/v1/cart', {
    headers: {
        Authorization: `Bearer ${token}`
      }
  })
  .then(response => {
    let panier_item = response.data.data;
    for (let i = 0; i  <panier_item.length; i++) {
    axios.get(`https://buy-it-sigma.herokuapp.com/api/v1/products/${panier_item[i].cardItems.product}`
    , {
    headers: {
        Authorization: `Bearer ${token}`
      }
  })
  .then(response => {
    let product_item = response.data.data;
    panier_items += `
    <div class="product">
                        <div class="product-image">
                            <img src="${panier_item.imageCover}" alt="">
                        </div>
                        <div class="product-info">
                            <div class="prix">${panier_item.price} USD</div>
                            <div class="product-name">${panier_item.title}</div>
                            <div class="desc">${panier_item.description}</div>
                            <div class="seller">ROZANA</div>
                            <div class="rule">
                                <div class="icon">hh</div>
                                <div class="content">This item cannot be exchange or returned</div>
                            </div>
                            <div class="buttons">
                                <div class="change-qts">
                                    <div class="text">${panier_item.quantity}</div>
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
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });

    
    
        
    
    }
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });
