'use strict';

console.log('\'Allo \'Allo! Popup');


function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

// Called when the user clicks on the browser action.
document.getElementById("add").addEventListener("click",clickHandler);



