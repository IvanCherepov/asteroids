ENGINE.Powerup = function(args) {

  Utils.extend(this, {
    type: "medikit"
  }, args);

  this.sprites = {
    "medikit" : [106, 69, 9, 10]
    //"medikit" : [130, 66, 15, 15]
  }

  this.sprite = this.sprites[this.type];
};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,

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

  },

  render: function(delta) {

    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);

  }
};