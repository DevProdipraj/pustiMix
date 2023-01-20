let food1 = document.querySelector('.page8C1');
let food2 = document.querySelector('.page8C2');
let food3 = document.querySelector('.page8C3');



let text1 = document.querySelector('.page8text1');
let text2 = document.querySelector('.page8text2');
let text3 = document.querySelector('.text3');
let text4 = document.querySelector('.text4');


food1.addEventListener('click', function(){
    text1.style.opacity = 1;
})

food3.addEventListener('click', function(){
    text2.style.opacity = 1;
    text3.style.opacity = 1;
    text4.style.opacity = 1; 
})

text3.addEventListener('click', function(){
    food2.style.opacity = 1;
})