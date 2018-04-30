var notifications = [new Notification("à tua procura.", "assets/people/sam-burriss.jpg"), new Notification("acenou-te.", "assets/people/parker-whitson.jpg"), new Notification("à tua procura.", "assets/people/bill-jones-jr.jpg")]; 
var notifN = 0;

var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];

var swipes = [];
var screens = [new Screen("Lock", "lock-screen", "", "", "lock-screen", "lock-screen", false, false),
new Screen("Main", "main-screen", "", "addNotification", "main-solo", "lock-screen", false, false),
new Screen("App", "app-screen", "", "", "main-solo", "main-screen", "clock", false),
new Screen("Amigos", "friend-fscreen", "distancePeople(); setPeopleList();", "reSetDistance", "", "app-screen", true, false),
new Screen("Contacto", "friend-detail-fscreen", "", "arrowEnd(); showPersonInfo", "", "app-screen", true, true, "Mapa", 'loadScreen("map-fscreen", "prevArg")', "Acenar", 'shakePic()'),
new Screen("Mapa", "map-fscreen", "pinMotion();", "arrowEnd(); aproxPerson", "", "app-screen", true, "true3", "Fim", 'loadScreen("friend-detail-fscreen")', "", "", "", ""),
new Screen("Bússola", "compass-fscreen", "", "arrowAnimation(); aproxPerson", "", "app-screen", true, "true3", "Fim", 'loadScreen("friend-detail-fscreen")', "", "", "", "")
];
var currentSolo;
var currentScreen;
var intervalVar;
var prevScreenArgs;
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

/************************************ ECRAS ESPECIFICOS ************************************/
// ------------------- MAIN
function addNotification() {
    var cur = (notifN++) % notifications.length;
    cloneElementTo("table-model", "notification-bar", [notifications[cur].img, notifications[cur].name]);
}

// ------------------- FRIENDS
function setPeopleList() {
    for (var i = 0; i < people.length; i++) {
        var el = cloneElementTo("person-model", "gridFriends", [people[i].img, people[i].name, people[i].distance + "m"]);
        el.setAttribute("onclick", "loadScreen('friend-detail-fscreen', '" + people[i].name + "');");
    }
}

function distancePeople() {
    for (var i = 0; i < people.length; i++) {
        people[i].calcDistance(i);
    }
}

function randomDistance() {
    var distances = document.getElementsByClassName("distance");
    for (var d = 0; d < distances.length; d++) {
        distances[d].innerHTML = randomNumberGenerator(d * 150, (d + 1) * 150);
    }
}

function reSetDistance() {
	reSortPeopleList();
	var peopleHTML = document.getElementById("gridFriends").children;
	for (var i = 0; i < people.length; i++) {
		setAttributes(peopleHTML[i], [people[i].img, people[i].name, people[i].distance + "m"]);
		peopleHTML[i].setAttribute("onclick", "loadScreen('friend-detail-fscreen', '" + people[i].name + "');");
	}
}

function reSortPeopleList() {
	people.sort(function(a, b) {
		return a.distance - b.distance;
	});
}

function showPersonInfo(personName) {
    var person = findPersonWithName(personName);
    var screen = document.getElementsByClassName("friendDetail")[0];
    prevScreenArgs = personName;
    setAttributes(screen, [person.img, person.name, person.distance + "m"]);
}

function shakePic() {
	var screen = document.getElementsByClassName("friendDetail")[0];
	screen.style.animation = "shake 0.5s";
	screen.style.animationIterationCount = "3";
	setTimeout(function() {
		screen.style.animation = "";
	}, 1500);
}

function aproxPerson(personName) {
    var person = findPersonWithName(personName);
    var iniDist = (person.distance / 20) + 1;
    var currScreen = currentScreen;
    editFooter(currentScreen, "Fim", person.name, person.distance+"m");
    var inte = setInterval(function () {
        person.distance = parseInt(eval(person.distance - iniDist).toFixed(0));
        if (person.distance < 0) {
            person.distance = 0;
            clearInterval(inte);
        } else if (currScreen != currentScreen) {
            clearInterval(inte);
            return ;
        }
        editFooter(currentScreen, "Fim", person.name, person.distance+"m");
    }, 1000);
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
        document.getElementById("arrowDirection").style.transform = arg;
    }

    intervalVar = setInterval(rotateArrow, 2000);
    document.getElementById("arrowDirection").style.animationDelay = eval(-count) + "s";
}

