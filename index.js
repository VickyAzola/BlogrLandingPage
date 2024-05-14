const nav = document.getElementById("topMenu");
const navButtonIcon = document.getElementById("navButtonIcon");
const button = document.getElementById("buttonGroup");
const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const arrowIcon = document.querySelectorAll(".arrowIcon");


function showNavMenu() {
    nav.classList.toggle("hidden")

    if (nav.classList.contains("hidden")) {
        navButtonIcon.src = "../images/icon-hamburger.svg"
    } else {
        navButtonIcon.src = "../images/icon-close.svg"
    }
}

for (let i = 0; i < dropdownBtn.length; i++) {
    dropdownBtn[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        content.classList.toggle("hidden");

        arrowIcon[i].style.transform = content.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
    });
}
