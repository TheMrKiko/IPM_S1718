function showClock() { 
    var time = new Date(); 
    document.getElementById("clock").innerHTML = time.getHours() + ":" + time.getMinutes(); 
    setTimeout(showClock, 1000); 
} 
