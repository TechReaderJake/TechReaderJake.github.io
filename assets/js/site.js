// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Toggle the navigation button and navigation show, hide
var navarrow = document.getElementsByClassName("nav-arrow")[0];
var navbar = document.getElementById("main-nav");
var navbarT = document.getElementsByClassName("navbar-toggler")[0];
//var accord = document.getElementById("sidenav");

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
    //if (currentScrollPos > 60) {
    //    accord.style.width = accord.offsetWidth;
    //    accord.style.position = "fixed";
    //    accord.style.top = 220 + "px";
    //    accord.style.zIndex = 9999;
    //}
    //else {
    //    accord.style.position = "relative";
    //    accord.style.top = 0;
    //}
    prevScrollpos = currentScrollPos;
}