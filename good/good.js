document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-item button');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.parentElement;
            const price = parseFloat(menuItem.getAttribute('data-price'));
            total += price;

           
            totalPriceElement.textContent = `${total.toFixed()}`;
        });
    });
});
function clicktobuyBtn() {
   console.log()
    alert(`Added succesful , Your food is going to be sent to your current location`)
}
//get modal element
var modal = document.getElementById(`simpleModal`);

var modalBtn = document.getElementById(`modalBtn`);
var closeBtn = document.getElementsByClassName(`closeBtn`)[0];
window.addEventListener(`click`, outsideClick);

modalBtn.addEventListener(`click`,openModal);
closeBtn.addEventListener(`click`,closeModal);

function openModal(){
    modal.style.display = `block`
}
function closeModal(){
    modal.style.display = `none`
}
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = `none`
    }
    
}