const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d");

const transition = document.querySelector(".transition");

const pxScale = window.devicePixelRatio;
canvas.width = window.innerWidth * pxScale;
canvas.height = window.innerHeight * pxScale;
const width = canvas.width;
const height = canvas.height;
context.scale(pxScale, pxScale);


function drawStars(){
    for(let i = 0; i < 300; i++){
        context.beginPath();
        const x = Math.floor(Math.random() * (width / pxScale));
        const y = Math.floor(Math.random()* (height / pxScale));
        const radius = Math.floor(Math.random() * 4 + 4);
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = "white";
        context.fill();
        context.stroke();
    }
}

window.addEventListener("load", drawStars);
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth * pxScale;
    canvas.height = window.innerHeight * pxScale;
    const width = canvas.width;
    const height = canvas.height;
    context.scale(pxScale, pxScale);
    drawStars()
})


const audioEject = document.getElementById("eject");
setTimeout(() => {
    audioEject.play()
}, 1500)

setTimeout(() => {
    transition.style.display = "none"
}, 6100)

