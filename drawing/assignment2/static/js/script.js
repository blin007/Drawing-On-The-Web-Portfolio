
// For toggling dark and light mode
function toggle(){
    const mode = document.getElementById("mode");
    const html = document.querySelector("html");
    if(mode.checked){
        html.style.backgroundColor = "#000000ce";
        html.style.backgroundBlendMode = "multiply";
        // Change color variables
        document.documentElement.style.setProperty('--color-text-stroke', '#DDDDDD');
        document.documentElement.style.setProperty('--color-text-1', '#CCCCCC');
        document.documentElement.style.setProperty('--color-text-2', '#131313');
        // Change svg fill
        //header icons
        const homeIcon = document.getElementById("icon-home")
        homeIcon.style.fill = "white"
        const sunIcon = document.getElementById("icon-sun")
        sunIcon.style.fill="white"
        const moonIcon = document.getElementById("icon-moon")
        moonIcon.style.fill="white"
        // learn icon
        const learnIcon = document.getElementById("icon-learn")
        learnIcon.style.fill="white"
    }
    else {
        html.style.backgroundColor = null;
        html.style.backgroundBlendMode = null;
        // Change color variables
        document.documentElement.style.setProperty('--color-text-stroke', '#000000');
        document.documentElement.style.setProperty('--color-text-1', '#000000');
        document.documentElement.style.setProperty('--color-text-2', '#cacaca');
        //Change svg fill
        //header icons
        const homeIcon = document.getElementById("icon-home")
        homeIcon.style.fill = "black"
        const sunIcon = document.getElementById("icon-sun")
        sunIcon.style.fill="black"
        const moonIcon = document.getElementById("icon-moon")
        moonIcon.style.fill="black"
        const learnIcon = document.getElementById("icon-learn")
        learnIcon.style.fill="black"
    }
        
}