'use strict';


var ScriptURLS = {
	"jquery" : {
		"url" : "//ajax.googleapis.com/ajax/libs/jquery"
	},

	"reactjs" : {
		"url" : "//cdnjs.cloudflare.com/ajax/libs/react"
	},

	"requirejs" : {
		"url" : "//cdnjs.cloudflare.com/ajax/libs/require.js"
	},

	"yui" : {
		"url" : "//cdnjs.cloudflare.com/ajax/libs/yui"
	},

	"angular" : {
		"url" : "//ajax.googleapis.com/ajax/libs/angularjs"
	},

	"dojo" : {
		"url" : "//ajax.googleapis.com/ajax/libs/dojo"
	},

	"ext" : {
		"url" : "//ajax.googleapis.com/ajax/libs/ext-core"
	},

	"jqueryui" : {
		"url" : "//ajax.googleapis.com/ajax/libs/jqueryui"
	},

	"mootools" : {
		"url" : "//ajax.googleapis.com/ajax/libs/mootools"
	},

	"prototype" : {
		"url" : "//ajax.googleapis.com/ajax/libs/prototype"
	},

	"webfont" : {
		"url" : "//ajax.googleapis.com/ajax/libs/webfont"
	},

	"backbone" : {
		"url" : "//cdnjs.cloudflare.com/ajax/libs/backbone.js"
	},

	"underscorejs" : {
		"url" : "//cdnjs.cloudflare.com/ajax/libs/underscore.js"
	}
}


var ScriptVerions = {
	"jquery" : [
		"2.1.0","2.0.3","2.0.2","2.0.1","2.0.0","1.11.0","1.10.2","1.10.1","1.10.0","1.9.1","1.9.0","1.8.3","1.8.2","1.8.1","1.8.0","1.7.2","1.7.1","1.7.0","1.6.4","1.6.3","1.6.2","1.6.1","1.6.0","1.5.2","1.5.1","1.5.0","1.4.4","1.4.3","1.4.2","1.4.1","1.4.0","1.3.2","1.3.1","1.3.0","1.2.6","1.2.3"
	],

	"angular" : [
		"1.2.15", "1.2.14", "1.2.13", "1.2.12", "1.2.11", "1.2.10", "1.2.9", "1.2.8", "1.2.7", "1.2.6", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.2.0", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1"
	],

	"dojo" : [
		"1.9.3", "1.9.2", "1.9.1", "1.9.0", "1.8.6", "1.8.5", "1.8.4", "1.8.3", "1.8.2", "1.8.1", "1.8.0", "1.7.5", "1.7.4", "1.7.3", "1.7.2", "1.7.1", "1.7.0", "1.6.2", "1.6.1", "1.6.0", "1.5.3", "1.5.2", "1.5.1", "1.5.0", "1.4.5", "1.4.4", "1.4.3", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.3", "1.2.0", "1.1.1"
	],

	"ext" : ["3.1.0", "3.0.0"],

	"backbone" : ["0.3.3", "0.5", "0.5.0", "0.5.1", "0.5.2", "0.5.3", "0.9.0",  "0.9.2",  "0.9.9", "0.9.10", "1.0.0", "1.1.0", "1.1.1", "1.1.2"],

	"mootools" : ["1.4.5", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.1.2", "1.1.1"],

	"prototype" : ["1.7.1.0", "1.7.0.0", "1.6.1.0", "1.6.0.3", "1.6.0.2"],

	"webfont" : [
			"1.5.2", "1.5.0", "1.4.10", "1.4.8", "1.4.7", "1.4.6", "1.4.2", "1.3.0", "1.1.2", "1.1.1", "1.1.0", "1.0.31", "1.0.30", "1.0.29", "1.0.28", "1.0.27", "1.0.26", "1.0.25", "1.0.24", "1.0.23", "1.0.22", "1.0.21", "1.0.19", "1.0.18", "1.0.17", "1.0.16", "1.0.15", "1.0.14", "1.0.13", "1.0.12", "1.0.11", "1.0.10", "1.0.9", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1", "1.0.0"
	],

	"requirejs" : [
			"2.1.11", "2.1.10", "2.1.9", "2.1.8","2.1.6","2.1.5","2.1.4", "2.1.1", "2.0.6","2.0.5", "2.0.2", "1.0.8", "1.0.7", "1.0.5", "1.0.2", "1.0.1"
	],

	"yui" : ["3.15.0", "3.3.0"],

	"reactjs" : ["0.10.0", "0.9.0", "0.8.0", "0.5.2", "0.5.1", "0.5.0", "0.4.2", "0.4.1", "0.3.3", "0.3.2"],

	"underscorejs" : ["1.6.0", "1.5.2", "1.5.1", "1.5.0", "1.4.4", "1.4.3", "1.4.2", "1.4.1"]
};


var ScriptName = {
	"jquery" : "jquery.min.js",
	"yui" : "yui-min.js",
	"requirejs" : "require.js",
	"reactjs" : "react.js",
	"webfont" : "webfont.js",
	"prototype" : "prototype.js",
	"mootools" : "mootools-yui-compressed.js",
	"ext" : "ext-core.js",
	"dojo" : "/dojo/dojo.js",
	"angular" : "angular.min.js",
	"backbone" : "backbone.js",
	"underscorejs" : "underscore.js"

}



function loadScript(selectedLibrary, selectedVersion) {
  
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        
    	var scriptURL = ScriptURLS[selectedLibrary].url+"/"+selectedVersion+"/"+ScriptName[selectedLibrary];
		
        chrome.tabs.sendMessage(
                tabs[0].id,
                { url: scriptURL});
          chrome.pageAction.hide(tabId);
    }
	);
}

function loadVersionsForSelectedLibrary(){

		var versionsForSelectedLibrary = ScriptVerions[$(this).val()];

		if(versionsForSelectedLibrary !== undefined){

			localStorage.setItem("selectedLibrary", $(this).val());

			$(".version > select").empty();

			$.each(versionsForSelectedLibrary, function(index, value){
					$(".version > select")
				         .append($("<option></option>")
				         .attr("value",value)
				         .text(value)).show();		
			});
		}

	}


$(document).ready(function(){
	
	var selectedLibrary = localStorage.getItem("selectedLibrary");
	var selectedVersion = localStorage.getItem("selectedVersion");
	

	$(".version > select").change(function(){
		localStorage.setItem("selectedVersion", $(this).val());
	});

	$(".library > select").change(loadVersionsForSelectedLibrary);


	if(selectedLibrary !== undefined){
		$(".library > select").val(selectedLibrary).trigger("change");	
		$(".version > select").val(selectedVersion).trigger("change");	
	}


	$("#add").on("click",function(){
		loadScript($(".library > select").val(), $(".version > select").val());
	});
});






