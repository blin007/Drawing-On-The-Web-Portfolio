const canvasWindow = document.getElementById("canvas-window")
const contextWindow = canvasWindow.getContext("2d");

const pxScale = window.devicePixelRatio;
canvasWindow.width = window.innerWidth * pxScale;
canvasWindow.height = window.innerHeight * pxScale;
contextWindow.scale(pxScale, pxScale);

const playStationStartup = document.getElementById("playstation-startup");
const staticTV = document.getElementById("tv-video");

// draw starry background
class Star {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velX = Math.floor(Math.random() * 3 +1);
    }

    draw(){
        contextWindow.beginPath();
        contextWindow.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        contextWindow.fillStyle = "white";
        contextWindow.fill();
        contextWindow.stroke();
    }

    animate(){
        this.x += this.velX;
        if(this.x > canvasWindow.width){
            this.x = 0;
        }
        this.draw()
    }
}

let stars = []
function drawStars(){
    for(let i = 0; i < 100; i++){
        const randX = Math.floor(Math.random() * (canvasWindow.width / pxScale));
        const randY = Math.floor(Math.random() * (canvasWindow.height / pxScale));
        const randRadius = Math.floor(Math.random() * 5 + 5);
        const star = new Star(randX, randY, randRadius)
        star.draw();
        stars.push(star)
    }
}

function animateStars(){
    contextWindow.clearRect(0, 0, canvasWindow.width, canvasWindow.height);
    stars.forEach(star => {
        star.animate()
    })
    window.requestAnimationFrame(animateStars);
}

let boolOn = false;

function toggleVideo(){
    if(!boolOn){
        staticTV.style.display = "none";
        playStationStartup.style.display = "block";
        playStationStartup.play()
        boolOn = true
    }
    else {
        staticTV.style.display = "block";
        playStationStartup.style.display = "none";
        playStationStartup.pause()
        playStationStartup.loop = false;
        playStationStartup.currentTime = 0;
        boolOn = false;
    }
}

window.addEventListener("load", () => {
    drawStars()
    animateStars()
})