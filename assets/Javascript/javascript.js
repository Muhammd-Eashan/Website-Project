// ALL CATEGORIES BUTTON

const stickyNav = document.querySelector('.sticky-nav');
const closeSide = document.querySelector('.close-side');
const allCategoriesBtn = document.getElementById('all-categories-btn');

function collapseSidebar() {
    stickyNav.classList.remove('expanded');
    closeSide.classList.remove('visible');
}

allCategoriesBtn.addEventListener('click', function() {
    stickyNav.classList.toggle('expanded');
    closeSide.classList.toggle('visible');
});

closeSide.addEventListener('click', function(event) {
    collapseSidebar();
});

stickyNav.addEventListener('mouseleave', function() {
    collapseSidebar();
});

// SHOPPING CART BUTTON

function collapseShoppingbar(){
    document.querySelector(".shopping-cart").classList.remove("opened")
    closeSide.classList.remove('seen');
}

document.getElementById("shopping-cart-btn").addEventListener("click", function(){
    document.querySelector(".shopping-cart").classList.toggle("opened")
    closeSide.classList.toggle('seen');
});
closeSide.addEventListener('click', function(event) {
    collapseShoppingbar()
});
document.getElementById("close-btn").addEventListener('click', function(event) {
    collapseShoppingbar()
});

// SIGN IN BUTTON

function collapseSignbar(){
    document.querySelector(".sign-in-form").classList.remove("opened")
    closeSide.classList.remove('seen');
}

document.getElementById("sign-in-btn").addEventListener("click", function(){
    document.querySelector(".sign-in-form").classList.toggle("opened")
    closeSide.classList.toggle('seen');
});
closeSide.addEventListener('click', function(event) {
    collapseSignbar()
});
document.getElementById("close-btn-2").addEventListener('click', function(event) {
    collapseSignbar()
});

// SHOW PASSWORD BUTTON
const Input = document.getElementById("input")
const Eye = document.getElementById("eye")
document.getElementById("show-password-btn").addEventListener("click", function(){
    let type = Input.getAttribute("type")
        if (type == "password") {
            Input.setAttribute("type","text")
            Eye.classList.add("slash")
        } else {
            Input.setAttribute("type","password")
            Eye.classList.remove("slash")
        }
});

// COUNTDOWN TIMER

// Set the target date and time
const targetDate = Date.UTC(2025, 0, 1, 0, 0, 0,);

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

