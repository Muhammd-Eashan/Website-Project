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


// ADDING THE HEIGHT OF THE BOX OF THE THIRD ROW ITEMS
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.third-row-items');

    boxes.forEach(box => {
        // Select the box-dots, box-hover, and box-detail specific to this box
        const boxDots = box.querySelector(".box-dots");
        const boxHover = box.querySelector(".box-hover");
        const boxDetail = box.querySelector(".box-detail");

        // Check if boxDots exists before adding the event listener
        if (boxDots) {
            boxDots.addEventListener("click", function() {
                
                boxDots.style.display = "none"; // Hide the box-dots for this box
                boxHover.style.height = "700px"; // Change height of the box-hover
                boxDetail.style.height = "340px"; // Change height of the box-detail
                boxDetail.style.setProperty("overflow-y", "auto", "important"); // Enable scrolling
                
            });
        }
    });
});



// CHANGING IMAGES ON HOVER

document.addEventListener('DOMContentLoaded', function() {
    // Select all boxes
    const boxes = document.querySelectorAll('.third-row-items');

    boxes.forEach(box => {
        const image = box.querySelector(".img"); // Select the image element for this specific box
        const imgContainers = box.querySelectorAll(".img-container"); // Select all image containers for this specific box
        const blocks = box.querySelectorAll(".single-block"); // Select all blocks for this specific box
        const defaultImgSrc = image.src; // Store the initial (default) image source for this box
        const btnRight = box.querySelector('.btn-right');
        const btnLeft = box.querySelector('.btn-left');
        let currentImageIndex = 0;
        const totalImages = imgContainers.length;

               
        // Loop through each img-container in the current box
        imgContainers.forEach((container, index) => {
            container.addEventListener("mouseover", function() {
                const imgSrc = this.getAttribute("data-img-src");
                image.src = imgSrc; // Change the image source based on the hovered container

                // Change opacity for the block at the same index
                blocks.forEach((block, blockIndex) => {
                    if(blockIndex === index){
                        block.style.opacity = "0.6"
                    }else{
                        block.style.opacity = "0.2"
                    }
                });
            });

            // Add event listener for when mouse leaves the img-container
            container.addEventListener("mouseleave", function() {
                image.src = defaultImgSrc; // Reset the image back to the default
                blocks.forEach((block, blockIndex) => {
                    if(blockIndex === 0){
                        block.style.opacity = "0.6"
                    }else{
                        block.style.opacity = "0.2"
                    }
                });
            });
        });


        // CHANGING THE IMAGES ON THE CLICK OF ARROW BTN
        const updateImage = (index) => {
            const imgSrc = imgContainers[index].getAttribute('data-img-src');
            image.src = imgSrc;
        };

        // Add click event to the right button
        btnRight.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (jumping to the top of the page)

            // Increment the image index
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            updateImage(currentImageIndex);
        });

        // Add click event to the left button
        btnLeft.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (jumping to the top of the page)

            // Decrement the image index
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
            updateImage(currentImageIndex);
        });

        // Initialize the first image
        updateImage(currentImageIndex);

    });



    document.querySelector(".space-gray").addEventListener("click", function() {
        document.querySelector(".img").src = "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-space-gray-1.jpg";
        
        boxes[0].querySelector(".main-img-container").style.display = "none"

        document.getElementById("left-right-bts").classList.add("left-right-btns")

        boxes[0].querySelectorAll(".single-block").forEach(function(block) {
            block.style.display = "none"; 
        });
    });

    document.querySelector(".silver").addEventListener("click", function() {
        document.querySelector(".img").src = "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg";
        

        if (window.innerWidth <= 1024) {
            document.getElementById("left-right-bts").classList.remove("left-right-btns")
        }else{
            document.getElementById("left-right-bts").classList.add("left-right-btns")
            boxes[0].querySelector(".main-img-container").style.display = "flex"
        }

        boxes[0].querySelectorAll(".single-block").forEach(function(block) {
            block.style.display = "flex"; 
        });
    });
});





// ADD TO CART FUNCTION

const wholeShoppingCart = document.querySelector('.shopping-cart');

