chrome.runtime.onMessage.addListener(function(request, sender, response) {


 	var s = document.createElement('script');
	s.src = request.url;
	s.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
});





