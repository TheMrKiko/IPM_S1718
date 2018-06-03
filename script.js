var hover;

function startMTEvents(dir) {
    hover = setInterval(buttonPress, 50, dir);
}

function endMTEvents() {
    clearInterval(hover);
}

function buttonPress(button) {
    document.getElementById('frame').contentWindow.postMessage(button, '*');
}

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};