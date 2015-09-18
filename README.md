## 介绍

这是一个Titanium的UI库，会模仿面包旅行的UI做许多界面组件，另外还会带一些工具。使用这个库可以不用太考虑UI，快速堆出一个漂亮的应用来。比较适合团队里没有UI，一个程序员单打独斗的场景。未来会陆续推出多套皮肤。

Clone本仓库后得到的是一个Titanium项目，其中包含组件库和外面的一些示例。直接编译运行即可看到演示效果。

使用本库只需将Resourcs/bread目录拷贝到你项目中的Resources目录里即可。（Alloy项目需拷贝到app/lib目录下。）然后requirej进来，并调用相应地方法创建组件并使用即可：

```js
var ui = require("bread/ui");
var nav = ui.createNavigationView();
var win1 = Ti.UI.createView({backgroundColor: "red"});
nav.openView(win1);

var main = Ti.UI.createWindow();
main.add(nav);
main.open();
```

更多的请参考app.js以及后面的文档，组件会不断地增加。

*小技巧：要去除android的actionbar，只需将tiapp.xml中的navbar-hidden改成false就行：*

```xml
<navbar-hidden>true</navbar-hidden>
```

## 文档

### NavigationView 导航容器

导航容器只要你给他一个区域（它实际上是一个view），就可以往这个区域push和pop views。支持右进右出效果，并且当view进入是，会触发前一个view的hide事件和后一个view的show事件，使得每个view的show/hide事件可以成对，方便集成友盟等统计。

#### 初始化

```js
var nav = ui.createNavigationView();
```

#### 滑入一个view

```js
nav.openView(someview);
```

#### 滑出一个view

```js
nav.closeView(someview);
```

### 更多组件正在路上。。。。。
