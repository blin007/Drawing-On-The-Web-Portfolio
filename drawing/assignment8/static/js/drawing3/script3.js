class Element {
    constructor(element, top, left) {
        this.element = element;
        this.top = top;
        this.left = left;
        this.rot = 0;
        this.rand = Math.floor(Math.random() * 2 - 1);
        this.velX = Math.floor(Math.random() * 8 - 2);
        this.velY = Math.floor(Math.random() * 8 - 2);
        this.rotVel = Math.floor(Math.random() * 5 + 2);
        this.origVelX = this.velX;
        this.origVelY = this.velY;
        this.origRotVel = this.rotVel;
        if(this.rand === -1) 
            this.rotVel = Math.floor(Math.random() * -3 - 2);

        this.element.addEventListener("mouseover", () => {
            this.velX /= 2
            this.velY /= 2
            this.rotVel /= 2
        })

        this.element.addEventListener("mouseleave", () => {
            this.velX = this.origVelX
            this.velY = this.origVelY
            this.rotVel = this.origRotVel
        })
    }

    animate(){
        this.top += this.velX
        this.left += this.velY;
        this.rot += this.rotVel;
        this.element.style.transform = "translateX(" + this.top + "px) translateY(" + this.left + "px) rotate(" + this.rot + "deg)";

        const coords = this.element.getBoundingClientRect();
        if(coords.top < 0 || coords.bottom > window.innerHeight){
            this.velY = -this.velY;
            this.origVelY = this.velY
        }

        if(coords.left < 0 || coords.right > window.innerWidth){
            this.velX = -this.velX;
            this.origVelX = this.velX
        }
    }
}

const amongUss = document.querySelectorAll(".among-us");
let amongArr = []
amongUss.forEach((parent ) => {
    const child = parent.querySelector(".among-body");
    const childCoords = child.getBoundingClientRect();
    const ele = new Element(child, childCoords.top, childCoords.left)
    amongArr.push(ele);
})

function animateElement(){
    amongArr.forEach(among => {
        among.animate();
    })
    requestAnimationFrame(animateElement)
}

animateElement()