const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e)=>{
    const code = e.keyCode;

    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    console.log(audio, key);

    key.classList.add("playing");

    if(!audio) return

    audio.currentTime = 0;
    audio.play();
})


function removeTransition(e){
    if(e.propertyName !== "transform"){
        return;
    }

    this.classList.remove("playing");
}

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition)})