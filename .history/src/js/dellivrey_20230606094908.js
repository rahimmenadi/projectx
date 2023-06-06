

var orderid=localStorage.getItem('orderIdSeller')
console.log(orderid)
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
   
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
  
}
const validerbtn=document.getElementById('valider');
validerbtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log("wash")
    axios.get('https://buy-it-sigma.herokuapp.com/api/v1/orders/'+orderid, {
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


  
})