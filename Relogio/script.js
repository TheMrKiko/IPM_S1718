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

function appendToList() {
    var node = document.createElement("DIV");
    node.innerHTML =
    '<table class="notification">\
        <tr>\
            <td class="notif-icon">\
                <img src="" width="14pt">\
			</td>\
            <td class="notif-text"></td>\
		</tr>\
    </table>';
    table = node.firstElementChild.firstElementChild.getElementsByTagName("TD");
    table[0].firstElementChild.setAttribute("src", notifications[0]["img"]);
    table[1].innerHTML = notifications[0]["name"];
    document.getElementById("notification-bar").appendChild(node);
}

function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}