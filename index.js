var botao = document.querySelectorAll("button");

for(let i = 0; i < botao.length; i++){

    botao[i].addEventListener("click", function(){ 

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });
}

document.addEventListener("keydown", function (e){
        
        makeSound(e.key);
        buttonAnimation(e.key);
});

function makeSound (buttonInnerHTML){

        
        var audio;  

        
        switch (buttonInnerHTML) {
            case "w":
                audio = new Audio('./sounds/crash.mp3');
                break;
            case "a":
                audio = new Audio('./sounds/tom-1.mp3');
                break;
            case "s":
                audio = new Audio('./sounds/tom-3.mp3');
                break;
            case "d":
                audio = new Audio('./sounds/kick-bass.mp3');
                break;
            case "j":
                audio = new Audio('./sounds/tom-4.mp3');
                break;
            case "k":
                audio = new Audio('./sounds/tom-2.mp3');
                break;
            case "l":
                audio = new Audio('./sounds/snare.mp3');
                break;
        
            default: console.log(buttonInnerHTML);
                break;
        }

        return audio.play(); 
    
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");
    
    setTimeout (function(){
        activeButton.classList.remove("pressed");
    }, 120);

}