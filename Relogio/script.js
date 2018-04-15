var notifications = [new Notification("Ola", "../Site/assets/student3.png")];

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
    screens = document.getElementsByClassName("screen");
    for (var s = 0; s < screens.length; s++) {
        screens[s].style.display = "none";
    }
    document.getElementById(screenID).style.display = "flex";
}

function randomDistanceGenerator(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1) + myMin);
}

function randomDistance() {
  var distances = document.getElementsByClassName("distance");
  for (var d=0; d<distances.length; d++) {
    distances[d].innerHTML = randomDistanceGenerator(10,500);
  }
  var toSortDistance = document.getElementById('gridFriends').children; //NodeList de friends

  toSortDistance = Array.prototype.slice.call(toSortDistance, 0); //NodeList to Array

  toSortDistance.sort(function(a, b) { //a, b sao friends
    var aord = parseInt(a.getElementsByClassName("distance")[0].texContent);
    var bord = parseInt(b.getElementsByClassName("distance")[0].texContent);
    return aord- bord;
  });
}

function randomDistance2() {
  var distances = document.getElementsByClassName("distance");
  var arr = [];
  for (var i=0; i<distances.length; i++) {
    arr.push(randomDistanceGenerator(10,500));
  }

}
