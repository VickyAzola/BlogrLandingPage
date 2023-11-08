const nav = document.getElementById("topMenu");
const button = document.getElementById("buttonGroup");

function showNavMenu() {
    if (nav.className === "topMenu") {
        nav.className += " responsive";
        button.className += " responsive";
    } else {
        nav.className = "topMenu";
        button.className = "buttonGroup";
    }
}

document.addEventListener("touchstart", function() {}, true);