//Click on pencil to begin writing either htmlText, cssText, or jsText

let htmlText = `<div class="text" id="text"></div>
<div id="scene">
    <div class="desk"></div>
    <div class="pencil-container" id="pencil">
        <div class="box eraser">
            <div></div>
        </div>
        <div class="box cap">
            <div></div>
        </div>
        <div class="box wood">
            <div></div>
        </div>
        <div class="pyramid-container">
            <div class="pyramid tip">
                <div></div>
            </div>
        </div>  
    </div>
    <div class="paper" id="paper"></div>
</div>
<a href="drawing2.html" class="arrow-link" id="arrow-link">
    <img src="static/images/arrow.svg" alt="arrow" class="arrow">
</a>
<script defer type="module" src="static/js/script.js"></script>`;

let cssText = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #707bb8;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 75px;
    perspective: 10em;
    perspective-origin: 50% calc(50% - 1em);
    transform-style: preserve-3d;
    overflow: hidden;
}
:root {
    --pencil-size: 3vmin;
}
#scene {
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(40deg);
}
.box {
    width: 2em;
    height: 2em;
    background: var(--front-back-color);
    transform-style: preserve-3d;
}
.box:before,
.box:after {
    content: "";
    width: var(--zdepth);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--side-color);
    transform: rotateY(-90deg);
    transform-origin: 0 100%;
}
...
`;

let jsText = `class AnimationController {
    constructor(triggerElement, anims) {
        this.triggerElement = triggerElement;
        this.anims = anims;
        this.paperController = null;
        this.counter = 0;
        this.events();
    }
    events(){
        this.triggerElement.addEventListener("click", () => {
            this.triggerElement.classList.add("no-hover");
            for(const anim in this.anims){
                this.addAnim(this.anims[anim]);
            }
            setTimeout(() => {
                this.triggerElement.classList.remove("no-hover");
            }, 1800)
            this.counter++;
            if(this.counter == 3){
                this.paperController = new PaperController();
            }
            if(this.counter >= 3){
                procrastination.style.display = "block";
            }
        })
    }
    addAnim(anim) {
        anim.element.classList.remove(anim.animClass);
        void anim.element.offsetWidth;
        anim.element.classList.add(anim.animClass);
        setTimeout(() => {
            anim.element.classList.remove(anim.animClass);
        }, 1500)
    }
}
...
`;

const paper = document.getElementById("paper");
const paperText = document.getElementById("text");
const pencil = document.getElementById("pencil");
const back = document.getElementById("arrow-link");
const refresh = document.getElementById("refresh-link");

function chooseRandomText(){
    const rand = Math.floor(Math.random() * 3);
    let text = null
    if(rand === 0){
        text = htmlText;
    }
    else if (rand===1){
        text = cssText;
    }
    else {
        text = jsText;
    }

    return text.split("");
}

const text = chooseRandomText();

function writeText(){
    if(text.length > 0){
        paperText.innerHTML += text.shift()
    } 
    else {
        pencil.classList.remove("pencil-write");
        back.style.display = "block";
        refresh.style.display = "block";
    }
    
    window.requestAnimationFrame(writeText);
}

pencil.addEventListener("click", () => {
    pencil.classList.add("pencil-move");
    setTimeout(() => {
        pencil.classList.remove("pencil-move");
        pencil.classList.add("pencil-write");
        writeText();
    },1100);
})