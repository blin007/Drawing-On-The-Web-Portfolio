// Animation controller class, adds an animation to an element in DOM, and set a trigger
class AnimationController {
    constructor(triggerElement, anims) {
        this.triggerElement = triggerElement
        this.anims = anims;

        this.events();
    }

    events(){
        const img = document.getElementById("scenery");
        this.triggerElement.addEventListener("click", () => {
            // Make img behind door visible
            img.style.display = "block";
            this.triggerElement.classList.add("no-hover");
            for(const anim in this.anims){       
                this.addAnim(this.anims[anim]);
            }
            setTimeout(() => {
                this.triggerElement.classList.remove("no-hover");
                img.style.display = "none";
            }, 10100)
        })    
    }

    addAnim(anim) {
        anim.element.classList.remove(anim.animClass);
        void anim.element.offsetWidth;
        anim.element.classList.add(anim.animClass);
        setTimeout(() => {
            anim.element.classList.remove(anim.animClass);
        }, 10100)
    }
}


const doorHandle = document.getElementById("door-handle");
const doorFrame = document.getElementById("door-frame");
const body = document.querySelector("body");


const anims = {
    doorHandleAnim: {
        element: doorHandle,
        animClass: "door-knob-handle-open",
    },
    doorFrameAnim: {
        element: doorFrame,
        animClass: "door-frame-open",
    },
    backgroundAnim: {
        element: body,
        animClass: "background-gradient",
    }
}

new AnimationController(doorHandle, anims);