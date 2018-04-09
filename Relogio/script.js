function showClock() {
    var time = new Date();
    document.getElementById("clock").innerHTML = "";
    if (time.getHours() < 10) {
        document.getElementById("clock").innerHTML += "0";
    } 
    document.getElementById("clock").innerHTML += time.getHours() + ":";
    if (time.getMinutes < 10) {
        document.getElementById("clock").innerHTML = "0";
    }
    document.getElementById("clock").innerHTML += time.getMinutes();
    setTimeout(showClock, 1000);
}