/*
* By: Aniket Kudale
* Email: aniket.kudale@hotmail.com
* http://www.github.com/aniketkudale
* Javascript Function for Visiting URL Multiple Times
* Dated: 19-04-2014
*/



function Lvisitor(event){
  
	var count = 0; // counting the no. of times the link has been visited.
	var test = setInterval(function() {
	var newTabBrowser = gBrowser.getBrowserForTab(gBrowser.addTab("URL")); // opens new tab - specify URL
	count++; // count incrementer
	document.getElementById("display").value = count;	// displaying the count in browser i.e on add-on toolbar
        newTabBrowser.addEventListener("load", function () {
        gBrowser.removeCurrentTab(); }, true); // eventlistener, which closes the tab after the page is loaded.
	}, 3000); // tab is opened every 3 seconds

 }
