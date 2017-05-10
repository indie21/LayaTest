var MapWidth = 1024;
var MapHeight = 1024;

Laya.init(MapWidth, MapHeight);//设置游戏画布宽高、渲染模式。
Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。

var tapJoy = new TapJoy();

tapJoy.Setup(function(e){
    switch(e) {
    case tapJoy.Event.Up:
        p1.SetVelocity(new Vector2d(0,5));
        break;
    case tapJoy.Event.Down:
        p1.SetVelocity(new Vector2d(0,-5));
        break;
    case tapJoy.Event.Left:
        p1.SetVelocity(new Vector2d(-5,0));
        break;
    case tapJoy.Event.Right:
        p1.SetVelocity(new Vector2d(5,0));
        break;
    }
});

var p1 = new Player(100,100);
