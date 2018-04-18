var notifications = [new Notification("à sua procura.", "assets/people/bill-jones-jr.jpg"), new Notification("gosta de si.", "assets/people/parker-whitson.jpg"), new Notification("tem saudades", "assets/people/sam-burriss.jpg")];
var notifN = 0;
var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];

var screens = [new Screen("Lock", "lockScreen", "", "lockScreen", "lockScreen", false, false),
new Screen("Main", "mainScreen", "addNotification()", "mainSolo", "lockScreen", false, false),
new Screen("App", "appScreen", "", "mainSolo", "mainScreen", false, false),
new Screen("Amigos", "friendScreen", "distancePeople(); showPeople();", "", "appScreen", true, false),
new Screen("Contacto", "friendDetailScreen", "", "", "appScreen", true, true, "Mapa", 'loadScreen("mapScreen")', "Acenar", ""),
new Screen("Bússola", "compassScreen", "", "", "appScreen", true, true, "Fim", 'loadScreen("friendDetailScreen")', "João 100m", ""),
new Screen("Mapa", "mapScreen", 'pinMotion();', "", "appScreen", true, true, "Fim", 'loadScreen("friendDetailScreen")', "João 100m")
];
var currentSolo;
var currentScreen;
var intervalVar;
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

/*function cloneElementToByClass(classModel, idGram, classParent, [args]) {
    var copy = cloneElement(classModel);
    setAttributes(copy, [args]);
    return document.getElementById(idGram).getElementsByClassName(classParent)[0].appendChild(copy);
}*/

function cloneElementToBegin(classModel, idParent, args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, args);
    return document.getElementById(idParent).insertBefore(copy, document.getElementById(idParent).firstChild);
}

function cloneElementTo(classModel, idParent, args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, args);
    return document.getElementById(idParent).appendChild(copy);
}

function setAttributes(element, args) {
    var atributEls = element.getElementsByClassName("attr-m");
    for (var i = 0; i < atributEls.length; i++) {
        var atributReq = atributEls[i].getAttribute("attrm").split(" ");
        for (var a = 0; a < atributReq.length; a++) {
            if (atributReq[a] === "innerHTML") {
                atributEls[i].innerHTML = args[i * atributReq.length + a];
            } else {
                atributEls[i].setAttribute(atributReq[a], args[i * atributReq.length + a]);//VAI MARAR
            }
        }
    }
}

/************************************ ECRAS ESPECIFICOS ************************************/
function addNotification() {
    var cur = (notifN++) % notifications.length;
    cloneElementTo("table-model", "notification-bar", [notifications[cur]["img"], notifications[cur]["name"]]);
}

function distancePeople() {
    for (var i = 0; i < people.length; i++) {
        people[i].calcDistance(i);
    }
}

function showPeople() {
    for (var i = 0; i < people.length; i++) {
        var el = cloneElementTo("person-model", "gridFriends", [people[i]["img"], people[i]["name"], people[i]["distance"]]);
        el.setAttribute("onclick", "infoPerson('" + people[i]["name"] + "');loadScreen('friendDetailScreen');");
    }
}

function infoPerson(personName) {
    var person = findPersonWithName(personName);
    var screen = document.getElementById("friendDetail");
    console.log(person);
    setAttributes(screen, [person["img"], person["name"], person["distance"]]);
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

function arrowAnimation() {
    var limit = 8;
    function rotateArrow() {
        if (!limit) {
            clearInterval(intervalVar);
        }
        limit--;
        var degree = randomNumberGenerator(0, 360);
        var arg = "rotate(" + degree + "deg)";
        console.log(arg);
        document.getElementById("arrowDirection").style.transform = arg;
    }

    intervalVar = setInterval(rotateArrow, 2000);
    document.getElementById("arrowDirection").style.animationDelay = eval(-count) + "s";
}

function arrowEnd() {
    console.log(12345678);
    clearInterval(intervalVar);
}
/************************************ GERIR ECRAS ************************************/
function findScreenWithID(screenID) {
    function findScreen(screen) {
        return screen["id"] == screenID;
    }
    return screens.find(findScreen);
}

function findPersonWithName(name) {
    function findPerson(person) {
        return person["name"] == name;
    }
    return people.find(findPerson);
}

function loadScreen(screenID, f = {}) {
    var loadingScreenObj = findScreenWithID(screenID);
    var currentScreenObj = findScreenWithID(currentScreen);
    if (currentScreenObj != undefined)
        var prevScreenObj = findScreenWithID(currentScreenObj["prevScreen"])
    if (currentScreenObj != undefined && prevScreenObj != undefined) {
        loadingScreenObj["prevScreen"] = (prevScreenObj["id"] == loadingScreenObj["id"] ? prevScreenObj["prevScreen"] : currentScreen);
    } else {
        loadingScreenObj["prevScreen"] = currentScreen;
    }
    moveScreen(screenID, f);
}

function loadSolo(screenID, soloID) {
    //clear and build
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

function moveScreen(screenID) {
    var screenObj = findScreenWithID(screenID);
    if (screenObj == undefined) return;
    screenObj.initScreen();
    loadSolo(screenID, screenObj["solo"]);
}

function goBack() {
    moveScreen(findScreenWithID(currentScreen)["prevScreen"]);
}

function addHeader(screenID, args) {
    var el = cloneElementToBegin("header-model", screenID, args);
    updateClock(el.getElementsByClassName("clock")[0]);
}

function addFooter(screenID, args) {
    cloneElementTo("footer-model", screenID, args);
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
        if (then - now >= 40) {
            swipe(document.getElementById("mainSolo"), now - then, -width, -1, 0);
            currentScreen = "appScreen";
        } else if (then - now > 0) {
            swipe(document.getElementById("mainSolo"), now - then, 0, 1, 0);
        }
    } else if (currentScreen == "appScreen") {
        if (now - then >= 40) {
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

function pinSwipe(elemId, pos, target, dir, offset, atrb) {
    elem = document.getElementById(elemId);
    count = 0;
    var id = setInterval(function () {
        if (pos == target) {
            clearInterval(id);
        } else {
            pos += dir;
            rpos = pos + offset;
            elem.style[atrb] = rpos + "%";
        }
        count += 0.1;
    }, 100);
}

function pinMotion() {
    pinSwipe("pinUser", 77, 20+7, -0.25, 0, "left");
    pinSwipe("pinUser", 60, 20+17, -0.25, 0, "top");
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

function Screen(name, id, initFunc, solo, homeButton, header, footer, ...footarg) {
    this.name = name;
    this.id = id;
    this.initFunc = initFunc;
    this.solo = solo != "" ? solo : id;
    this.homeButton = homeButton;
    this.header = header;
    this.footer = footer;
    this.footarg = footarg;
    this.init = false;
    this.prevScreen;
    this.initScreen = function () {
        if (!this.init) {
            if (this.header) this.addHeader();
            if (this.footer) this.addFooter();
            eval(initFunc);
            this.init = true;
        }
    };
    this.addHeader = function () {
        addHeader(id, [name]);
    }
    this.addFooter = function () {
        addFooter(id, footarg);
    }
}
