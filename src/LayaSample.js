var MapWidth = 1024;
var MapHeight = 1024;


Sprite_Example();

function Sprite_Example()
{
    Laya.init(MapWidth, MapHeight);//设置游戏画布宽高、渲染模式。
    Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
    var tapJoy = new TapJoy();
    tapJoy.Setup();
    //var p1 = new Player(100,100);
}

