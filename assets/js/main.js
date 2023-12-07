let next = document.getElementById('next');

let refresh = setInterval(() =>{next.click()},10000)

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    clearInterval(refresh);
    refresh = setInterval(() =>{next.click()},10000)
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    clearInterval(refresh);
    refresh = setInterval(() =>{next.click()},10000)
}


const signinBtns = document.querySelectorAll('.js-sign-in')
const signinPopUp = document.querySelector('.sign-in-popup')
const closeBtn = document.querySelector('.js-root-close')
const noneClose = document.querySelector('.js-root-container')
const signupBtns = document.querySelectorAll('.js-sign-up')
const textSign = document.querySelector('.text-sign')
const signBtn = document.querySelector('.sign-submit-btn')
const passlost = document.querySelector('.passlost')
const signContent = document.querySelector('.js-sign-content')


function showUp() {
    signinPopUp.classList.add('open')
    textSign.innerHTML = "Bạn đã có tài khoản?"
    signBtn.innerHTML = "Đăng nhập"
    passlost.classList.add('remove')
    signContent.innerHTML = "Chào mừng đến với FFOOD"
 }

 function showIn() {
    signinPopUp.classList.add('open')
    textSign.innerHTML = "Bạn chưa có tài khoản?"
    signBtn.innerHTML = "Đăng kí"
    passlost.classList.remove('remove')
    signContent.innerHTML = "Đăng nhập vào FFOOD"
 }

 function ifsign() {
    if (signBtn.innerHTML == "Đăng kí") {
        showUp()
    }
    else {
        showIn()
    }
 }

signBtn.addEventListener('click',ifsign)

function hidePopup() {
   signinPopUp.classList.remove('open')
}

for (const signupBtn of signupBtns) {
    signupBtn.addEventListener('click', showUp)
}

for (const signinBtn of signinBtns) {
    signinBtn.addEventListener('click', showIn)
}

signinPopUp.addEventListener('click', hidePopup)
closeBtn.addEventListener('click', hidePopup)
noneClose.addEventListener('click', function(event) {
    event.stopPropagation()
})



