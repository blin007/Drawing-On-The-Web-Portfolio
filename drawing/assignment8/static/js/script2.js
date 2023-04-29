function play() {
    const power = document.getElementById("power-switch");
    const gb1Start = document.getElementById("gb1-start");

    if(power.checked){
        // console.log("on");
        gb1Start.style.display = "block";
        gb1Start.play();
        gb1Start.loop = true;
    }
    else {
        // console.log("off");
        gb1Start.style.display = "none";
        gb1Start.pause();
        gb1Start.loop = false;
        gb1Start.currentTime = 0;
    }
}

let boolOn = false;

function toggleGB2Video(){
    const buttonA = document.getElementById("gb2-a");
    const gb2Start = document.getElementById("gb2-start");

    if(!boolOn){
        //turn on
        gb2Start.style.display = "block"
        gb2Start.play()
        gb2Start.loop = true;
        boolOn = true;
    } else {
        //turn off
        gb2Start.style.display = "none"
        gb2Start.pause()
        gb2Start.loop = false;
        gb2Start.currentTime = 0;
        boolOn = false;
    }
}