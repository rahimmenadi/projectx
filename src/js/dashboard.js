
let productList = [];

// Define the Product class
class Product {
    constructor(name, category, review, link, img, description, quantity, price, oldPrice) {
      this.name = name;
      this.category = category;
      this.review = review;
      this.link = link;
      this.img = img;
      this.description = description;
      this.quantity = quantity;
      this.price = price;
      this.oldPrice = oldPrice;
    }
  }

  axios.get('https://tiny-jade-reindeer-cape.cyclic.app/api/v1/products')
  .then(response => {
    productList = response.data.data;
    
    console.log(productList)

    displayProduct();
  })
  .catch(error => {
    console.log(error)
  });


console.log(productList)

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

//display product

function displayProduct(){
    let table='';
    for (let i=0 ; i < productList.length; i++) {
        table =table + `
        <div class="items">
            <div class="img img1">
                <img
                    src="${productList[i].imageCover}"
                    alt=""
                />
            </div>
            <div class="name">${productList[i].title} kdjsklf</div>
            <div class="info">
            ${productList[i].description}
            </div>
            <div class="price">${productList[i].priceAfterDiscount} USD</div>
            <div class="old-price">${productList[i].price} USD</div>
            <div class="review">
                <div class="review-is">${productList[i].ratingAverage} lkj</div>
                <img class="start-img" src="../star.png" alt="">
                
            </div>
            
        </div>
        `
        
    document.getElementById('product-container-dash').innerHTML = table;
   
    }
    
    
    
    
}
displayProduct();