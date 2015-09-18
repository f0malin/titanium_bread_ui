var ui = {};

ui.createNavigationView = function(props) {
    var nav = Ti.UI.createView(props);

    var getScreenDimension = function() {
        this.removeEventListener("postlayout", getScreenDimension);
        this.$screenWidth = this.size.width;
        this.$screenHeight = this.size.height;
        Ti.API.info("nav got dimension: " + this.$screenWidth + "x" + this.$screenHeight);
    };
    nav.addEventListener("postlayout", getScreenDimension);

    nav.getTopView = function() {
        if (this.children.length > 0) {
            return this.children[this.children.length - 1];
        } else {
            return null;
        }
    };

    nav.openView = function(view) {
        var topView = this.getTopView();
        if (topView && topView.title) {
            this.fireEvent("viewhide", {title: topView.title});
        }
        
        if (this.$screenWidth) {
            view.width = this.$screenWidth;
            view.left = this.$screenWidth;
            this.add(view);
            view.animate({left:0, duration: 200});
        } else {
            this.add(view);
        }

        if (view.title) {
            this.fireEvent("viewshow", {title: view.title});
        }
    };

    nav.closeView = function(view, callback) {
        if (view.title) {
            this.fireEvent("viewhide", {title: view.title});
        }

        if (this.$screenWidth) {
            view.animate({left: this.$screenWidth, duration: 200}, function() {
                nav.remove(view);
                var topView = nav.getTopView();
                if (topView && topView.title) {
                    nav.fireEvent("viewshow", {title: topView.title});
                }
                if (callback) {
                    callback();
                }
            });
        } else {
            this.remove(view);
            var topView = this.getTopView();
            if (topView && topView.title) {
                this.fireEvent("viewshow", {title: topView.title});
            }
            if (callback) {
                callback();
            }
        }
    };

    return nav;
};

module.exports = ui;