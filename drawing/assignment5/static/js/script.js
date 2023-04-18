const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Account for pixel density
const pxScale = window.devicePixelRatio;
canvas.width = window.innerWidth * pxScale;
canvas.height = window.innerHeight * pxScale;
const width = canvas.width;
const height = canvas.height;
let pixelColors = [];
context.scale(pxScale, pxScale);

class Shape {
    constructor(x, y, color, shadowColor, strokeStyle){
        this.x = x;
        this.y = y;
        this.color = color;
        this.shadowColor = shadowColor;
        this.strokeStyle = strokeStyle;
        this.lineWidth = Math.random() * 2 + 0.1;
        this.shadowBlur = Math.floor(Math.random() * 10);
        this.shadowOffSetX = Math.floor(Math.random() * 15);
        this.shadowOffSetY = Math.floor(Math.random() * 15);
        this.maxSize = Math.random() * 5 + 2;
        this.size = Math.random() * 0.5 + 2;
        this.angleX = Math.random() * 6.2;
        this.angleY = Math.random() * 6.2;
        this.angle = 0;
        this.minX = 0;
        this.minY = 0;
        this.maxX = width / pxScale;
        this.maxY = height / pxScale;
        this.shape = Math.floor(Math.random() * 2);
        this.rFactor1 = Math.floor(Math.random()*8)+1;
        this.rFactor2 = Math.floor(Math.random()*2)+1;
    }

    draw(){
        this.x += (Math.random() * 10 - 5 + Math.sin(this.angleX));
        this.y += (Math.random() * 10 - 5 + Math.sin(this.angleY));
        this.size += (Math.random() * 0.15 + 0.05);
        this.angleX += (Math.random() * 0.1 - 0.3);
        this.angleY += (Math.random() * 0.1 - 0.3);
        this.angle += (Math.random() * 0.02 + 0.01);
        if(this.x > this.minX || this.minY > this.minY || this.x < this.maxX || this.y < this.maxY){
            context.beginPath();
            if(this.shape == 0){
                drawRect(this.x, this.y, this.size, this.color, this.strokeStyle, this.lineWidth, this.angle, 
                    this.shadowBlur, this.shadowOffSetX, this.shadowOffSetY, this.shadowColor);
            }
            else {
                drawAbstract(this.x, this.y, this.size, this.color, this.strokeStyle, this.lineWidth, this.rFactor1, this.rFactor2);
            }
            context.fill();
            context.stroke();
            requestAnimationFrame(() => this.draw());
        }
    }
}

function drawRect(x, y, size, color, strokeStyle, lineWidth, angle, shadowBlur, shadowOffSetX, shadowOffSetY, shadowColor){
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.shadowBlur = shadowBlur;
    context.shadowOffSetX = shadowOffSetX;
    context.shadowOffSetY = shadowOffSetY;
    context.shadowColor = shadowColor;
    context.fillStyle = color;
    context.fillRect(0, 0, size, size);
    context.strokeStyle= strokeStyle;
    // The border will draw around the pillar
    context.strokeRect(size*2, size*2, size * 4, size * 4);
    context.lineWidth = lineWidth;
    context.restore();
}

function drawAbstract(x, y,size, color, strokeStyle, lineWidth, rFactor1, rFactor2){
    const spikes = Math.floor(Math.random() * size) + 2;
    context.fillStyle = color;
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth* 0.5;
    context.beginPath();
    context.save();
    context.translate(x,y);
    context.moveTo(0, 0-spikes);
    for(let i = 0; i < spikes; i++){
        context.rotate(Math.PI / (rFactor1));
        context.lineTo(0, 0 -(spikes * 2));
        context.rotate(Math.PI / (rFactor2));
        context.lineTo(0, 0-spikes);
    }
    context.restore();
    context.closePath();
    context.stroke();
    context.fill();
}

function setup(){
    //Get img data
    const image = document.getElementById("img");
    context.drawImage(image, 0, 0, 30, 50);
    let imageData = context.getImageData(0, 0, 30 * pxScale, 50  * pxScale);
    let data = imageData.data;
    context.clearRect(0, 0, width, height);  

    // organize all colors in an array of RGBA values
    for (let channel = 0; channel < data.length; channel += 4) {
        let color = 'rgba(' + data[channel] + ',' + data[channel + 1] + ',' + data[channel + 2] + ',' + data[channel + 3] + ')';
        pixelColors.push(color);
    }
}

function draw(){
    const limit = Math.floor(Math.random() * 20 + 40);
    for(let i = 0; i < limit; i++){
        const rootColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];
        const shadowColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];
        const shape = new Shape(width / (2 * pxScale), height / (2 * pxScale), rootColor, shadowColor);
        shape.draw();
    }
}

window.addEventListener('load', function(e) {
    setup();
    draw();
})