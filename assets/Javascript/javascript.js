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


// RESPONSIVE DESIGN

// Function to handle screen resize
function handleScreenResize() {
    const subHeaderContent = document.querySelector('.sub-header-content');
    const smallsubHeader = document.querySelector('.small-screen-sub-header-content');
    const smallgeneralHeader = document.querySelector(".small-general-header")
    const generalHeader = document.querySelector(".general-header")
    const element = document.getElementById('custom-container');
    const arrows = document.querySelectorAll('.arrow-scroll');
    
    // Check if the screen width is less than 1024px
    if (window.matchMedia("(max-width: 1024px)").matches) {
        subHeaderContent.style.display = 'none';
        smallsubHeader.style.display = 'block';
        smallgeneralHeader.style.display = "flex"
        generalHeader.style.display = "none"
        stickyNav.style.display = "none"
        element.classList.remove("container")
        arrows.forEach(function(scroll){
            scroll.style.display = "block"
        })

    } else {
        subHeaderContent.style.display = 'flex';
        smallsubHeader.style.display = 'none';
        smallgeneralHeader.style.display = "none"
        generalHeader.style.display = "flex"
        stickyNav.style.display = "block"
        element.classList.add("container")
        arrows.forEach(function(scroll){
            scroll.style.display = "none"
        })
    }
}

// Initial check when the page loads
handleScreenResize();

// Add an event listener to handle resize events
window.addEventListener('resize', handleScreenResize);





// FUNCTIONS OF OPENING AND CLOSING THE MOBILE NAV BAR


function collapseMobileNavbar(){
    document.querySelector(".mobile-nav").classList.remove("mobile-nav-opened")
    closeSide.classList.remove('seen');
}


document.querySelector(".bars").addEventListener("click", function(){
    document.querySelector(".mobile-nav").classList.add("mobile-nav-opened");
    closeSide.classList.toggle('seen');
});

closeSide.addEventListener('click', function(event) {
    collapseMobileNavbar()
});



document.querySelector(".users").addEventListener("click", function(){
document.querySelector(".sign-in-form").classList.toggle("opened")
closeSide.classList.toggle('seen');
});
closeSide.addEventListener('click', function(event) {
collapseSignbar()
});
document.getElementById("close-btn-2").addEventListener('click', function(event) {
collapseSignbar()
});


// FOR THE HEADINGS OF MOBILE NAV 

document.querySelectorAll(".mobile-nav .nav-li").forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      document.querySelectorAll(".mobile-nav .nav-li").forEach(function (nav) {
        nav.classList.remove("active");
      });
  
      // Add 'active' class to the clicked item
      this.classList.add("active");

      if (this.textContent.trim() === 'Categories') {
        // Hide the first categories list
        document.querySelectorAll(".mobile-categories")[0].classList.remove("active-categories");
        // Show the second categories list
        document.querySelectorAll(".mobile-categories")[1].classList.add("active-categories");
    } else if (this.textContent.trim() === 'Menu') {
        // Show the first categories list
        document.querySelectorAll(".mobile-categories")[0].classList.add("active-categories");
        // Hide the second categories list
        document.querySelectorAll(".mobile-categories")[1].classList.remove("active-categories");
    }
    });
});

  
  

// MOBILE NAV CLICK FUNCTIONS


document.querySelector(".mobile-category-1").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-1");
    document.getElementsByClassName("categories-options")[0].style.zIndex = "3";
});
document.querySelector(".mobile-category-2").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-1");
    document.getElementsByClassName("categories-options")[4].style.setProperty('z-index', '3', 'important');
});
document.querySelector(".mobile-category-3").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-1");
});

document.querySelectorAll(".back-to-categories").forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector(".mobile-categories").classList.remove("categories-options-opened-1");
        document.querySelectorAll(".categories-options").forEach(function(options){
            options.style.zIndex = "2"
        })
    });
});

document.querySelector(".mobile-category-1-option-1").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-2");
    document.getElementsByClassName("categories-options")[1].style.zIndex = "3";    
});
document.querySelector(".mobile-category-1-option-2").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-2");
    document.getElementsByClassName("categories-options")[2].style.zIndex = "3";    
});
document.querySelector(".mobile-category-1-option-3").addEventListener("click", function(){
    document.querySelector(".mobile-categories").classList.add("categories-options-opened-2");
    document.getElementsByClassName("categories-options")[3].style.zIndex = "3";    
});

