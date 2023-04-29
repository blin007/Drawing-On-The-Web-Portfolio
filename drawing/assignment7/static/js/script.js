const eyeImg = document.getElementById("eyeReference")
const canvas = document.getElementById("canvas")
const frontCanvas = document.getElementById("canvasFront")
const context = canvas.getContext("2d");
const frontContext = frontCanvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
frontCanvas.width = window.innerWidth;
frontCanvas.height = window.innerHeight;

//create a bunch of eyes and animate them on the canvas
class Eye {
    constructor(context, x,y, width, height, velX, velY){
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.draw()
    }

    draw(){
        this.context.drawImage(eyeImg, this.x, this.y, this.width, this.height);
    }

    animate(){
        this.x += this.velX;
        this.y += this.velY;

        // check if reached edge of canvas if so then reverse velocity
        if(this.x < 0 || this.x + this.width > canvas.width){
            this.velX = -this.velX;
        }

        if(this.y < 0 || this.y + this.height > canvas.height){
            this.velY = -this.velY;
        }

        this.draw();
    }

}

//have eyes bounce around canvas
let backEyes = []
let frontEyes = []

function createEyes(){
    for(let i = 0; i < 10; i++){
        const backEye = new Eye(context, Math.floor(Math.random() * (canvas.width - eyeImg.naturalWidth)), 
        Math.floor(Math.random() * (canvas.height - eyeImg.naturalHeight)), eyeImg.naturalWidth, eyeImg.naturalHeight, 
        Math.floor(Math.random() * 7), Math.floor(Math.random() * 7))
        backEyes.push(backEye)
    }

    for(let i= 0; i < 10; i++){
        const frontEye = new Eye(frontContext, Math.floor(Math.random() * (frontCanvas.width - eyeImg.naturalWidth)), 
        Math.floor(Math.random() * (frontCanvas.height - eyeImg.naturalHeight)), eyeImg.naturalWidth, eyeImg.naturalHeight, 
        Math.floor(Math.random() * 7), Math.floor(Math.random() * 7))
        frontEyes.push(frontEye);
    }
}

function animateEye(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    frontContext.clearRect(0, 0, frontCanvas.width, frontCanvas.height);
    
    backEyes.forEach(backEye => {
        backEye.animate();
    })

    frontEyes.forEach(frontEye => {
        frontEye.animate();
    })

    requestAnimationFrame(animateEye)
}

window.addEventListener("load", () => {
    createEyes();
    animateEye();
})