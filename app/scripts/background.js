'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);

});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.pageAction.show(tabId);
});


chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
    	alert("request.directive");
        switch (request.directive) {
        case "popup-click":
         
         var responseValueJs =    $.ajax({
		        type: "GET",
		        url: "http://code.jquery.com/jquery-1.11.0.min.js",
		        cache: false,
		        async: false
		    }).responseText;

         	console.log(responseValueJs);
             chrome.tabs.executeScript(null, { // defaults to the current tab
                 file: "scripts/jquery-1.9.1.js", // script to inject into page and run in sandbox
                 allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
             });
         //   sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);


console.log('\'Allo \'Allo! Event Page for Page Action');
