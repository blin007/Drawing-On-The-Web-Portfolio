// (1) Click on the pencil 3 times to trigger the next event
// (2) Click on the paper to go to next page

// Animation controller class, adds an animation to an element in DOM, and set a trigger
class AnimationController {
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
                // procrastination.style.display = "block";
                procrastination.innerHTML = "<h1>That's enough procrastinating. How about we take some notes</h1><h1>Click on the lower half of the paper</h1>"
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

class PaperController {
    constructor(){
        this.body = document.querySelector("body");
        this.paper = paper;
        this.speed = 1;
        this.current = 10;
        this.target = 120;
        paper.addEventListener("click", () => {
            procrastination.style.display = "none";
            this.increasePerspective();
        })
        setTimeout(() => {
            nextPart.style.display = "block";
        },10000);
    }

    increasePerspective(){
        if(this.current < this.target){
            this.current+= 1 * this.speed;
            this.body.style.perspective = `${this.current}em`;
            
        }
        else if (this.current >= this.target){
            setTimeout(() => {
                window.location.href="drawing2.html";
            }, 500);
        }
        window.requestAnimationFrame(() => this.increasePerspective());
    }
}

const nextPart = document.getElementById("arrow-link");
const procrastination = document.getElementById("text");
const paper = document.getElementById("paper");
const pencil = document.getElementById("pencil");

const anims = {
    pencilAnim: {
        element: pencil,
        animClass: "pencil-spin",
    },
    paperAnim: {
        element: paper,
        animClass: "paper-slide",
    },

}

new AnimationController(pencil, anims);