const cartContainer = document.querySelector('.rest-of-shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];

basket = basket.filter(item => item !== null);

function add_to_cart(id) {
    
    const product = products.find(item => Number(item.id) === Number(id));
    
    const basketIndex = basket.findIndex(item => Number(item.id) === Number(id));
    
    if (basketIndex < 0) {
        
        basket.push({
            id: product.id,
            name: product.name,
            sku: product.sku,
            img: product.img,
            price: product.discountedprice,
            quantity: 1
        });
    } else {
        basket[basketIndex].quantity += 1;
    }
    
    wholeShoppingCart.classList.toggle("opened")
    
    closeSide.classList.toggle('seen');

    addToMemory();
    
    event.preventDefault(); // Prevent the default action (jumping to the top of the page)
    
    generateCartItems();
    
    calculate();
}

function calculate() {
    
    let cartIcon = document.getElementById('shopping-cart-icon');
    
    let cartAmount = basket.reduce((total, item) => total + (item ? item.quantity : 0), 0); // Calculate total quantity, avoiding null
    
    cartIcon.innerHTML = cartAmount;
}

function generateCartItems() {
    if (basket.length > 0) {
        
        cartContainer.innerHTML = "";
        
        let shoppingCartContiner = document.createElement('div');
        
        let shoppingCartFooter = document.createElement('div')
        
        shoppingCartFooter.className = "shopping-cart-footer pb-[15px]"
        
        shoppingCartContiner.className = "flex-auto relative";
        
        let ShoppingCartUl = document.createElement('ul');

        ShoppingCartUl.className = "absolute max-h-[100%] max-w-[100%] overflow-y-auto overflow-x-hidden shopping-ul p-[0] m-[0]"
        
        basket.forEach(item => {
            
            let cartItem = document.createElement('li');
            
            cartItem.className = "flex p-[15px] relative w-[340px] border-b border-[rgba(0,0,0,0.125)] group";
            
            cartItem.setAttribute('data-id', item.id);

            if (item.id === 1) {

                cartItem.innerHTML = `            
                <a href= "#" class="absolute inset-0"></a>
                <a href= "#" class="absolute w-[20px] h-[20px] text-[#333] text-center leading-[20px] top-[13px] right-[10px] mb-[8px] hover:text-[#333]" onclick="event.preventDefault()"><i class="fa-solid fa-xmark"></i></a>
                <a href= "#" class="mb-[8px] mr-[15px]">
                    <img src=${item.img} class="w-[65px]">
                </a>
                <div class="cart-info pr-[20px] flex-auto text-start">
                    <div class="text-[15px] text-[rgba(16,16,16,0.9)] mb-[8px] font-bold group-hover:text-[#777] transition duration-300">${item.name}</div>
                    <div class="text-[13.5px] mb-[8px]">
                        <span class="font-bold">SKU:</span>
                        <span class="text-[#777]">${item.sku}</span>
                    </div>
                    <div>this item is apple macbook </div>
                    <div class="inline-flex text-[#777] mb-[8px] relative z-[1]">
                        <input type="button" value="-" class="minus h-[32px] w-[25px] px-[5px] border rounded-bl-[5px] rounded-tl-[5px] hover:bg-[rgb(28,97,231)] hover:text-white transition duration-300">
                        <span class="h-[32px] w-[30px] border text-center leading-[32px] text-[14px]">${item.quantity}</span>
                        <input type="button" value="+" class="plus h-[32px] w-[25px] px-[5px] border rounded-br-[5px] rounded-tr-[5px] hover:bg-[rgb(28,97,231)] hover:text-white transition duration-300">
                    </div>
                    <div class="text-[13.5px] text-[#777]">
                        <span class="inline-block w-[22px]">${item.quantity} ×</span>
                        <span class="text-[rgb(28,97,231)]">$${item.price}.00</span>
                    </div>    
                </div>
            `;
                
            } else {
                
                cartItem.innerHTML = `            
                    <a href= "#" class="absolute inset-0"></a>
                    <a href= "#" class="absolute w-[20px] h-[20px] text-[#333] text-center leading-[20px] top-[13px] right-[10px] mb-[8px] hover:text-[#333]" onclick="event.preventDefault()"><i class="fa-solid fa-xmark"></i></a>
                    <a href= "#" class="mb-[8px] mr-[15px]">
                        <img src=${item.img} class="w-[65px]">
                    </a>
                    <div class="cart-info pr-[20px] flex-auto text-start">
                        <div class="text-[15px] text-[rgba(16,16,16,0.9)] mb-[8px] font-bold group-hover:text-[#777] transition duration-300">${item.name}</div>
                        <div class="text-[13.5px] mb-[8px]">
                            <span class="font-bold">SKU:</span>
                            <span class="text-[#777]">${item.sku}</span>
                        </div>
                        <div class="inline-flex text-[#777] mb-[8px] relative z-[1]">
                            <input type="button" value="-" class="minus h-[32px] w-[25px] px-[5px] border rounded-bl-[5px] rounded-tl-[5px] hover:bg-[rgb(28,97,231)] hover:text-white transition duration-300">
                            <span class="h-[32px] w-[30px] border text-center leading-[32px] text-[14px]">${item.quantity}</span>
                            <input type="button" value="+" class="plus h-[32px] w-[25px] px-[5px] border rounded-br-[5px] rounded-tr-[5px] hover:bg-[rgb(28,97,231)] hover:text-white transition duration-300">
                        </div>
                        <div class="text-[13.5px] text-[#777]">
                            <span class="inline-block w-[22px]">${item.quantity} ×</span>
                            <span class="text-[rgb(28,97,231)]">$${item.price}.00</span>
                        </div>    
                    </div>
                `;
            }
            ShoppingCartUl.appendChild(cartItem);
        });
        let totalPrice = basket.reduce((total, item) => total + (item.quantity * item.price), 0);

       let netTotalPrice = document.querySelector(".total-price").innerHTML ="$" + totalPrice.toLocaleString() +".00";
        
        shoppingCartContiner.appendChild(ShoppingCartUl);
        
        cartContainer.appendChild(shoppingCartContiner);
        
        cartContainer.appendChild(shoppingCartFooter);
        
        shoppingCartFooter.innerHTML = `
            <p class="p-[15px] flex justify-between text-[19.5px]">
                <strong class="text-[#242424]">Subtotal:</strong>
                <span class="text-[#1C61E7] relative bottom-[2px]">${netTotalPrice}</span>
            </p>
            <div class="p-[15px]">
                <div class="progress-msg text-left text-[15px] text-[#777777] font-bold"> Add <span class="text-[#1C61E7] amount-left"></span> to cart and get free shipping!</div>
                <div class="w-100">
                    <div class="progress-bar w-[91%] h-[7px] rounded-[10px] bg-[rgb(28,97,231)] mt-[10px]" style="background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent); background-size: 15px 15px;"></div>
                </div>
            </div>    
            <div class="px-[15px]">
                <a class="w-100 h-[42px] text-[13px] inline-flex items-center justify-center text-[rgb(28,97,231)] font-bold bg-white rounded-[5px] mb-[10px] px-[20px] py-[5px] cursor-pointer">View Cart</a>
                <a class="w-100 h-[42px] text-[13px] inline-flex items-center justify-center text-white font-bold bg-[rgb(28,97,231)] rounded-[5px] px-[20px] py-[5px] cursor-pointer">Checkout</a>
            </div>
        `
        updateProgress(totalPrice);

    } else{
        cartContainer.innerHTML = `
        <div class="empty-cart mt-[20px] px-[15px] py-[10px]">
            <i class="fa-solid fa-cart-arrow-down mb-[20px] block text-[86px] text-[rgb(0,0,0,0.07)]"></i>
            <p class="mb-[20px] block text-[rgb(16,16,16,.9)] font-bold">No products in the cart.</p>
            <a href="#" class="return-shop btn btn-primary" onclick="returnToShop()">Return To Shop</a>
        </div>
        `
        document.querySelector(".total-price").innerHTML ="$0.00"
    }
}


cartContainer.addEventListener('click', (event) => {
    let positionClick = event.target;

    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let cartItem = positionClick.closest('li');
        
        let product_id = cartItem.dataset.id;
        
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        
        changeQuantity(product_id, type);
    }
});

