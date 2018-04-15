function buttonPress(button) {
    document.getElementById('frame').contentWindow.postMessage(button, '*');
}

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};