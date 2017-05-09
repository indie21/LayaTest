Sprite_Example();

function Sprite_Example()
{
    Laya.init(1024, 1024);//设置游戏画布宽高、渲染模式。
    Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
    onInit();
}

function onInit()
{
    var p1 = new Player(512, 512);
}

