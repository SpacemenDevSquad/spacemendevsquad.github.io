var audio = document.getElementById("click");
var clickSound = new Audio()
clickSound.src = "SFX/click.mp3"

$(".inactive").mouseenter(function() {
    var clickSound = new Audio()
    clickSound.src = "SFX/click.mp3"
    clickSound.play();
});

$(".playButton").mouseenter(function() {
    var clickSound = new Audio()
    clickSound.src = "SFX/click.mp3"
    clickSound.play();
});