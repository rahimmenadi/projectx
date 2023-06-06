
const token = sessionStorage.getItem("token")
console.log(token);

let productList = [];
function sendProductId(k){
    localStorage.setItem('productIdSeller',productList[k]._id);
    
    window.location.assign('../html/product.html');
}
//display product
function displayProduct(ordering){
    if(ordering=="asc"){
        console.log("shit")
        let table='';
        for (let i=0 ; i < productList.length; i++) {
            table = table +`
            <div onclick="sendProductId(${i})" class="items">
                <div class="img img1">
                    <img
                        src="${productList[i].imageCover}"
                        alt=""
                    />
                </div>
                <div class="name">${productList[i].title}</div>
                <div class="info">
                ${productList[i].description} lkdfsjlfddsafsdfadfasdfasdsdfsd
                </div>
                <div class="foot-items">
                    <div class="prices">
                        <div class="price">${productList[i].priceAfterDiscount}.99 USD</div>
                        <div class="old-price">${productList[i].price} USD</div>
                    </div>
                    <div class="review">
                        <div class="review-is">${productList[i].ratingAverage}</div>
                        <img class="start-img" src="/star.png" alt="">
                        
                    </div>
                </div>
                
            </div>
            `;
        
        document.getElementById('product-container-dash').innerHTML = table;
       
        }
        
        
        
    }else if(ordering=="des"){
        console.log("hi in tow")
        let table='';
        for (let i=0 ; i < productList.length; i++) {
            table = `
            <div class="items">
                <div class="img img1">
                    <img
                        src="${productList[i].imageCover}"
                        alt=""
                    />
                </div>
                <div class="name">${productList[i].title}</div>
                <div class="info">
                ${productList[i].description} lkdfsjlfddsafsdfadfasdfasdsdfsd
                </div>
                <div class="foot-items">
                    <div class="prices">
                        <div class="price">${productList[i].priceAfterDiscount}.99 USD</div>
                        <div class="old-price">${productList[i].price} USD</div>
                    </div>
                    <div class="review">
                        <div class="review-is">${productList[i].ratingAverage}</div>
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
    productList = response.data.data;
    
console.log(response.data)
    displayProduct("asc");
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
