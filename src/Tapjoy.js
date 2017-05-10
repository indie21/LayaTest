function TapJoy() {
    this.touchStatus = 1;
    this.createInteractiveTarget();
    this.createLogger();
    this.handler=null;
}

TapJoy.prototype.Event = {
    Left: "Left",
    Right: "Right",
    Up: "Up",
    Down: "Down"
};

TapJoy.prototype.Setup = function (handler) {
    this.handler=handler;
};

TapJoy.prototype.createInteractiveTarget = function () {
    var sprite = new Laya.Sprite();
    var Event = Laya.Event;

		sprite.graphics.drawRect(0, 0, MapWidth, MapHeight, "#D2691E");
		sprite.x = MapWidth/2;
		sprite.y = MapHeight/2;
    sprite.width = MapWidth;
    sprite.height = MapHeight;
    sprite.size(MapWidth, MapHeight);
    sprite.pivotX = MapWidth/2;
    sprite.pivotY = MapWidth/2;

    Laya.stage.addChild(sprite);

		//增加鼠标事件
		sprite.on(Event.MOUSE_DOWN, this, this.mouseHandler);
		sprite.on(Event.MOUSE_UP, this, this.mouseHandler);
		sprite.on(Event.CLICK, this, this.mouseHandler);
		sprite.on(Event.RIGHT_MOUSE_DOWN, this, this.mouseHandler);
		sprite.on(Event.RIGHT_MOUSE_UP, this, this.mouseHandler);
		sprite.on(Event.RIGHT_CLICK, this, this.mouseHandler);
		sprite.on(Event.MOUSE_MOVE, this, this.mouseHandler);
		sprite.on(Event.MOUSE_OVER, this, this.mouseHandler);
		sprite.on(Event.MOUSE_OUT, this, this.mouseHandler);
		sprite.on(Event.DOUBLE_CLICK, this, this.mouseHandler);
		sprite.on(Event.MOUSE_WHEEL, this, this.mouseHandler);

    this.sprite = sprite;

};


/**添加提示文本*/
TapJoy.prototype.createLogger = function ()
{
		var txt = new Laya.Text();
		txt.overflow = Text.SCROLL;
		txt.text = "请把鼠标移到到矩形方块,左右键操作触发相应事件\n";
		txt.size(Laya.stage.width, Laya.stage.height);
		txt.pos(10, 50);
		txt.fontSize = 20;
		txt.wordWrap = true;
		txt.color = "#FFFFFF";
		Laya.stage.addChild(txt);

    this.txt =txt;
};


TapJoy.prototype.mouseHandler = function (e) {
    var Event = Laya.Event;
    var x = e.stageX;
    var y = e.stageY;

    switch(e.type) {
    case Event.MOUSE_DOWN:
        this.touchStatus = 2;
        this.prevStageX = e.stageX;
        this.prevStageY = e.stageY;
				break;

		case Event.MOUSE_UP:
        if(this.touchStatus == 2) {
            this.touchStatus = 1;
        }

        if(Math.abs(x - this.prevStageX) > Math.abs(y - this.prevStageY)) {
            if(x < this.prevStageX) {
                this.appendText("\nleft\n");
                this.handler(this.Event.Left);
            }else{
                this.appendText("\nright\n");
                this.handler(this.Event.Right);
            }
        }else{
            if(y < this.prevStageY) {
                this.appendText("\nup\n");
                this.handler(this.Event.Up);
            }else{
                this.appendText("\ndown\n");
                this.handler(this.Event.Down);
            }
        }
				break;
    }
};

TapJoy.prototype.appendText = function (value)
{
		this.txt.text += value;
		this.txt.scrollY = this.txt.maxScrollY;
};

