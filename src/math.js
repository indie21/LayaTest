////////////////////////////////////////
// Vector2d

function Vector2d(x,y) {
    this.x = x;
    this.y = y;
}

Vector2d.prototype.LengthSquared = function() {
    return this.x*this.x + this.y*this.y;
};

Vector2d.prototype.Length = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
};

Vector2d.prototype.Add = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
};

////////////////////////////////////////
// Vehicle

function Vehicle(x,y) {
    this.position = new Vector2d(x, y);
    this.velocity = new Vector2d(0, 0);
}

Vehicle.prototype.MoveFrameRate = 30;

Vehicle.prototype.moveUpdate = function() {
    this.position.Add(this.velocity);
};

Vehicle.prototype.BeginMove = function(vec) {
    this.velocity = vec;
    Laya.timer.loop(1000/this.MoveFrameRate, this, this.moveUpdate);
};

Vehicle.prototype.StopMove = function() {
    Laya.timer.clear(this, this.moveUpdate);
};

Vehicle.prototype.Setvelocity = function(vec) {
    this.velocity = Vec;
};
