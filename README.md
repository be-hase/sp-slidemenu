#sp-slidemenu.js.

## ※Caution!!
There seems to be a bug in some old Android devices.

I am sorry. 
I ended up selling the old Android device. Therefore, I will not be able to reproduce the bug. 
So, I do not have to fix the bug yet.

##About
sp-slidemenu.js is a JavaScript library that provides UI of slide menu.

See [demo](http://be-hase.com.s3.amazonaws.com/static/sp-slidemenu/sample/demo1.html)

##Support browser
* Mobile
  - iOS Safari (iOS4+)
  - Android Browser (Android 2.2+)
  - Android Firefox Mobile
  - Android Opera Mobile
  
* PC
  - IE9+
  - Google Chrome
  - Opera
  - Firefox
  - Safari
  
##Getting Started

###1. Download and load.
Download code.  
And load script like below.  

```
<script src="sp-slidemenu-min.js"></script>
```

*sp-slidemenu.js is not dependent other library.

###2. Write HTML

```
<body>
  <div class="slidemenu">
    <div class="slidemenu-header">
      <div>
        Header
      </div>
    </div>
    <div class="slidemenu-body">
      <ul class="slidemenu-content">
        <li><a class="menu-item" href="http://google.com">Menu 1</a></li>
        <li><a class="menu-item" href="http://google.com">Menu 2</a></li>
        <li><a class="menu-item" href="http://google.com">Menu 3</a></li>
      </ul>
    </div>
  </div>
  <div id="main">
    <header id="header">
      <span class="menu-button">
      </span>
    </header>
    <div id="contents">
    </div>
  </div>
</body>
```

* ".slidemenu" element : Required. Bad you can use your favorite selector.
* ".slidemenu-header" element : Optional. if using this, you must use this selector. 
* ".slidemenu-body" element : Required. You must use this selector. 
* ".slidemenu-content" element : Required. You must use this selector.
* ".menu-item" element : Optional. if using this, you must use this selector. When clicked, close slidemenu.
* "#main" element : Required. Bad you can use your favorite selector.  
* ".menu-button" element : Required. Bad you can use your favorite selector. When Clicked, toggle(open or close) slidemenu. 

###3. Write CSS
```
#main {
  z-index: 1;
}
.slidemenu {
  top: 0;
  left: 0;
  width: 240px;
  position: fixed;
  visibility: hidden;
  z-index: -1;
}
.slidemenu .slidemenu-header {
  position: relative;
}
.slidemenu .slidemenu-body {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.slidemenu .slidemenu-content {
  position: relative;
}
```

###4. Write JavaScript

```
SpSlidemenu('#main', '.slidemenu', '.menu-button', {direction: 'left'});
```

###DOM Figure

* **close**

![image1](http://be-hase.com.s3.amazonaws.com/static/img/SpSlidemenu/image1.png)

* **open**

![image1](http://be-hase.com.s3.amazonaws.com/static/img/SpSlidemenu/image2.png)


##Document

###Function

```
SpSlidemenu(main, slidemenu, button, options)
```

* main : Required. HTMLElement or String(CSS Selector)
* slidemenu : Required. HTMLElement or String(CSS Selector)
* button : Required. HTMLElement or String(CSS Selector)
* options : Optional.

*When set string, get first element of result. Not all element.

**exmaple**  

```
var sp_slidemenu = SpSlidemenu('#main', '.slidemenu', '.menu-button', {direction: 'left'});
```

###Option

name | type | default | description
------------ | ------------- | ------------ | ------------
disableCssAnimation | Boolean | false | Use JavaScript Animation. You should set true, when it is a device which has a bug in CSS Animation.
disable3d | Boolean | false | When support 3D transform browser and this option set true, it is not used 3D transform and use 2D transform. You should set true, when it is a device which has a bug in 3D transform(old Android or BlackBerry etc).
direction | String | left | left or right.

###Method
**slideOpen**  
Open slidemenu.

```
var sp_slidemenu = SpSlidemenu('#main', '.slidemenu', '.menu-button', {direction: 'left'});
sp_slidemenu.slideOpen();
```

**slideClose**  
Close slidemenu.

```
var sp_slidemenu = SpSlidemenu('#main', '.slidemenu', '.menu-button', {direction: 'left'});
sp_slidemenu.slideClose();
```


##Demo & Sample

Demo : [Click here!](http://be-hase.com.s3.amazonaws.com/static/sp-slidemenu/sample/demo1.html)
