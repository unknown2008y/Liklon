// const preview1image = document.querySelector(".preview1image");

// const clickedanimation1 = true

// preview1image.addEventListener("click", function(event) {

//     if(clickedanimation1) {
//         preview1image.classList.add("animation1");
//     }
//     else {
//         preview1image.style.animation = "notactivepreview1 1s ease"
//     }

//     clickedanimation1 = !clickedanimation1

// });


let liklon1image = document.querySelector(".liklon1image");
let logoanimation = document.querySelector(".logoanimation")

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

liklon1image.addEventListener("click", function(event) {
    if (clickedanimation1) {
        logoanimation.classList.remove("logoanimation")
        liklon1image.classList.add("animationl1");
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon1image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon1image.style.animation = "notactive1 1s ease";
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }
    
    clickedanimation1 = !clickedanimation1;  
});

let liklon2image = document.querySelector(".liklon2image");

liklon2image.addEventListener("click", function(event) {
    if (clickedanimation2) {
        logoanimation.classList.remove("logoanimation")
        liklon2image.classList.add("animationl2");
        liklon1image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon2image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon2image.style.animation = "notactive2 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation2 = !clickedanimation2;  
});


let liklon3image = document.querySelector(".liklon3image");

liklon3image.addEventListener("click", function(event) {
    if (clickedanimation3) {
        logoanimation.classList.remove("logoanimation")
        liklon3image.classList.add("animationl3");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon3image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon3image.style.animation = "notactive3 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation3 = !clickedanimation3;  
});

let liklon4image = document.querySelector(".liklon4image");

liklon4image.addEventListener("click", function(event) {
    if (clickedanimation4) {
        logoanimation.classList.remove("logoanimation")
        liklon4image.classList.add("animationl4");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon4image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon4image.style.animation = "notactive4 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation4 = !clickedanimation4;  
});

let lowmq5image = document.querySelector(".lowmq5image");

lowmq5image.addEventListener("click", function(event) {
    if (clickedanimation5) {
        logoanimation.classList.remove("logoanimation")
        lowmq5image.classList.add("animationl5");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        lowmq5image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        lowmq5image.style.animation = "notactive5 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation5 = !clickedanimation5;  
});

let liklon6image = document.querySelector(".liklon6image");

liklon6image.addEventListener("click", function(event) {
    if (clickedanimation6) {
        logoanimation.classList.remove("logoanimation")
        liklon6image.classList.add("animationl6");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon6image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon6image.style.animation = "notactive6 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation6 = !clickedanimation6;  
});

let liklon7image = document.querySelector(".liklon7image");

liklon7image.addEventListener("click", function(event) {
    if (clickedanimation7) {
        logoanimation.classList.remove("logoanimation")
        liklon7image.classList.add("animationl7");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon7image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon7image.style.animation = "notactive7 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation7 = !clickedanimation7;  
});

let liklon8image = document.querySelector(".liklon8image");

liklon8image.addEventListener("click", function(event) {
    if (clickedanimation8) {
        logoanimation.classList.remove("logoanimation")
        liklon8image.classList.add("animationl8");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon8image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon8image.style.animation = "notactive8 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation8 = !clickedanimation8;  
});

let liklon9image = document.querySelector(".liklon9image");

liklon9image.addEventListener("click", function(event) {
    if (clickedanimation9) {
        logoanimation.classList.remove("logoanimation")
        liklon9image.classList.add("animationl9");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon9image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon9image.style.animation = "notactive9 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation9 = !clickedanimation9;  
});

let liklon10image = document.querySelector(".liklon10image");

liklon10image.addEventListener("click", function(event) {
    if (clickedanimation10) {
        logoanimation.classList.remove("logoanimation")
        liklon10image.classList.add("animationl10");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        liklon10image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        liklon10image.style.animation = "notactive10 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimation10 = !clickedanimation10;  
});

let preview1image = document.querySelector(".preview1image");

let previews = document.querySelector(".previews")

preview1image.addEventListener("click", function(event) {
    if (clickedanimationp1) {
        logoanimation.classList.remove("logoanimation")
        previews.classList.remove("previews")
        preview1image.classList.add("animationp1");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        preview1image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        previews.classList.add("previews")
        preview1image.style.animation = "notactivepreview1 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimationp1 = !clickedanimationp1;  
});

let preview2image = document.querySelector(".preview2image");

preview2image.addEventListener("click", function(event) {
    if (clickedanimationp2) {
        logoanimation.classList.remove("logoanimation")
        previews.classList.remove("previews")
        preview2image.classList.add("animationp2");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview3image.style.pointerEvents = "none"
        
        preview2image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        previews.classList.add("previews")
        preview2image.style.animation = "notactivepreview2 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview3image.style.pointerEvents = "auto"
    }

    clickedanimationp2 = !clickedanimationp2;  
});

let preview3image = document.querySelector(".preview3image");

preview3image.addEventListener("click", function(event) {
    if (clickedanimationp3) {
        logoanimation.classList.remove("logoanimation")
        previews.classList.remove("previews")
        preview3image.classList.add("animationp3");
        liklon1image.style.pointerEvents = "none"
        liklon2image.style.pointerEvents = "none"
        liklon3image.style.pointerEvents = "none"
        liklon4image.style.pointerEvents = "none"
        lowmq5image.style.pointerEvents = "none"
        liklon6image.style.pointerEvents = "none"
        liklon7image.style.pointerEvents = "none"
        liklon8image.style.pointerEvents = "none"
        liklon9image.style.pointerEvents = "none"
        liklon10image.style.pointerEvents = "none"
        preview1image.style.pointerEvents = "none"
        preview2image.style.pointerEvents = "none"
        
        preview3image.style.animation = "";  
    } else {
        logoanimation.classList.add("logoanimation")
        previews.classList.add("previews")
        preview3image.style.animation = "notactivepreview3 1s ease";
        liklon1image.style.pointerEvents = "auto"
        liklon2image.style.pointerEvents = "auto"
        liklon3image.style.pointerEvents = "auto"
        liklon4image.style.pointerEvents = "auto"
        lowmq5image.style.pointerEvents = "auto"
        liklon6image.style.pointerEvents = "auto"
        liklon7image.style.pointerEvents = "auto"
        liklon8image.style.pointerEvents = "auto"
        liklon9image.style.pointerEvents = "auto"
        liklon10image.style.pointerEvents = "auto"
        preview1image.style.pointerEvents = "auto"
        preview2image.style.pointerEvents = "auto"
    }

    clickedanimationp3 = !clickedanimationp3;  
});

// doesnt work correctly

// const button1 = document.querySelector('.button1'); 


// button1.addEventListener('click', function(event) {
//     localStorage.setItem("buttonRed", "true")
//     window.location.reload()
// });

// if (localStorage.getItem("buttonRed") === "true") {
//     button1.classList.add('forcolorred1')
// }

const button1 = document.querySelector('.button1'); 
const button2 = document.querySelector('.button2'); 

button1.addEventListener('click', function(event) {
    window.location.reload()
});

button2.addEventListener('click', function(event) {
    button1.style.backgroundColor = "white"
    button2.style.backgroundColor = "red"
    window.location.href = 'liklon2page.html'
});

// const search = document.querySelector(".search")

// search.addEventListener('input', function(event){

// if(event.target.value == "Enter") {


//     if (search.value === "Top logos" || search.value === "top logos" || search.value === "toplogos" || search.value === "logos" || search.value === "logo" || search.value === "top logo" || search.value === "toplogo") {
//         window.scrollTo ({
//             top: 250,
//             behavior: "smooth"
//         });
//     }

//     if (search.value === "Previews" || search.value === "previews" || search.value === "Preview" || search.value === "preview") {
//         window.scrollTo ({
//             top: 800,
//             behavior: "smooth"
//         });
//     }

//     if (search.value === "Top orders" || search.value === "top orders" || search.value === "toporders" || search.value === "orders" || search.value === "order" || search.value === "top order" || search.value === "toporder") {
//         window.location.href = "liklon2page.html";

//     }

// }

// })

const search = document.querySelector(".search");

search.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const value = search.value.trim().toLowerCase();

        // Условие для прокрутки страницы
        if (value === "top logos" || value === "toplogo" || value === "logos" || value === "logo" || value === "top logo" || value === "toplogos") {
            window.scrollTo({
                top: 250,
                behavior: "smooth"
            });
        }

        if (value === "previews" || value === "preview" || value === "toppreviews" || value === "toppreview") {
            window.scrollTo({
                top: 800,
                behavior: "smooth"
            });
        }

        if (value === "top orders" || value === "toporder" || value === "orders" || value === "order" || value === "top order") {
            window.location.href = "liklon2page.html";
        }

    }
});




