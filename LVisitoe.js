/* 
 * By: Aniket Kudale
 * Email: aniket.kudale@hotmail.com
 * Javascipt Function for Visiting URL Multiple Times
 * Dated: 20-04-2014
 */



function LVisitor(event){
  var count = 0; // counting the no. of times the link has been visited.

	var test = setInterval(function() {
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"] .getService(Components.interfaces.nsIWindowMediator);
    var mainWindow = wm.getMostRecentWindow("navigator:browser");
	var newTabBrowser = gBrowser.getBrowserForTab(gBrowser.addTab("http://www.google.com/")); // opens new tab
	count++; // count incrementer
	document.getElementById("LVisitor").value = count;		// displaying the count in browser i.e on add-on toolbar
    newTabBrowser.addEventListener("load", function () {
    gBrowser.removeCurrentTab(); }, true); // eventlistener, which closes the tab after the page is loaded. 
	}, 3000); // tab is opened every 3 seconds
	
 }