const changeQuantity = (product_id, type) => {
    let positionItemInCart = basket.findIndex(value => value.id == product_id);
    
    if (positionItemInCart >= 0) {
        if (type === 'plus') {
            basket[positionItemInCart].quantity += 1;
        
        } else {
            if (basket[positionItemInCart].quantity > 1) {
                
                basket[positionItemInCart].quantity -= 1;
            
            } else {
                basket.splice(positionItemInCart, 1);
            }
        }
        addToMemory();
        
        generateCartItems();
        
        calculate();    
    }
};


document.querySelector('.rest-of-shopping-cart').addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-xmark')) {
        const cartItem = event.target.closest('li');
        
        const product_id = parseInt(cartItem.dataset.id);  
        
        cancelItem(product_id);
    }
});

function cancelItem(product_id) {
    const itemIndex = basket.findIndex(item => item.id === product_id);  
    
    basket.splice(itemIndex, 1);  
    
    addToMemory();  
    
    generateCartItems();  
    
    calculate(); 
}


function addToMemory() {
    localStorage.setItem('data', JSON.stringify(basket)); 
}

let goalAmount = 3500;

function updateProgress(totalPrice) {

    let remainingAmount = Math.max(0, goalAmount - totalPrice);

    let progressPercentage = Math.min((totalPrice / goalAmount * 100),100);

    document.querySelector('.amount-left').innerHTML= "$" + remainingAmount.toLocaleString();

    document.querySelector('.progress-bar').style.width = progressPercentage + '%';

    if (totalPrice >= goalAmount) {
        document.querySelector('.progress-msg').innerHTML ="Your order qualifies for free shipping!"
    }
}


