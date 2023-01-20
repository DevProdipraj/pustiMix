// this is click icon 
const clickItem1 = document.querySelector('.page12icon1');
const clickItem2 = document.querySelector('.page12icon2');
const clickItem3 = document.querySelector('.page12icon3');


// this is  show main content 
const showitem1 = document.querySelector('.p12item1')
const showitem2 = document.querySelector('.p12item2')
const showitem3 = document.querySelector('.p12item3')

// this is  show down arrow 
const showitem4 = document.querySelector('.p12item4')
const showitem5 = document.querySelector('.p12item5')


// this for main right arrow 
const showitem6 = document.querySelector('.main-right-arrow')

// this is for main content img 
const showitem7 = document.querySelector('.page12showitem')

clickItem1.addEventListener('click', function(){
    showitem1.classList.toggle("add1");
    showitem4.classList.toggle("add2");
 });


 clickItem2.addEventListener('click', function(){
    showitem2.classList.toggle("add1");
    showitem5.classList.toggle("add2");
 });

 clickItem3.addEventListener('click', function(){
    showitem3.classList.toggle("add1");
    showitem6.style.opacity = 1;
 });

 showitem6.addEventListener('click', function(){
    showitem7.classList.toggle("add2");
 });