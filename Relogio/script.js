var notifications = [new Notification("à sua procura.", "../assets/joao.jpg"), new Notification("gosta de si.", "../assets/joao.jpg"), new Notification("tem saudades", "../assets/joao.jpg")];
var notifN = 0;
var i = 0;
var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];

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

function soloScreen(screenID) {
    screens = document.getElementsByClassName("screen");
    for (var s = 0; s < screens.length; s++) {
        screens[s].style.display = "none";
    }
    document.getElementById(screenID).style.display = "flex";
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
