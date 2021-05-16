for (let i = 0; i < document.querySelectorAll(".drum-set button").length; i++) {
    document.querySelectorAll(".drum-set button")[i].addEventListener("click", function() {
        let buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let audiow = new Audio("sound/tom0.mp3");
            audiow.play();
            break;
        case "a":
            let audioa = new Audio("sound/tom1.mp3");
            audioa.play();
            break;
        case "d":
            let audiod = new Audio("sound/tom2.mp3");
            audiod.play();
            break;
        case "j":
            let audioj = new Audio("sound/tom3.mp3");
            audioj.play();
            break;
        case "k":
            let audiok = new Audio("sound/tom4.mp3");
            audiok.play();
            break;
        case "l":
            let audiol = new Audio("sound/tom5.mp3");
            audiol.play();
            break;
        default:
            console.log(buttonClicked);
    }
}

function buttonAnimation(currentKey) {
    let keyPressed = document.querySelector("." + currentKey);
    keyPressed.classList.add("pressed");
    setTimeout(function() {
        keyPressed.classList.remove("pressed");
    }, 100);
}