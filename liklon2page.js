let order1image = document.querySelector(".order1image");
let logoanimation = document.querySelector(".orderanimation")
let order1page = document.querySelector(".order1page")
let order2page = document.querySelector(".order2page")
let order3page = document.querySelector(".order3page")
let order4page = document.querySelector(".order4page")
let order5page = document.querySelector(".order5page")
let forbuttons = document.querySelector(".forbuttons")

let order2 = document.querySelector(".order2")
let orders = document.querySelector(".orders")

let clickedanimation1 = true;
let clickedanimation2 = true;
let clickedanimation3 = true;
let clickedanimation4 = true;
let clickedanimation5 = true;
let clickedanimation6 = true;
let clickedanimation7 = true;
let clickedanimation8 = true;
let clickedanimation9 = true;
let clickedanimation10 = true;
let clickedanimationp1 = true;
let clickedanimationp2 = true;
let clickedanimationp3 = true;



order1image.addEventListener("click", function(event) {
    if (clickedanimation1) {
        logoanimation.classList.remove("order1image")
        order1image.classList.add("animationl1");
        order2page.style.filter = "blur(500px)"
        order3page.style.filter = "blur(500px)"
        order4page.style.filter = "blur(500px)"
        order5page.style.filter = "blur(500px)"
        forbuttons.style.filter = "blur(500px)"

        order2image.style.pointerEvents = "none"
        order3image.style.pointerEvents = "none"
        order4image.style.pointerEvents = "none"
        order5image.style.pointerEvents = "none"
        button1.style.pointerEvents = "none"
        button2.style.pointerEvents = "none"



        
        order1image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        order1image.style.animation = "notactive1 1s ease";
        order2page.style.filter = "blur(0px)"
        order3page.style.filter = "blur(0px)"
        order4page.style.filter = "blur(0px)"
        order5page.style.filter = "blur(0px)"
        forbuttons.style.filter = "blur(0px)"
        orders.style.transition = "all 1s"

        order2image.style.pointerEvents = "auto"
        order3image.style.pointerEvents = "auto"
        order4image.style.pointerEvents = "auto"
        order5image.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        button2.style.pointerEvents = "auto"


    }
    
    clickedanimation1 = !clickedanimation1;  
});

let order2image = document.querySelector('.order2image')

order2image.addEventListener("click", function(event) {
    if (clickedanimation2) {
        logoanimation.classList.remove("order2image")
        order2image.classList.add("animationl2");
        order1page.style.filter = "blur(500px)"
        order3page.style.filter = "blur(500px)"
        order4page.style.filter = "blur(500px)"
        order5page.style.filter = "blur(500px)"
        forbuttons.style.filter = "blur(500px)"

        order1image.style.pointerEvents = "none"
        order3image.style.pointerEvents = "none"
        order4image.style.pointerEvents = "none"
        order5image.style.pointerEvents = "none"
        button1.style.pointerEvents = "none"
        button2.style.pointerEvents = "none"
        
        order2image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        order2image.style.animation = "notactive2 1s ease";
        order1page.style.filter = "blur(0px)"
        order3page.style.filter = "blur(0px)"
        order4page.style.filter = "blur(0px)"
        order5page.style.filter = "blur(0px)"
        forbuttons.style.filter = "blur(0px)"
        orders.style.transition = "all 1s"

        order1image.style.pointerEvents = "auto"
        order3image.style.pointerEvents = "auto"
        order4image.style.pointerEvents = "auto"
        order5image.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        button2.style.pointerEvents = "auto"
    }
    
    clickedanimation2 = !clickedanimation2;  
});


order2image.style.transform = "Translate(-24px, -10px)"

let order3image = document.querySelector('.order3image')

order3image.addEventListener("click", function(event) {
    if (clickedanimation3) {
        logoanimation.classList.remove("order3image")
        order3image.classList.add("animationl3");
        order1page.style.filter = "blur(500px)"
        order2page.style.filter = "blur(500px)"
        order4page.style.filter = "blur(500px)"
        order5page.style.filter = "blur(500px)"
        forbuttons.style.filter = "blur(500px)"

        order1image.style.pointerEvents = "none"
        order2image.style.pointerEvents = "none"
        order4image.style.pointerEvents = "none"
        order5image.style.pointerEvents = "none"
        button1.style.pointerEvents = "none"
        button2.style.pointerEvents = "none"
        
        order3image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        order3image.style.animation = "notactive3 1s ease";
        order1page.style.filter = "blur(0px)"
        order2page.style.filter = "blur(0px)"
        order4page.style.filter = "blur(0px)"
        order5page.style.filter = "blur(0px)"
        forbuttons.style.filter = "blur(0px)"
        orders.style.transition = "all 1s"

        order1image.style.pointerEvents = "auto"
        order2image.style.pointerEvents = "auto"
        order4image.style.pointerEvents = "auto"
        order5image.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        button2.style.pointerEvents = "auto"

        
    }
    
    clickedanimation3 = !clickedanimation3;  
});

