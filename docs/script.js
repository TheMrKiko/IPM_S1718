function changeTab(button, section) {
    var i, sections;

    sections = document.getElementsByClassName("section");
    buttons = document.getElementsByClassName("tab");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        buttons[i].style.backgroundColor = "#f1f1f1";
    }

    document.getElementById(section).style.display = "block";
    document.getElementById(button).style.backgroundColor = "#e0e0e0";
}
