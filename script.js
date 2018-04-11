var stickerPos; //global variable

//ondragstart
function readStickerPos(event) {
    stickerPos = event.clientX;
   // document.getElementById("status").innerHTML = stickerPos;
}


//event listener to allow the record of mouse position while dragging
document.addEventListener("dragover", function(e){
    e = e || window.event;
    posCursorX = e.clientX;
    //console.log("X: "+posCursorX);
}, false);


//ondragend
function registerPosition(event) {
    var posX = event.clientX;
    if (posX < stickerPos) {
	//left
	    
    } else {
	//right
    }
    //document.getElementById("status").innerHTML = "fim: " + posX;
}