let order4image = document.querySelector('.order4image')

order4image.addEventListener("click", function(event) {
    if (clickedanimation4) {
        logoanimation.classList.remove("order4image")
        order4image.classList.add("animationl4");
        order1page.style.filter = "blur(500px)"
        order2page.style.filter = "blur(500px)"
        order3page.style.filter = "blur(500px)"
        order5page.style.filter = "blur(500px)"
        forbuttons.style.filter = "blur(500px)"

        order1image.style.pointerEvents = "none"
        order2image.style.pointerEvents = "none"
        order3image.style.pointerEvents = "none"
        order5image.style.pointerEvents = "none"
        button1.style.pointerEvents = "none"
        button2.style.pointerEvents = "none"
        
        order4image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        order4image.style.animation = "notactive4 1s ease";
        order1page.style.filter = "blur(0px)"
        order2page.style.filter = "blur(0px)"
        order3page.style.filter = "blur(0px)"
        order5page.style.filter = "blur(0px)"
        forbuttons.style.filter = "blur(0px)"
        orders.style.transition = "all 1s"

        order1image.style.pointerEvents = "auto"
        order2image.style.pointerEvents = "auto"
        order3image.style.pointerEvents = "auto"
        order5image.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        button2.style.pointerEvents = "auto"
    }
    
    clickedanimation4 = !clickedanimation4;  
});


let order5image = document.querySelector('.order5image')

order5image.addEventListener("click", function(event) {
    if (clickedanimation5) {
        logoanimation.classList.remove("order5image")
        order5image.classList.add("animationl5");
        order1page.style.filter = "blur(500px)"
        order2page.style.filter = "blur(500px)"
        order3page.style.filter = "blur(500px)"
        order4page.style.filter = "blur(500px)"
        forbuttons.style.filter = "blur(500px)"

        order1image.style.pointerEvents = "none"
        order2image.style.pointerEvents = "none"
        order3image.style.pointerEvents = "none"
        order4image.style.pointerEvents = "none"
        button1.style.pointerEvents = "none"
        button2.style.pointerEvents = "none"
        
        order5image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        order5image.style.animation = "notactive5 1s ease";
        order1page.style.filter = "blur(0px)"
        order2page.style.filter = "blur(0px)"
        order3page.style.filter = "blur(0px)"
        order3page.style.filter = "blur(0px)"
        order4page.style.filter = "blur(0px)"
        forbuttons.style.filter = "blur(0px)"
        orders.style.transition = "all 1s"

        order1image.style.pointerEvents = "auto"
        order2image.style.pointerEvents = "auto"
        order3image.style.pointerEvents = "auto"
        order4image.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        button2.style.pointerEvents = "auto"
    }
    
    clickedanimation5 = !clickedanimation5;  
});

let button1 = document.querySelector('.button1'); 
let button2 = document.querySelector('.button2'); 

button2.addEventListener('click', function(event) {
    window.location.reload()
});

button1.addEventListener('click', function(event) {
    button2.style.backgroundColor = "white"
    button1.style.backgroundColor = "red"
    window.location.href = 'liklonpage.html'
});

const search = document.querySelector(".search")

search.addEventListener('keydown', function(event){


    const search = document.querySelector(".search");

    search.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            const value = search.value.trim().toLowerCase();
    
            if (value === "top logos" || value === "toplogo" || value === "logos" || value === "logo" || value === "top logo" || value === "toplogos") {
                window.location.href = "liklonpage.html";
            }
    
            if (value === "previews" || value === "preview" || value === "toppreviews" || value === "toppreview") {
                window.location.href = "liklonpage.html";
            }

            if(value === "top orders" || value === "toporder" || value === "orders" || value === "order" || value === "top order"){
                window.location.reload()
            }
    
        }
    });

})