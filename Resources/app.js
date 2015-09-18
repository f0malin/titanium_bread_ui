// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var ui = require("bread/ui");

var win1 = Ti.UI.createView({backgroundColor: "red", title: "win1"});
var nav = new ui.createNavigationView();

nav.addEventListener("viewshow", function(e) {
    Ti.API.debug("view show " + e.title);
});
nav.addEventListener("viewhide", function(e) {
    Ti.API.debug("view hide " + e.title);
});

nav.openView(win1);

var win2 = Ti.UI.createView({backgroundColor: "blue", title: 'win2'});
win1.addEventListener("click", function() {
    nav.openView(win2);
});

var win3 = Ti.UI.createView({backgroundColor: "green", title: "win3"});
win2.addEventListener("click", function() {
    nav.openView(win3);
})

win3.addEventListener("click", function() {
    nav.closeView(win3, function() {
        nav.closeView(win2);
    });
});


var home = Ti.UI.createWindow();
home.add(nav);
home.open();