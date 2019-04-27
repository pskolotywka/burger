const leftBtn = document.querySelector('.description__scroll-prev');
const rightBtn = document.querySelector('.description__scroll-next');
const item = document.querySelector('.description__list');
const lisha = document.querySelector('.description__item');
var slider = document.querySelector('#slider');

const minRight = 0;
var step = parseInt(getComputedStyle(lisha).width);
let currentRight = 0;
const itemsCount = item.children.length;
var maxRight = step * (itemsCount - 1);


window.onresize = () => {
    step = parseInt(getComputedStyle(lisha).width);
    maxRight = step * 4;
    currentRight = 0;
    item.style.right = `${currentRight}px`;
}

rightBtn.addEventListener('click', e => {
        if (currentRight < maxRight) {
            currentRight += step;
        }
        else {
            currentRight = 0;
        }
        item.style.right = `${currentRight}px`
        console.log(currentRight)
        
})
leftBtn.addEventListener('click', e => {
        if (currentRight > minRight) {
            currentRight -= step;
            
        }
        else {
            currentRight = maxRight;
        }
        item.style.right = `${currentRight}px`
})













/* 


rightBtn.addEventListener('click', e => {
    if(window.innerWidth >= 1076 ){
        if (currentRight <= 3852) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight += step;
            item.style.right = `${currentRight}px`
        }
    }
    if(window.innerWidth <= 769){
        if (currentRight <= maxRightDesc) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight += stepDesc;
            item.style.right = `${currentRight}px`
        }
    }
    if(window.innerWidth <= 768){
        if (currentRight <= maxRightTablets) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight += stepTablets;
            item.style.right = `${currentRight}px`
        }
    }
     
})
leftBtn.addEventListener('click', e => {
    if(window.innerWidth >= 1076 ){
        if (currentRight > minRightDesc) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight -= step;
            item.style.right = `${currentRight}px`
        }
    }
    if(window.innerWidth <= 769) {
        if (currentRight > 0) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight -= stepDesc;
            item.style.right = `${currentRight}px`
        }
    }
    if(window.innerWidth <= 768) {
        if (currentRight > 0) {
            item.style.animation = 'fadeOut .2s'
            setTimeout(function clert() {
                item.style.animation = 'fadeIn .2s'
            },200)
            currentRight -= stepTablets;
            item.style.right = `${currentRight}px`
        }
    }
}) */