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
