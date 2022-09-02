let btn =document.getElementById("btn")
let mobile = document.getElementsByClassName('mobile')
let nav =document.querySelector('.div4')

btn.addEventListener('click' ,function () {
    if (nav.classList.contains('appear')){
        nav.classList.remove("appear")
        nav.classList.add('div4')


    }
    else{
        nav.classList.add("appear")
        nav.classList.remove('div4')
    }
    
})