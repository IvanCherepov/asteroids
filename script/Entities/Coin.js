ENGINE.Coin = function(args) {

  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);

};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  radius: 5,
  duration: 1,
  frame: 0,
  delta: 0,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {

      app.game.score = app.game.score + 5;
      app.playSound('coin');
      this.collection.remove(this)
    }

  },

  step: function(delta) {

    this.delta += delta;
    this.frame = 7 * (this.delta % this.duration / this.duration) | 0;
    //this.frame = Math.floor((this.delta % this.duration / this.duration) *7);

  },

  render: function(delta) {

    var sprite = [this.frame * 10, 0, 10, 10];
    app.layer.drawRegion(app.images.coins, sprite, this.x, this.y);

  }
};