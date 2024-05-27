let mainText = document.querySelector("h1")

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value > 100) {
        mainText.style.animation = "disappear 1s ease-out forwards"; 
    }

});