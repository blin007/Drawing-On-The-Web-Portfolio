// GET DOM ELEMENTS
const mainContainer = document.getElementById("container");
const firstAudio = document.getElementById("firstAudio");
firstAudio.volume = 0.8;
const saxSeal = document.getElementById("sax-seal");
const hiddenContainer = document.getElementById("hidden-container");
const secondAudio = document.getElementById("secondAudio");
const eyeGrid = document.getElementById("eye-grid");
const secondStatePrompt = document.getElementById("prompt");
const thirdStatePrompt = document.getElementById("next");
const eyes = eyeGrid.children;
const finalContainer = document.getElementById("final-container");


// Start at the TV static --> Then transition to the seals after 4 seconds
thirdAudio.autoplay = true;
thirdAudio.muted = false;
thirdAudio.load();
setTimeout(() => {
    finalContainer.style.display = "none";
    thirdAudio.pause();
    mainContainer.style.display = "inline";
    firstAudio.autoplay = true;
    firstAudio.muted = false;
    firstAudio.load();
}, 4000)


// Add Event listener to sax seal
saxSeal.addEventListener("click", clickSeal);

// Event listeners
// Moving to second state
function clickSeal(e) {
    // Play audio for second state
    secondAudio.autoplay = true;
    secondAudio.muted = false;
    secondAudio.load();
    hiddenContainer.style.display = "inline";
    mainContainer.remove();

    //get a random eye
    const randEye = Math.floor(Math.random() * eyes.length);

    //remove the shake effect from this eye to let the user know that this is the correct eye
    eyes[randEye].style.animationName="null";
    //event listener to move to next state
    eyes[randEye].addEventListener("click", clickEye);

    setTimeout(() => {
        secondStatePrompt.style.display = "none";
    }, 4000);
}
// Moving to final state
function clickEye(e) {
    secondStatePrompt.style.display = "none";
    // Play audio for final state
    thirdAudio.autoplay = true;
    thirdAudio.muted = false;
    thirdAudio.load();
    thirdStatePrompt.style.display="inline";

    setTimeout(() => {
        thirdStatePrompt.style.display = "none"
        triggerThirdState();
    }, 3000);
};

function triggerThirdState() {
    hiddenContainer.remove();
    finalContainer.style.display = "inline";

    setTimeout(() => {
        location.reload()
    }, 4000)
}
