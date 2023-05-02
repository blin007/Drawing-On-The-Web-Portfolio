const transition3 = document.querySelector(".transition-3");
const transition1Block = document.querySelector(".transition-1");
const transition1 = document.querySelectorAll(".loading-bar");
const transition2 = document.querySelector(".transition-2");
const audio3 = document.getElementById("drawing3-audio");

function navToDraw3(){
    transition3.style.display = "flex"
    transition3.classList.add("go-to-draw-3")
    setTimeout(() => {
        audio3.play()
    }, 2000)
    setTimeout(() => {
        window.location.href = 'drawing3.html';
        setTimeout(() => {
            transition3.classList.remove("go-to-draw-3");
        },1000)
    }, 6000)
}

function navToDraw1(){
    transition1Block.style.display = "flex";
    transition1Block.classList.add("transition-1-anim");
    transition1.forEach(bar => {
        bar.classList.add("anim-bars")
    })
    setTimeout(() => {
        
        window.location.href = 'drawing1.html';
        setTimeout(() => {
            transition1Block.classList.remove("transition-1-anim");
        },1000)
        
    }, 4000)

}

function navToDraw2(){
    transition2.style.display = "flex"
    transition2.classList.add("transition-2-anim");
    setTimeout(() => {
        window.location.href = 'drawing2.html'
        setTimeout(() => {
            transition2.classList.remove("transition-2-anim");
        },1000)
    }, 3000)

}