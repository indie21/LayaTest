////////////////////////////////////////
// Char

function Char(x,y) {
    var shape = new laya.display.Sprite();
    shape.graphics.drawRect(0, 0, 20, 20, "#ccff00", "#ff0000", 2);
    shape.x = x;
    shape.y = y;
    shape.width = 20;
    shape.height = 20;
    shape.pivotX = 10;
    shape.pivotY = 10;
    this.Sprite = shape;
}

Char.prototype.BeginUpdatePos = function(v) {
    Laya.timer.frameLoop(1, this, function(){
        this.Sprite.x = v.x;
        this.Sprite.y = v.y;
    });
};
