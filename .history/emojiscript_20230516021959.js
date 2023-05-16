const emoji = document.getElementById('emoji');
const userinput = document.getElementById('email-input');
const password = document.getElementById('pass-input');
const body = document.querySelector('body');
const windowwidth = window.innerWidth / 2;
const windowheight = window.innerHeight / 2;
let mousepointer = true;

body.addEventListener('mousemove', (m) => {
    if (mousepointer) {
        if (m.clientX < windowwidth && m.clientY < windowheight) {
            emoji.src = './img/idle/2.png';
        } else if (m.clientX < windowwidth && m.clientY > windowheight) {
            emoji.src = "./img/idle/3.png";
        } else if (m.clientX > windowwidth && m.clientY < windowheight) {
            emoji.src = "./img/idle/5.png";
        } else {
            emoji.src = "./img/idle/4.png";
        }
    }
})

userinput.addEventListener('focus',()=>{
    mousepointer = false;
})

userinput.addEventListener('blur',()=>{
    mousepointer = true;
})

userinput.addEventListener('keyup',()=>{
    let usuario = userinput.value.length;
    if(usuario >= 0 && usuario<=5){
        emoji.src = './img/read/1.png';
    }else if(usuario >= 6 && usuario<=14){
        emoji.src = './img/read/2.png';
    }else if(usuario >= 15 && usuario<=20){
        emoji.src = './img/read/3.png';
    }else{
        emoji.src = './img/read/5.png';
    }
})

password.addEventListener('focus',()=>{
    mousepointer = false;
    let cont = 1;
    const cubrirOjo = setInterval(() => {
        emoji.src = './img/cover/'+cont+'.png';
        if(cont < 8){
            cont++;
        }else{
            clearInterval(cubrirOjo);
        }
    }, 60);
})

password.addEventListener('blur',()=>{
    mousepointer = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        emoji.src = './img/cover/'+cont+'.png';
        if(cont > 1){
            cont--;
        }else{
            clearInterval(descubrirOjo);
        }
    }, 60);
})