function arrowEnd() {
    clearInterval(intervalVar);
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
            } else if (atributReq[a] === "class") {
                atributEls[i].classList.add(args[i * atributReq.length + a]);
            } else {
                atributEls[i].setAttribute(atributReq[a], args[i * atributReq.length + a]);//VAI MARAR
            }
        }
    }
}

/************************************ GERIR ECRAS ************************************/
function findScreenWithID(screenID) {
    function findScreen(screen) {
        return screen.id == screenID;
    }
    return screens.find(findScreen);
}

function findPersonWithName(name) {
    function findPerson(person) {
        return person.name == name;
    }
    return people.find(findPerson);
}

function findSoloWithID(soloID) {
    function findSolo(solo) {
        return solo.id == soloID;
    }
    return swipes.find(findSolo);
}

function loadScreen(screenID, ...args) {
    var loadingScreenObj = findScreenWithID(screenID);
    var currentScreenObj = findScreenWithID(currentScreen);
    if (currentScreenObj != undefined) {
        var prevScreenObj = findScreenWithID(currentScreenObj.prevScreen)
    }
    /*if (savePrev) {
        if (currentScreenObj != undefined && prevScreenObj != undefined) {
            loadingScreenObj.prevScreen = (prevScreenObj.id == loadingScreenObj.id ? prevScreenObj.prevScreen : currentScreen);
        } else {
            loadingScreenObj.prevScreen = currentScreen;
        }
    } else*/
    if (loadingScreenObj.prevScreen == undefined) { //isto funciona desde que não se passe ecrans à frente!
        loadingScreenObj.prevScreen = currentScreen;
    }
    moveScreen(screenID, args);
}

