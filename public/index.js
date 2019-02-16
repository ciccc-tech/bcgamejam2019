class MainGame
{
    constructor(config)
    {
        this.game = {};
        this.cursors = {};
        this.player = {};
        gameStartup(config);
    }

    gameStartup(config)
    {
        this.game = new Phaser.Game(config);

    }


    preload ()
    {
        game.load.image('background','');
        game.load.image('player','');
        game.load.image('clouds','');
        game.load.image('sky','');

    }

    create ()
    {
        this.mousex = 0;
        this.mousey = 0;


      game.add.tileSprite(0, 0, 1920, 1920, 'background');
      game.add.tileSprite(0, 0, 1920, 1920, 'sky');
      game.add.tileSprite(0, 0, 1920, 1920, 'clouds');

      game.world.setBounds(0, 0, 800, 600);

      game.physics.startSystem(Phaser.Physics.P2JS);

      player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

      game.physics.p2.enable(player);

      cursors = game.input.keyboard.createCursorKeys();

      game.camera.follow(player);
    }

    update ()
    {
        this.mousex = this.game.input.mousePointer.x;
        this.mousey = this.game.input.mousePointer.y;
      player.body.setZeroVelocity();

      if (cursors.up.isDown)
      {
          player.body.moveUp(300)
      }
      else if (cursors.down.isDown)
      {
          player.body.moveDown(300);
      }

      if (cursors.left.isDown)
      {
          player.body.velocity.x = -300;
      }
      else if (cursors.right.isDown)
      {
          player.body.moveRight(300);
    }

    function render() {

        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);

    }
}
