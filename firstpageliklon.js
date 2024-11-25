const buttonclicktocontinue = document.getElementById("clicktocontinue");
buttonclicktocontinue.addEventListener("click", function(event) {


    const isconfirmed = confirm ("Do you want to go to the main page of Liklon?")

    if (isconfirmed) {
        window.location.href = "liklonpage.html"
    }
    else {
        event.preventDefault()
    }


});


