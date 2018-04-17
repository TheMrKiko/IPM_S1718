var notifications = [new Notification("à sua procura.", "../assets/joao.jpg"), new Notification("gosta de si.", "../assets/joao.jpg"), new Notification("tem saudades", "../assets/joao.jpg")];
var notifN = 0;
var i = 0;
var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];
var screens = [new Screen("Lock", "lockScreen", "", "lockScreen", ""),
               new Screen("Main", "mainScreen", "appendToList()", "mainSolo", "lockScreen"), 
               new Screen("App", "appScreen", "console.log('app')", "mainSolo", "mainScreen"),
               new Screen("Friends", "friendScreen", "showPeople();", "friendScreen", "appScreen")
            ];
var currentSolo;
var currentScreen = "mainScreen";
/*var currentSwipe;*/

function loadClocks() {
    var clocks = document.getElementsByClassName("clock");
    for (var i = 0; i<clocks.length; i++) {
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

function cloneElement(classModel) {
    var model = document.getElementById("models").getElementsByClassName(classModel)[0].firstElementChild;
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

function showPeople() {
	for (var i = 0; i < people.length; i++) {
        cloneElementTo("person-model", "gridFriends", people[i]["img"], people[i]["name"], people[i]["distance"]);
    }
}

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
	this.distance = rD();
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function randomNumberGenerator(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1) + myMin);
}

function randomDistance() {
  var distances = document.getElementsByClassName("distance");
  for (var d=0; d<distances.length; d++) {
    distances[d].innerHTML = randomNumberGenerator(d * 150, (d+1) * 150);
  }

}

function rD() {
	console.log("oi " + i);
	var distance = randomNumberGenerator(i * 50, (i+1) * 50);
	i = i + 1;
	return distance;
}

function Screen(name, id, initf, solo, homeButton /*, header, footer*/) {
    this.name = name;
    this.id = id;
    this.inift = initf;
    this.solo = solo;
    this.homeButton = homeButton;
    /*this.header = header;*/
    /*this.footer = footer;*/
    this.loadScreen = function () {
        eval(initf);
    };
}

function findScreenWithID(screenID) {
    function findScreen(screen) {
        return screen["id"] == screenID;
    }
    return screens.find(findScreen);
}

//loadscreen loada solos
//loadsolo recebe argumento do screen se houver swipe e faz move

function loadScreen(screenID) {
    var screenObj = findScreenWithID(screenID);
    if (screenObj == undefined) return;
    screenObj.loadScreen();
    loadSolo(screenID, screenObj["solo"]);
}

function loadSolo(screenID, soloID) {
    //se swipe igual, anima; se diferente, move logo
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
            loadScreen(findScreenWithID(currentScreen).homeButton);
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
        } else if (then - now > 0){
            swipe(document.getElementById("mainSolo"), now - then, 0, 1, 0);
        }
    } else if (currentScreen == "appScreen") {
        if (now - then >= 50) {
            swipe(document.getElementById("mainSolo"), now - then, width, 1, -width);
            currentScreen = "mainScreen";
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
    }, 5);
}
