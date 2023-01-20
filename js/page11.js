let foodbati = document.querySelector('#page11foodbol');
let textOne = document.querySelector('.page11img1'); 
let texttwo = document.querySelector('.page11-img2');
let textthree= document.querySelector('.page11img3'); 
let items= document.querySelector('.page11ulList');

foodbati.addEventListener('click', function(){
    textOne.style.opacity = 1;
    texttwo.style.opacity = 1;
    textthree.style.opacity = 1;
    
})



texttwo.addEventListener('click', function(){
    items.style.opacity = 1;
})
