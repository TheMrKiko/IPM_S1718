var notifications = [new Notification("Ola", "../Site/assets/student3.png")];

var currentScreen;

function updateClock(clock) {
    var time = new Date();
    var stringTime = "";
    if (time.getHours() < 10) {
        stringTime += "0";
    }
    stringTime += time.getHours() + ":";
    if (time.getMinutes() < 10) {
        stringTime += "0";
    }
    stringTime += time.getMinutes();
    document.getElementById(clock).innerText = stringTime;
    setTimeout(function () {
        updateClock(clock);
    }, 1000);
}

function appendToList() {
    var node = document.createElement("DIV");
    node.innerHTML =
        '<table class="notification">\
        <tr>\
            <td class="notif-icon">\
                <img src="" width="6pt">\
			</td>\
            <td class="notif-text">o</td>\
		</tr>\
    </table>';
    table = node.firstElementChild.firstElementChild.getElementsByTagName("TD");
    table[0].firstElementChild.setAttribute("src", notifications[0]["img"]);
    table[1].innerText = notifications[0]["name"];
    document.getElementById("notification-bar").appendChild(node);
}

function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function soloScreen(screenID) {
    currentScreen = screenID;
    screens = document.getElementsByClassName("screen");
    for (var s = 0; s < screens.length; s++) {
        screens[s].style.display = "none";
    }
    document.getElementById(screenID).style.display = "flex";
}

window.addEventListener('message', function (event) {
    switch (event.data) {
        case "up":
            scrollCurrScreen(-10);
            break;

        case "down":
            scrollCurrScreen(10);
            break;

        case "home":
            soloScreen("mainScreen");
            break;

        default:
            console.log(event.data);
            break;
    }
});

function scrollCurrScreen(value) {
    scrollElement = document.getElementById(currentScreen);
    scrollValue(scrollElement, value);
}

function scrollValue(screen, value) {
    screen.getElementsByClassName("scrollable")[0].scrollTop += value;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    soloScreen("mainScreen");
}