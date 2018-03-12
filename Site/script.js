function changeTab(button, section) {
    var i, sections, buttonEl;

    buttonEl = document.getElementById(button);

    sections = document.getElementsByClassName("section");

    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    
    if (!buttonEl.classList.contains("active")) {

        document.getElementById(section).style.display = "block";

        buttons = document.getElementsByClassName("tab");
        for (i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace(" active", "")
        }

        buttonEl.className += " active";
    } else {
        buttonEl.className = buttonEl.className.replace(" active", "");
    }
}

function loadAllLinks(alllinks) {
    var links = alllinks;
    for (link in links) {
        document.getElementById(links[link]["id"]).href = links[link]["url"];
    }
}