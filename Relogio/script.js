var notifications = [new Notification("Ola", "../Site/assets/student3.png")];
var screens = [new Screen("Main", "mainScreen", "console.log('main');", "mainSolo"), new Screen("App", "appScreen", "console.log('app')", "mainSolo")];
var currentSolo;
var currentScreenInSwipe = "mainScreen";
var currentSwipe;

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

function Screen(name, id, initf, solo/*, header, footer*/) {
    this.name = name;
    this.id = id;
    this.inift = initf;
    this.solo = solo;
    /*this.header = header;*/
    /*this.footer = footer;*/
    this.loadScreen = function () {
        eval(initf);
    };
}

//loadscreen loada solos
//loadsolo recebe argumento do screen se houver swipe e faz move

function loadScreen(screenID) {
    function findScreenWithID(screen) {
        return screen["id"] == screenID;
    }
    var screenObj = screens.find(findScreenWithID);
    screenObj.loadScreen();
    loadSolo(screenObj["solo"]);    
}

function loadSolo(soloID) {
    //se swipe igual, anima; se diferente, move logo
    currentSolo = soloID;
    currentSwipe = soloID;
    showSolo(soloID);
}

function showSolo(soloID) {
    solos = document.getElementsByClassName("solo");
    for (var s = 0; s < solos.length; s++) {
        solos[s].style.display = "none";
    }
    document.getElementById(soloID).style.display = "flex";
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
            loadScreen("mainScreen");
            break;

        default:
            console.log(event.data);
            break;
    }
});

function scrollCurrScreen(value) {
    scrollElement = document.getElementById(currentSolo);
    scrollValue(scrollElement, value);
}

function scrollValue(screen, value) {
    screen.getElementsByClassName("scrollable")[0].scrollTop += value;
}

function startDrag(ev) {
    var ghost = document.createElement("img");
    ghost.style.display = "none";
    ev.dataTransfer.setDragImage(ghost, 0, 0);
    ev.dataTransfer.setData("Text", ev.clientX);
    then = ev.clientX;
}

function dragging(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    /*var then = ev.dataTransfer.getData("Text");*/
    var now = ev.clientX;
    var diff = now - then;
    if (currentScreenInSwipe == "mainScreen") {
        if (diff < 0) {
            var string = "translateX(" + diff + "px)";
            document.getElementById("mainSolo").style.transform = string;
        }
    }
    if (currentScreenInSwipe == "appScreen") {
        if (diff > 0) {
            diff -= document.getElementById(currentSwipe).clientWidth;
            var string = "translateX(" + diff + "px)";
            document.getElementById("mainSolo").style.transform = string;
        }
    }

}


function drop(ev) {
    ev.preventDefault();
    var width = document.getElementById("appScreen").clientWidth;
    var now = ev.clientX;
    var then = ev.dataTransfer.getData("Text");
    if (currentScreenInSwipe == "mainScreen") {
        if (then - now >= 50) {
            swipe(document.getElementById("mainSolo"), now - then, -width, -1, 0);
            currentScreenInSwipe = "appScreen";
        } else if (then - now > 0){
            swipe(document.getElementById("mainSolo"), now - then, 0, 1, 0);
        }
    } else if (currentScreenInSwipe == "appScreen") {
        if (now - then >= 50) {
            swipe(document.getElementById("mainSolo"), now - then, width, 1, -width);
            currentScreenInSwipe = "mainScreen";
        } else if (now - then > 0){
            swipe(document.getElementById("mainSolo"), now - then, 0, -1, -width);
        }
    }
}

function swipe(elem, pos, target, dir, offset) {
    var id = setInterval(function() {
        if (pos == target) {
            clearInterval(id);
        } else {
            pos += dir;
            rpos = pos + offset;
            elem.style.transform = "translateX(" + rpos + "px)"; 
        }
    }, 10);
}
