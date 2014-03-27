'use strict';


var scripts = {
	"jquery" : {
		"url" : "//ajax.googleapis.com/ajax/libs/jquery"
	} 
}


var scriptVerions = {
	"jquery" : [
		"2.1.0","2.0.3","2.0.2","2.0.1","2.0.0","1.11.0","1.10.2","1.10.1","1.10.0","1.9.1","1.9.0","1.8.3","1.8.2","1.8.1","1.8.0","1.7.2","1.7.1","1.7.0","1.6.4","1.6.3","1.6.2","1.6.1","1.6.0","1.5.2","1.5.1","1.5.0","1.4.4","1.4.3","1.4.2","1.4.1","1.4.0","1.3.2","1.3.1","1.3.0","1.2.6","1.2.3"
	]
};


var scriptName = {
	"jquery" : "jquery.min.js"
}

$(".library > select").change(function(){

	var versionsForSelectedLibrary = scriptVerions[$(this).val()];

	$.each(versionsForSelectedLibrary, function(index, value){
			$(".version > select")
		         .append($("<option></option>")
		         .attr("value",value)
		         .text(value));		
	})
})


function loadScript(e) {
  
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        
    	var scriptURL = scripts[$(".library > select").val()].url+"/"+$(".version > select").val()+"/"+scriptName[$(".library > select").val()];

        chrome.tabs.sendMessage(
                tabs[0].id,
                { url: scriptURL});
        window.close();
    }
	);
}

$("#add").on("click",function(){
	loadScript();
});