function returnToShop(){
    wholeShoppingCart.classList.toggle("opened")
    
    closeSide.classList.toggle('seen');

    event.preventDefault();

};


generateCartItems();
calculate();



// SELECT OPTIONS FUCTIONS

document.querySelector('.select-options-btn').addEventListener('click', function(){
    
    event.preventDefault();
    
    document.querySelector('.macbook-options').style.transform = 'none';
});

document.querySelector('.close-macbook-options').addEventListener('click', function(){
    
    document.querySelector('.macbook-options').style.transform = 'translateY(103%)';

});


function handleActiveButtons(buttonClass) {
    document.querySelectorAll(buttonClass).forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll(buttonClass).forEach(b => b.classList.remove('btn-border-active'));
            btn.classList.add('btn-border-active');
        });
    });
}


// Apply active border functionality to all button types
handleActiveButtons('.silver-btns');
handleActiveButtons('.macbook-processor');
handleActiveButtons('.macbook-ram');
handleActiveButtons('.macbook-storage');


let isFirstSelection = true; 
let selectedCategory = '';   
let selectedProcessorIndex = null; 
let selectedRamIndex = null;
let selectedStorageIndex = null;   
let hasProcessorSelected = false; // Track if a processor is selected
let hasRamSelected = false;        // Track if RAM is selected
let hasStorageSelected = false;    // Track if storage is selected


// Event listeners for Processor, RAM, and Storage buttons
document.querySelectorAll('.macbook-processor').forEach((processor, index) => {
    processor.addEventListener('click', () => updateVisibility('processor', index));
});

document.querySelectorAll('.macbook-ram').forEach((ram, index) => {
    ram.addEventListener('click', () => updateVisibility('ram', index));
});

document.querySelectorAll('.macbook-storage').forEach((storage, index) => {
    storage.addEventListener('click', () => updateVisibility('storage', index));
});



function processorFunction(processors) {
    hasProcessorSelected = true;
    document.querySelectorAll('.macbook-processor').forEach((processor, idx) => {
        processor.classList.toggle('btn-remove', !processors.includes(idx));
        processor.classList.toggle('btn-border-remove', !processors.includes(idx));
    });
}

function ramFunction(rams) {
    hasRamSelected = true;
    document.querySelectorAll('.macbook-ram').forEach((ram, idx) => {
        ram.classList.toggle('btn-remove', !rams.includes(idx));
        ram.classList.toggle('btn-border-remove', !rams.includes(idx));
    });
}

function storageFunction(storages) {
    hasStorageSelected = true;
    document.querySelectorAll('.macbook-storage').forEach((storage, idx) => {
        storage.classList.toggle('btn-remove', !storages.includes(idx));
        storage.classList.toggle('btn-border-remove', !storages.includes(idx));
    });
}


function wholeProcessorRamStorageFunction(processors, rams, storages) {
    processorFunction(processors);
    ramFunction(rams);
    storageFunction(storages);
}

