var notifications = [new Notification("à sua procura.", "../assets/joao.jpg")];

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

function cloneElementTo(classModel, idParent) {
    console.log(args);
    var model = document.getElementById("models").getElementsByClassName(classModel)[0];
    var copy = model.cloneNode(true);
    return document.getElementById(idParent).appendChild(copy);
}

function appendToList() {
    var node = cloneElementTo("table-model", "notification-bar");
    table = node.firstElementChild.firstElementChild.getElementsByTagName("TD");
    table[0].firstElementChild.src = notifications[0]["img"];
    table[1].innerHTML = notifications[0]["name"];
}

function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}