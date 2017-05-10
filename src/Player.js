// 玩家对象
function Player(x,y) {
    //math
    this.vehicle = new Vehicle(x, y);
    this.vehicle.BeginMove(new Vector2d(5,0));

    //art
    this.char = new Char(x, y);
    Laya.stage.addChild(this.char.Sprite);
    this.char.BeginUpdatePos(this.vehicle.position);
}

Player.prototype.SetVelocity = function (vec) {
    this.vehicle.SetVelocity(vec);
};
