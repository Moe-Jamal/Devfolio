// Type.js 
var typed = new Typed('#skills', {
    strings: ['Designer','Developer','Photographer','Freelancer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    smartBackspace: true,
});

// Change Nav Bg-Color On scroll 
const navBar = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navBar.classList.add('scrollbg');
    } else {
        navBar.classList.remove('scrollbg');
    }
})

// deep menu mobile 
const menuButton = document.querySelector(".deep-drop");
const deepMenu = document.querySelector(".deep-menu");
menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    deepMenu.classList.toggle('show');

})

// portfolio filter
const filterCards = document.querySelector(".card-list")
const mixer = mixitup(filterCards, {
    selectors: {
        target: '.mix'
    },
});

// testimonials slider 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    speed: 500,
    grabCursor: 'true',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
},
});

// scroll to top button 
let span = document.querySelector(".top");

window.addEventListener('scroll',function () {
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
}) 
span.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// status counter 
let nums = document.querySelectorAll('.num');
let workStatus = document.getElementById('status');
let started = false;
let duration = 2000;


window.addEventListener('scroll', function () {
    if(window.scrollY >= workStatus.offsetTop - 300){
        if(!started) {
            nums.forEach((num) => {
                startCount(num)
            });
        } 
        started = true;
    }
} ) 
// function startCount(el) {
//     let goal = el.dataset.goal;
//     let stepTime = duration / goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if( el.textContent == el.dataset.goal) {
//             clearInterval(count);
//         }
//     }, stepTime)
// }
function startCount(el) {
    let goal = parseInt(el.dataset.goal);
    let startTime = 0; // Track start time

    function updateCount(timestamp) {
        if (!startTime) startTime = timestamp; // Set the start time on first frame
        let progress = Math.min((timestamp - startTime) / duration, 1); // Progress between 0 and 1
        let currentValue = Math.floor(progress * goal); // Calculate the current value

        el.textContent = currentValue; // Update the element text

        if (currentValue < goal) {
            requestAnimationFrame(updateCount); // Continue animation
        }
    }

    requestAnimationFrame(updateCount); // Start the animation
}