function updateVisibility(type, index) {

    const visibilityMap = {
        'processor': [
            [[0], [0], [0]],      
            [[1], [0], [1]],      
            [[2], [1], [2]]       
        ],
        'ram': [
            // RAM 0 specific case
            [[0, 1], [0], [0, 1]],  // Click on RAM 0 (first selection shows everything)

            // RAM 1 specific case
            [[2], [1], [2]],       

            // RAM 0 after Processor 1 or Storage 1
            [[1], [0], [1]],        // Click on RAM 0 after Processor 1 or Storage 1

            // RAM 0 after Processor 0 or Storage 0
            [[0], [0], [0]]      // Click on RAM 0 after Processor 0 or Storage 0
        ],
        'storage': [
            [[0], [0], [0]],        
            [[1], [0], [1]],        
            [[2], [1], [2]]         
        ]
    };

    
    if (isFirstSelection && (selectedCategory === '' || selectedCategory === type)) {
        selectedCategory = type;  // Mark this category as the first selection

        // For the first click in Processor, RAM, or Storage, show all buttons in that category
        document.querySelectorAll(`.macbook-${type}`).forEach(btn => {
            btn.classList.remove('btn-remove', 'btn-border-remove'); // Show all buttons in this category
        });

        const [processors, rams, storages] = visibilityMap[type][index];

        // Update visibility for other categories based on the first selection
        if (type === 'processor') {
            selectedProcessorIndex = index; 

            ramFunction(rams);

            storageFunction(storages);
         } else if (type === 'ram') {

            processorFunction(processors);

            storageFunction(storages);
        } else if (type === 'storage') {
            selectedStorageIndex = index; 
            
            processorFunction(processors);

            ramFunction(rams);
        }
        
        return; // Allow the user to make further clicks in the first category
    }

    // Special handling for RAM clicks based on prior selection in Processor or Storage
    if (type === 'ram') {
        let ramVisibility;
        
        // If the first selection was made in Processor or Storage, adjust RAM visibility based on that
        if (selectedProcessorIndex === 0 || selectedStorageIndex === 0) {
            ramVisibility = visibilityMap['ram'][3]; // Show this: [[0], [0], [0]]
        } else if (selectedProcessorIndex === 1 || selectedStorageIndex === 1) {
            ramVisibility = visibilityMap['ram'][2]; // Show this: [[1], [0], [1]]
        } else if (selectedProcessorIndex === 2 || selectedStorageIndex === 2) {
            ramVisibility = visibilityMap['ram'][1]; // Show this: [[2], [1], [2]] for RAM 1
        } else {
            ramVisibility = visibilityMap['ram'][0]; // Default: [[0, 1], [0], [0, 1]]
        }

        const [processors, rams, storages] = ramVisibility;

        wholeProcessorRamStorageFunction(processors, rams, storages);

        isFirstSelection = false; // Mark the first selection as done
        return;
    }

    // Regular visibility logic for Processor or Storage after the first selection
    const [processors, rams, storages] = visibilityMap[type][index];

    wholeProcessorRamStorageFunction(processors, rams, storages);

    isFirstSelection = false; // Mark the first selection as done

    if (hasProcessorSelected && hasRamSelected && hasStorageSelected === true) {
        document.querySelector('.clear-button').classList.remove('left-right-btns');
    }
    
}


// Clear Select Options

document.querySelector('.clear-button').addEventListener('click', function(){
    // Reset state variables
    isFirstSelection = true;
    selectedCategory = '';
    selectedProcessorIndex = null;
    selectedStorageIndex = null;

    hasProcessorSelected = false; // Reset processor selection tracking
    hasRamSelected = false;        // Reset RAM selection tracking
    hasStorageSelected = false;    // Reset storage selection tracking

    // Show all buttons in each category
    document.querySelectorAll('.macbook-processor').forEach(processor => {
        processor.classList.remove('btn-remove', 'btn-border-remove', 'btn-border-active');
    });

    document.querySelectorAll('.macbook-ram').forEach(ram => {
        ram.classList.remove('btn-remove', 'btn-border-remove', 'btn-border-active');
    });

    document.querySelectorAll('.macbook-storage').forEach(storage => {
        storage.classList.remove('btn-remove', 'btn-border-remove', 'btn-border-active');
    });

    // Hide the clear button after clearing selections
    document.querySelector('.clear-button').classList.add('left-right-btns');    
});


