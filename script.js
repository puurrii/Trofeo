const isMobile = window.innerWidth <= 600;
const nav = document.querySelector("nav")
const vid = document.querySelector('.video');

vid.currentTime = 20;
const endTime = 120;
vid.addEventListener('timeupdate', function() {
    if (vid.currentTime >= 20) {
        nav.style.backdropFilter = "blur(5px)";
    }
    if (vid.currentTime >= endTime) {
        vid.currentTime = 20;
    }
});

window.addEventListener("load", () => {

    const loader = document.querySelector(".loaderw");
    loader.style.transition = "opacity 1s";
    loader.style.opacity = "0";
   
    setTimeout(() => {
        loader.style.display = "none";
    },2000)
})

const textDiv = document.querySelector(".text");
const navbar = document.querySelector(".navbar");
navbar.style.display = "none";
textDiv.style.display = "none";

vid.addEventListener("timeupdate", () => {
if (vid.currentTime >= 18){
    navbar.style.display = "flex"
    textDiv.style.display = "flex"
}}
)
const toggle = document.querySelector(".play");
const audio = document.querySelector(".audioo");
const audioStatus = localStorage.getItem("audioStatus");

audio.textContent = `Audio: ${audioStatus}`;

toggle.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        toggle.textContent = "Audio: On";
        localStorage.setItem("audioStatus", "on");
    } else {
        audio.pause();
        toggle.textContent = "Audio: Off";
        localStorage.setItem("audioStatus", "off");
    }
});

if ((localStorage.getItem(audioStatus)) === "on") {
    audio.play();
}
