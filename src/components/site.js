
// Toggle the navigation button and navigation show, hide
var navarrow = document.getElementById("toggle-nav");
var navbar = document.getElementById("main-nav");

$(navarrow).click(function () {
    $(navbar).toggleClass("d-none");
    $("body").toggleClass("navmargin");
    if (navarrow.classList.contains("fa-arrow-circle-down")) {
        navarrow.classList.remove("fa-arrow-circle-down");
        navarrow.classList.add("fa-arrow-circle-up");
    }
    else {
        navarrow.classList.remove("fa-arrow-circle-up");
        navarrow.classList.add("fa-arrow-circle-down");
    }
});

// Navbar hide on scroll and display on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";

    } else {
        var height = $(navbar).height();
        navbar.style.top = (-height - 25 ) + "px";
    }

    prevScrollpos = currentScrollPos;
}