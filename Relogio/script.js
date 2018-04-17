var notifications = [new Notification("à sua procura.", "assets/people/bill-jones-jr.jpg"), new Notification("gosta de si.", "assets/people/parker-whitson.jpg"), new Notification("tem saudades", "assets/people/sam-burriss.jpg")];
var notifN = 0;
var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];

var screens = [new Screen("Lock", "lockScreen", "", "lockScreen", ""),
new Screen("Main", "mainScreen", "appendToList()", "mainSolo", "lockScreen"),
new Screen("App", "appScreen", "", "mainSolo", "mainScreen"),
new Screen("Amigos", "friendScreen", "distancePeople(); showPeople();", "", "appScreen"),
new Screen("Mapa", "friendDetailScreen", "", "", "appScreen"),
new Screen("Bússola", "compassScreen", "", "", "appScreen"),
new Screen("Mapa", "mapScreen", "", "", "appScreen")
];

var currentSolo;
var currentScreen = "mainScreen";
/*var currentSwipe;*/

/************************************ CLOCK ************************************/
function loadClocks() {
    var clocks = document.getElementsByClassName("clock");
    for (var i = 0; i < clocks.length; i++) {
        updateClock(clocks[i]);
    }
}

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
    clock.innerText = stringTime;
    setTimeout(function () {
        updateClock(clock);
    }, 1000);
}

/************************************ CLONE ************************************/
function cloneElement(classModel) {
    var model = document.getElementById("models").getElementsByClassName(classModel)[0].firstElementChild;
    return model.cloneNode(true);
}

function cloneElementTo(classModel, idParent, ...args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, [args]);
    return document.getElementById(idParent).appendChild(copy);
}

function setAttributes(element, [args]) {
    var atributEls = element.getElementsByClassName("attr-m");
    for (var i = 0; i < atributEls.length; i++) {
        var atributReq = atributEls[i].getAttribute("attrm");
        if (atributReq === "innerHTML") {
            atributEls[i].innerHTML = args[i];
        } else {
            atributEls[i].setAttribute(atributReq, args[i]);
        }
    }
}

/************************************ ECRAS ESPECIFICOS ************************************/
function appendToList() {
    var cur = (notifN++) % notifications.length;
    cloneElementTo("table-model", "notification-bar", notifications[cur]["img"], notifications[cur]["name"]);
}

function distancePeople() {
    for (var i = 0; i < people.length; i++) {
        people[i].calcDistance(i);
    }
}

function showPeople() {
    for (var i = 0; i < people.length; i++) {
        cloneElementTo("person-model", "gridFriends", people[i]["img"], people[i]["name"], people[i]["distance"]);
    }
}

function randomNumberGenerator(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

function randomDistance() {
    var distances = document.getElementsByClassName("distance");
    for (var d = 0; d < distances.length; d++) {
        distances[d].innerHTML = randomNumberGenerator(d * 150, (d + 1) * 150);
    }
}

/************************************ GERIR ECRAS ************************************/
function findScreenWithID(screenID) {
    function findScreen(screen) {
        return screen["id"] == screenID;
    }
    return screens.find(findScreen);
}

function loadScreen(screenID) {
    var screenObj = findScreenWithID(screenID);
    if (screenObj == undefined) return;
    screenObj.initScreen();
    loadSolo(screenID, screenObj["solo"]);
}

function loadSolo(screenID, soloID) {
    if (currentSolo != soloID) {
        currentSolo = soloID;
        currentScreen = screenID;
        showSolo(soloID);
    } else if (currentSolo == soloID && currentScreen != screenID) {
        var width = document.getElementById(screenID).clientWidth;
        swipe(document.getElementById(soloID), 0, width, 1, -width);
        currentScreen = screenID;
    }
}

function showSolo(soloID) {
    var solos = document.getElementsByClassName("solo");
    for (var s = 0; s < solos.length; s++) {
        solos[s].style.display = "none";
    }
    document.getElementById(soloID).style.display = "flex";
}

/************************************ SCROLL ************************************/
window.addEventListener('message', function (event) {
    switch (event.data) {
        case "up":
            scrollCurrScreen(-5);
            break;

        case "down":
            scrollCurrScreen(5);
            break;

        case "home":
            loadScreen(findScreenWithID(currentScreen).homeButton);
            break;

        default:
            console.log(event.data);
            break;
    }
});

function scrollCurrScreen(value) {
    var scrollElement = document.getElementById(currentSolo);
    scrollValue(scrollElement, value);
}

function scrollValue(screen, value) {
    var scrollables = screen.getElementsByClassName("scrollable");
    if (scrollables.length != 0) {
        scrollables[0].scrollTop += value;
    }
}

/************************************ SWIPE ************************************/
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
    if (currentScreen == "mainScreen") {
        if (diff < 0) {
            var string = "translateX(" + diff + "px)";
            document.getElementById("mainSolo").style.transform = string;
        }
    }
    if (currentScreen == "appScreen") {
        if (diff > 0) {
            diff -= document.getElementById("appScreen").clientWidth;
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
    if (currentScreen == "mainScreen") {
        if (then - now >= 50) {
            swipe(document.getElementById("mainSolo"), now - then, -width, -1, 0);
            currentScreen = "appScreen";
        } else if (then - now > 0) {
            swipe(document.getElementById("mainSolo"), now - then, 0, 1, 0);
        }
    } else if (currentScreen == "appScreen") {
        if (now - then >= 50) {
            swipe(document.getElementById("mainSolo"), now - then, width, 1, -width);
            currentScreen = "mainScreen";
        } else if (now - then > 0) {
            swipe(document.getElementById("mainSolo"), now - then, 0, -1, -width);
        }
    }
}

function swipe(elem, pos, target, dir, offset) {
    var id = setInterval(function () {
        if (pos == target) {
            clearInterval(id);
        } else {
            pos += dir;
            rpos = pos + offset;
            elem.style.transform = "translateX(" + rpos + "px)";
        }
    }, 5);
}

/************************************ OBJETOS ************************************/
function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function Person(name, img) {
    this.name = name;
    this.img = img;
    this.distance;
    this.calcDistance = function (i) {
        this.distance = randomNumberGenerator(i * 50, (i + 1) * 50) + "m";
    };
}

function Screen(name, id, initFunc, solo, homeButton, /*header, footer*/) {
    this.name = name;
    this.id = id;
    this.initFunc = initFunc;
    this.solo = solo != "" ? solo : id;
    this.homeButton = homeButton;
    /*this.header = header;
    this.footer = footer;*/
    this.init = false;
    this.initScreen = function () {
        if (!this.init) {
            eval(initFunc);
            this.init = true;
        }
    };
}