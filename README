这是一个Titanium的UI库，会模仿面包旅行的UI做许多界面组件，另外还会带一些工具。使用这个库可以不用太考虑UI，快速堆出一个漂亮的应用来。比较适合团队里没有UI，一个程序员单打独斗的场景。未来会陆续推出多套皮肤。

Clone本仓库后得到的是一个Titanium项目，其中包含组件库和外面的一些示例。直接编译运行即可看到演示效果。

使用本库只需将Resourcs/bread目录拷贝到你项目中的Resources目录里即可。（Alloy项目需拷贝到app/lib目录下。）然后requirej进来，并调用相应地方法创建组件并使用即可：

var ui = require("bread/ui");
var nav = ui.createNavigationView();
var win1 = Ti.UI.createView({backgroundColor: "red"});
nav.openView(win1);

var main = Ti.UI.createWindow();
main.add(nav);
main.open();
