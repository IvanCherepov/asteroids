app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");

    this.msg = app.game.score;
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

    app.layer.fillStyle("#fff").font("11px Times New Roman").textAlign("left").fillText("score:  " + this.msg, 580, 23);

  }

};