document.querySelectorAll(".back-to-laptop").forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector(".mobile-categories").classList.remove("categories-options-opened-2");
        document.querySelectorAll(".options-options").forEach(function(options){
            options.style.zIndex = "2"
        })
    });
});

// MAKING THE SUBHEADER INTO STICKY SUBHEADER

let lastScrollTop = 0; // To store the last scroll position

window.addEventListener("scroll", function () {
const subHeader = document.querySelector(".sub-header");
const currentScrollTop = window.pageYOffset;
const triggerPoint = 80; // Change this to the desired scroll position in pixels
const subHeaderTop = subHeader.getBoundingClientRect().top + window.scrollY; // Get the top offset of the sub-header from the document top

const scrollHeight = document.documentElement.scrollHeight;
const scrolledToBottom = (window.innerHeight + window.scrollY) >= scrollHeight;


// Check if the user has scrolled down past a certain point
if (currentScrollTop > 680) { // Adjust 100 to the point after which you want to hide the header
  if (currentScrollTop > lastScrollTop && !scrolledToBottom) {
    // User is scrolling down
    subHeader.classList.add('hide');
  } else {
    // User is scrolling up
    subHeader.classList.remove('hide');
  }
}
if (window.scrollY > triggerPoint) {
    subHeader.style.position = "fixed";
    
  } else if (window.scrollY <= subHeaderTop) {
    subHeader.style.position = "relative";
};

lastScrollTop = currentScrollTop; // Update the last scroll position
});


// BUTTONS OF SECOND ROW 

let currentTranslateX = 0; // Initialize in the global scope
let lastMoveWasPartial = false; // Track if the last move was a partial move

document.getElementById("arrow-next").addEventListener("click", function() {
    const container = document.querySelector(".second-row-content-items");
    const containerWidth = container.scrollWidth; // Total width of the content
    const visibleWidth = container.clientWidth; // Width of the visible area
    const items = container.children;
    const itemWidth = items[0].offsetWidth; // Assuming all items are the same width
    const totalItems = items.length;
    
    let itemsToMove;
    if (window.innerWidth >= 768) {
        itemsToMove = 4; // Move 4 items on larger screens
    } else {
        itemsToMove = 2; // Move 2 items on smaller screens
    }

    // Calculate maximum scrollable width
    const maxTranslateX = -(containerWidth - visibleWidth);
    
    // Calculate remaining items
    const remainingItems = Math.ceil((containerWidth + currentTranslateX - visibleWidth) / itemWidth);

    // If the remaining items are fewer than the normal move, only move those remaining items
    if (remainingItems <= itemsToMove) {
        currentTranslateX -= remainingItems * itemWidth; // Move only remaining items
        lastMoveWasPartial = true; // Indicate the last move was a partial move
    } else {
        currentTranslateX -= itemsToMove * itemWidth; // Move normally
        lastMoveWasPartial = false; // Reset since this was a normal move
    }

    // Ensure currentTranslateX does not exceed the maximum value
    currentTranslateX = Math.max(currentTranslateX, maxTranslateX);
    container.style.transform = `translateX(${currentTranslateX}px)`;
});

document.getElementById("arrow-prev").addEventListener("click", function() {
    const container = document.querySelector(".second-row-content-items");
    const items = container.children;
    const itemWidth = items[0].offsetWidth;
    
    let itemsToMove;
    if (window.innerWidth >= 768) {
        itemsToMove = 4; // Move 4 items on larger screens
    } else {
        itemsToMove = 2; // Move 2 items on smaller screens
    }

    // If the last move was partial, move only 1 item
    if (window.innerWidth < 768 && lastMoveWasPartial) {
        currentTranslateX += itemWidth; // Move only 1 item back
        lastMoveWasPartial = false; // Reset since we handled the partial move
    } else {
        currentTranslateX += itemsToMove * itemWidth; // Move normally
    }

    // Ensure currentTranslateX does not go beyond the start
    currentTranslateX = Math.min(currentTranslateX, 0);
    container.style.transform = `translateX(${currentTranslateX}px)`;
});
