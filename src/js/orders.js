
const token = localStorage.getItem("sellertoken")
console.log(token);

let productList = [];
function sendProductId(k){
    localStorage.setItem('orderIdSeller',orderslist[k]._id);
    
    window.location.assign('..//html/deliveyafect.html');
}
//display product
function displayorders(ordering){
    if(ordering=="asc"){
        console.log("shit")
        let table='';
        for (let i=0 ; i < orderslist.length; i++) {
            table = table +`
            <div onclick="sendProductId(${i})" class="items">
                <div class="img img1">
                    <img
                        src="${orderslist[i].cartItems[0].product.imageCover}"
                        alt=""
                    />
                </div>
                <div class="name">${orderslist[i].cartItems[0].product.title}</div>
                <div class="info">
                ${orderslist[i].createdAt} 
                </div>
                <div class="foot-items">
                    <div class="prices">
                        <div class="price">${orderslist[i].totalOrderPrice}.99 USD</div>
                        <div class="price">City: ${orderslist[i].shippingAddress.city}</div>
                        <div class="price">Name: ${orderslist[i].shippingAddress.firstName} ${orderslist[i].shippingAddress.lastName}</div>
                        <div class="price">Phone: ${orderslist[i].shippingAddress.phone}</div>

                        
                       
                    </div>
                   
                </div>
                
            </div>
            `;
        
        document.getElementById('product-container-dash').innerHTML = table;
       
        }
        
        
        
    }else if(ordering=="des"){
        console.log("hi in tow")
        let table='';
        for (let i=0 ; i < orderslist.length; i++) {
            table = `
            <div class="items">
                <div class="img img1">
                    <img
                        src="${orderslist[i].cartItems[0].product.imageCover}"
                        alt=""
                    />
                </div>
                <div class="name">${orderslist[i].title}</div>
                <div class="info">
                ${orderslist[i].description} lkdfsjlfddsafsdfadfasdfasdsdfsd
                </div>
                <div class="foot-items">
                    <div class="prices">
                        <div class="price">${orderslist[i].priceAfterDiscount}.99 USD</div>
                        <div class="old-price">${orderslist[i].totalOrderPrice} USD</div>
                    </div>
                    <div class="review">
                        <div class="review-is">${orderslist[i].ratingAverage}</div>
                        <img class="start-img" src="/star.png" alt="">
                        
                    </div>
                </div>
                
            </div>
            ` + table;
        
        document.getElementById('product-container-dash').innerHTML = table;
       
        }
        
        
        
    }

    
}

//topper



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



  axios.get('https://buy-it-sigma.herokuapp.com/api/v1/orders', {
    headers: {
        Authorization: `Bearer ${token}`
      }})
  .then(response => {
    orderslist = response.data.data;
    
console.log(response.data.data)
    displayorders("asc");
  })
  .catch(error => {
    console.log(error)
  });


// console.log(productList)

{/* <div class="items">
                                <div class="img img1">
                                    <img
                                        src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt=""
                                    />
                                </div>
                                <div class="name">SHOES</div>
                                <div class="info">
                                    Lorem ipsum dolor sit amet consectetur.sdfsdfasd sadf adsf ads fa dsf asd dasfk;k; ;ok;lk;jljlhkjh kjhk hk hk jh kjh kjhk jh
                                </div>
                                <div class="price">48 USD</div>
                                <div class="old-price">55 USD</div>
                                <div class="review">
                                    <div class="review-is">4.8</div>
                                    <img class="start-img" src="star.png" alt="">
                                    
                                </div>
                                
                            </div> */}
