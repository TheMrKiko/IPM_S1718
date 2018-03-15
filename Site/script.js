function changeTab(button, section) {
    var i, sections, buttonEl;

    buttonEl = document.getElementById(button);

    sections = document.getElementsByClassName("section");

    for (i = 0; i < sections.length; i++) { //Esconder todas as seções
        sections[i].style.display = "none";
    }
    
    if (!buttonEl.classList.contains("active")) { //Se botao nao está ativo

        document.getElementById(section).style.display = "block"; //Mostrar seção

        buttons = document.getElementsByClassName("tab"); //Desactivar todos os botoes
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        buttonEl.classList.add("active"); //Ativar este botao
    } else {
        buttonEl.classList.remove("active"); //Desativar este botão
    }
}

function loadAllLinks(alllinks) {
    var links = alllinks;
    for (link in links) {
        document.getElementById(links[link]["id"]).href = links[link]["url"];
    }
}

