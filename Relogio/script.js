var notifications = [new Notification("à sua procura.", "../assets/joao.jpg"), new Notification("gosta de si.", "../assets/joao.jpg"), new Notification("tem saudades", "../assets/joao.jpg")];
var notifN = 0;

function updateClock(clock) {
    var time = new Date();
    document.getElementById(clock).innerHTML = "";
    if (time.getHours() < 10) {
        document.getElementById(clock).innerHTML += "0";
    }
    document.getElementById(clock).innerHTML += time.getHours() + ":";
    if (time.getMinutes() < 10) {
        document.getElementById(clock).innerHTML += "0";
    }
    document.getElementById(clock).innerHTML += time.getMinutes();
    setTimeout(function () {
        updateClock(clock);
    }, 1000);
}

function cloneElement(classModel) {
    var model = document.getElementById("models").getElementsByClassName(classModel)[0];
    return model.cloneNode(true);
}

function cloneElementTo(classModel, idParent, ...args) {
    var copy = cloneElement(classModel);
    var atributEls = copy.getElementsByClassName("attr-m");

    for (var i = 0; i < atributEls.length; i++) {

        var atributReq = atributEls[i].getAttribute("attrm");
        if (atributReq === "innerHTML") {
            atributEls[i].innerHTML = args[i];
        } else {
            atributEls[i].setAttribute(atributReq, args[i]);
        }
    }
    return document.getElementById(idParent).appendChild(copy);
}

function appendToList() {
    cur = (notifN++) % notifications.length;
    cloneElementTo("table-model", "notification-bar", notifications[cur]["img"], notifications[cur]["name"]);
}

function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function soloScreen(screenID) {
    screens = document.getElementsByClassName("screen");
    for (var s = 0; s < screens.length; s++) {
        screens[s].style.display = "none";
    }
    document.getElementById(screenID).style.display = "flex";
}
