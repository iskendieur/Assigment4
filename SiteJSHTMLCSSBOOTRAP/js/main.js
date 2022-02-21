const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

const openPopUp= document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp= document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
                           e.preventDefault();
popUp.classList.add('active')})
                           closePopUp.addEventListener('click', () => {
                               popUp.classList.remove('active');
                           })
function playMp() { 
  var audio = new Audio('audio/soundfx.mp3'); 
  audio.play(); 
}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
document.addEventListener("mousedown",(event)=>console.log("mousedown: "+ event.which));
document.addEventListener("mouseup", (event)=> console.log("mouseup: "+ event.which));
document.addEventListener('keypress', (event) => {
  const keyName = event.key;

  alert('keypress event\n\n' + 'key: ' + keyName);
});