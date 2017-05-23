/*global document*/
document.getElementById("close").addEventListener('click', function (e) {
    "use strict";
    var parent = e.target.parentNode,
        wrapper = document.getElementById("wrapper"),
        section1 = document.getElementById("how-it-works"),
        section2 = document.getElementById("our-promise"),
        section3 = document.getElementById("our-community"),
        section4 = document.getElementById("checklist"),
        section5 = document.getElementById("quote"),
        footer = document.getElementById("footer");
    parent.parentNode.removeChild(parent);
    
    wrapper.style.top = "0";
    section1.style.top = "0";
    section2.style.top = "0";
    section3.style.top = "0";
    section4.style.top = "0";
    section5.style.top = "0";
    footer.style.top = "0";
});