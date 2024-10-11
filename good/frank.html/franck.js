let iconCart = document.querySelector(`.icon-cart`);
let closeBtn = document.querySelector(`.close`)
let body = document.querySelector(`body`);
let productlistHTML = document.querySelector(`.productlist`);

let productlist = [];
iconCart.addEventListener(`click`, () =>{
    body.classList.toggle(`showcart`)
})
closeBtn.addEventListener(`click`, () => {
    body.classList.toggle(`showcart`)
})


const initApp = () => {
    fetch(`product.json`)
    the(response => response.json())
    then
}