function loadSolo(screenID, soloID, args) {
    //clear and build
    if (currentSolo != soloID) {
        currentSolo = soloID;
        currentScreen = screenID;
        showSolo(soloID);
        SsInS = findSoloWithID(soloID).screens;
        for (var s = 0; s < SsInS.length; s++) {
            findScreenWithID(SsInS[s]).initScreen(args);
        }
    } else if (currentSolo == soloID && currentScreen != screenID) {
        var width = document.getElementById(screenID).clientWidth;
        nice(soloID, 0, width, 1, -width, "transform","translateX(", "px)", 5);
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

function moveScreen(screenID, args) {
    var screenObj = findScreenWithID(screenID);
    if (screenObj == undefined) return;
    //screenObj.initScreen();
    loadSolo(screenID, screenObj.solo, args);
}

function goBack() {
    moveScreen(findScreenWithID(currentScreen).prevScreen, "");
}

function addHeader(screenID, args) {
    var el = cloneElementToBegin("header-model", screenID, args);
    updateClock(el.getElementsByClassName("clock")[0]);
}

function editFooter(screenID, b1, b2, b3) {
    var footer = document.getElementById(screenID).getElementsByClassName("footer")[0];
    screenFootArgs = findScreenWithID(screenID).footarg;
    args = convertFooterArgs([b1, screenFootArgs[1], b2, screenFootArgs[3], b3, screenFootArgs[5]]);
    setAttributes(footer, args);
}

function addFooter(screenID, num, args) {
    args = convertFooterArgs(args);
    cloneElementTo("footer-model-" + num, screenID, args);
}

function convertFooterArgs(args) {
    function isempty(clickstr) {
        if (clickstr != "") return "button";
        return "info";
    }
    if (args.length > 4) {
        return [args[0], args[1], isempty(args[1]), args[2], args[3], isempty(args[3]), args[4], args[5], isempty(args[5])];
    }
    return [args[0], args[1], isempty(args[1]), args[2], args[3], isempty(args[3])];
}


function randomNumberGenerator(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
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
        testscrollTop(scrollables[0]);
    }
}

function testscrollTop(element) {
    var currP = element.scrollTop++;
    if (element.scrollTop != currP) {
        element.classList.toggle("scroll-down", true);
        element.scrollTop--;
    } else {
        element.classList.toggle("scroll-down", false);
    }
    currP = element.scrollTop--;
    if (element.scrollTop != currP) {
        element.classList.toggle("scroll-up", true);
        element.scrollTop++;
    } else {
        element.classList.toggle("scroll-up", false);
    }
}

function testscrollTopScreen() {
    var scrollables = document.getElementById(currentSolo).getElementsByClassName("scrollable");
    if (scrollables.length != 0) {
        testscrollTop(scrollables[0]);
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

function dragging(ev, solo, leftscreen, rightscreen) {
    ev.stopPropagation();
    ev.preventDefault();
    /*var then = ev.dataTransfer.getData("Text");*/
    var now = ev.clientX;
    var diff = now - then;
    if (currentScreen == leftscreen) {
        if (diff < 0) {
            var string = "translateX(" + diff + "px)";
            document.getElementById(solo).style.transform = string;
        }
    }
    if (currentScreen == rightscreen) {
        if (diff > 0) {
            diff -= document.getElementById("app-screen").clientWidth;
            var string = "translateX(" + diff + "px)";
            document.getElementById(solo).style.transform = string;
        }
    }
}

function drop(ev, solo, leftscreen, rightscreen) {
    ev.preventDefault();
    var width = document.getElementById(rightscreen).clientWidth;
    var now = ev.clientX;
    var then = ev.dataTransfer.getData("Text");
    if (currentScreen == leftscreen) {
        if (then - now >= 40) {
            nice(solo, now - then, -width, -1, 0, "transform", "translateX(", "px)", 5);
            currentScreen = rightscreen;
            loadScreen(rightscreen);
        } else if (then - now > 0) {
            nice(solo, now - then, 0, 1, 0, "transform", "translateX(", "px)", 5);
        }
    } else if (currentScreen == rightscreen) {
        if (now - then >= 40) {
            nice(solo, now - then, width, 1, -width, "transform", "translateX(", "px)", 5);
            currentScreen = leftscreen;
            loadScreen(leftscreen);
        } else if (now - then > 0) {
            nice(solo, now - then, 0, -1, -width, "transform", "translateX(", "px)", 5);
        }
    }
}

/*FUNÇÃO FAVORITA DO DANIEL - NAO MEXER SEM AUTORIZAÇÃO <3*/
function nice(elemId, pos, target, step, offset, atrb, strBefore, strAfter, interval) {
    elem = document.getElementById(elemId);
    count = 0;
    var id = setInterval(function () {
        if (pos == target) {
            clearInterval(id);
        } else {
            pos += step;
            rpos = pos + offset;
            elem.style[atrb] = strBefore + rpos + strAfter;
        }
        count += 0.1;
    }, interval);
}

function pinMotion() {
    nice("pinUser", 77, 20+7, -0.25, 0, "left", "", "%", 100);
    nice("pinUser", 60, 20+17, -0.25, 0, "top", "", "%", 100);
}


/************************************ OBJETOS ************************************/
function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function Solo(id, el) {
    this.id = id;
    this.screens = [el];
    this.addScreen = function (screenID) {
        this.screens.push(screenID);
    };
}

function Person(name, img) {
    this.name = name;
    this.img = img;
    this.distance;
    this.calcDistance = function (i) {
        this.distance = randomNumberGenerator(i * 50, (i + 1) * 50);
    };
}

function Screen(name, id, initFunc, constFuncN, solo, homeButton, header, footer, ...footarg) {
    this.name = name;
    this.id = id;
    this.initFunc = initFunc;
    this.constFuncN = constFuncN;
    this.solo = solo != "" ? solo : id;
    this.homeButton = homeButton;
    this.header = header;
    this.footer = footer;
    this.footarg = footarg;
    this.init = false;
    this.prevScreen;
    this.keepArgs;
    this.initScreen = function (args) {
        if (args == "prevArg")  args = prevScreenArgs;
        if (args != "") this.keepArgs = args;
        if (!this.init) {
            if (this.header) this.addHeader();
            if (this.footer) this.addFooter();
            eval(this.initFunc);
            this.init = true;
        }
        if (this.constFuncN != "") eval(this.constFuncN + "('" + this.keepArgs + "');");
        testscrollTopScreen();
    };
    this.addHeader = function () {
        if (this.header == "clock") {
            addHeader(this.id, ["display: none;", ""]);
        } else {
            addHeader(this.id, ["", this.name]);
        }
    }
    this.addFooter = function () {
        if (this.footer == "true3") {
            addFooter(this.id, 3, this.footarg);
        } else {
            addFooter(this.id, 2, this.footarg);
        }
    }
    var soloO = findSoloWithID(this.solo);
    if (soloO == undefined) {
        swipes.push(new Solo(this.solo, this.id));
    } else {
        soloO.addScreen(this.id);
    }
}
