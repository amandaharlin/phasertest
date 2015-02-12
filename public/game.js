'use strict';

var game,
  bblumps;

function preload() {
  game.load.image('amanda', 'bb.jpg');
}

function create() {
  
  game.physics.startSystem(Phaser.Physics.Arcade);

  bblumps = game.add.sprite(game.world.centerX, game.world.centerY, 'amanda');
  bblumps.anchor.set(0.5);

  game.physics.arcade.enable(bblumps);
}


function render() {
  game.debug.inputInfo(32, 32);
}

function update() {
  var mouse = game.input.activePointer,
    awayFromMouse = game.physics.arcade.distanceToPointer(bblumps, mouse) > 8;

  if (awayFromMouse) {
    game.physics.arcade.moveToPointer(bblumps, 300);
  } else {
    bblumps.body.velocity.set(0);
  }

}

game = new Phaser.Game(960, 780, Phaser.AUTO, 'phaser test', {
  preload: preload,
  create: create,
  render: render,
  update: update
});