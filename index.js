for(var i = 0; i < document.querySelectorAll("button").length; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var but = this.innerHTML

        makeSound(but);

        buttonAnim(but);
    });
}

document.addEventListener("keypress",function(event){
    var key = event.key;
    
    makeSound(key);

    buttonAnim(key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play()
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play()
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play()
            break;

        default:
    }
}

function buttonAnim(key){
    var active = document.querySelector("." + key)

    active.classList.add("pressed");


    setTimeout(function (){
        active.classList.remove("pressed");
    }, 100);
}
