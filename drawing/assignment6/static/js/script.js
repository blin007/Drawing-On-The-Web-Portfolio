/** @type {HTMLCanvasElement} */
// CANVAS SET UP
const canvas1 = document.getElementById("c1")
const context1 = canvas1.getContext("2d")
const canvas2 = document.getElementById("c2")
const context2 = canvas2.getContext("2d")

//Pixel density
const pxScale = window.devicePixelRatio;
canvas1.width *= pxScale;
canvas1.height *= pxScale;
canvas2.width *= pxScale;
canvas2.height *= pxScale;
const width1 = canvas1.width;
const height1 = canvas1.height;
const width2 = canvas2.width;
const height2 = canvas2.height;
context1.scale(pxScale, pxScale);
context2.scale(pxScale, pxScale)

//API endpoint
const randR = Math.floor(Math.random()*256)
const randG = Math.floor(Math.random()*256)
const randB = Math.floor(Math.random()*256)
const mode = [
    "triad",
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "quad"
]
const randIndexMode = Math.floor(Math.random() * 7)
// get a color scheme based on random rgb color
const url = "https://www.thecolorapi.com/scheme?rgb=rgb(" + randR + "," + randG + "," + randB + ")&mode=" + mode[randIndexMode]

const getColors = async () => {
    try{
        const res = await fetch(url, {
            method: "GET",
        })
        if(res.ok){
            return res.json()
        }
    }
    catch(err){
        console.log(err)
    }
}

// DRAW CANVAS
class Block{
    constructor(context, x, y, width, height, color){
        this.context = context
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw(){
        this.context.fillStyle = this.color
        this.context.fillRect(this.x, this.y, this.width, this.height)
        this.context.strokeStyle = "black"
        this.context.strokeRect(this.x, this.y, this.width, this.height)
    }
}

function drawBlocks(context, color="white"){
    //adjust for pixel density
    const blockWidth = width1 / (10 * pxScale)
    const blockHeight = height1 / (10 * pxScale)

    let y = 0;
    for(let i = 0; i < 10; i++){
        let x = 0;
        for(let j = 0; j < 10; j++){
            const randWidth = blockWidth+Math.floor(Math.random()*100) 
            const block = new Block(context, x, y, randWidth, blockHeight, color)
            block.draw()
            x += randWidth
        }
        y += blockHeight
    }
}

//DRAW CANVAS 1
drawBlocks(context1)

//MODIFY CANVAS 2, wait for the data
getColors().then((data)=> {
    const blockWidth = width1 / (10 * pxScale)
    const blockHeight = height1 / (10 * pxScale)

    let y = 0;
    for(let i = 0; i < 10; i++){
        let x = 0;
        for(let j = 0; j < 10; j++){
            const randIndex = Math.floor(Math.random()* 5);
            const rgbVals = data.colors[randIndex].rgb
            const color = "rgb(" + rgbVals.r + "," + rgbVals.g + "," + rgbVals.b + ")"
            const randWidth = blockWidth+Math.floor(Math.random()*100) 
            const block = new Block(context2, x, y, randWidth, blockHeight, color)
            block.draw()
            x += randWidth
        }
        y += blockHeight
    }
})