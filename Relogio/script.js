function showClock(clock) {
    var time = new Date();
    document.getElementById(clock).innerHTML = "";
    if (time.getHours() < 10) {
        document.getElementById(clock).innerHTML += "0";
    } 
    document.getElementById(clock).innerHTML += time.getHours() + ":";
    if (time.getMinutes < 10) {
        document.getElementById(clock).innerHTML = "0";
    }
    document.getElementById(clock).innerHTML += time.getMinutes();
    setTimeout(function() {
        showClock(clock);
    }, 1000);
}

function appendToList() {
    var node = document.createElement("DIV");
    var textnode = document.createTextNode("Notification");
    node.appendChild(textnode);
    document.getElementById("notifaction-bar").appendChild(node);
}
