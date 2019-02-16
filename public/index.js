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
        this.game.load.image('background','');
        this.game.load.image('player','');
        this.game.load.image('clouds','');
        this.game.load.image('sky','');

    }

    create ()
    {
        this.mousex = 0;
        this.mousey = 0;


      this.game.add.tileSprite(0, 0, 1920, 1920, 'background');
      this.game.add.tileSprite(0, 0, 1920, 1920, 'sky');
      this.game.add.tileSprite(0, 0, 1920, 1920, 'clouds');

      this.game.world.setBounds(0, 0, 800, 600);

      this.game.physics.startSystem(Phaser.Physics.P2JS);

      this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

      this.game.physics.p2.enable(this.player);

      this.cursors = this.game.input.keyboard.createCursorKeys();

      this.game.camera.follow(this.player);
    }

    update ()
    {
        this.mousex = this.game.input.mousePointer.x;
        this.mousey = this.game.input.mousePointer.y;
        this.player.body.setZeroVelocity();

      if (this.cursors.up.isDown)
      {
          this.this.player.body.moveUp(300)
      }
      else if (this.cursors.down.isDown)
      {
          this.player.body.moveDown(300);
      }

      if (this.cursors.left.isDown)
      {
          this.player.body.velocity.x = -300;
      }
      else if (this.cursors.right.isDown)
      {
          this.player.body.moveRight(300);
    }

    function render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
        this.game.debug.spriteCoords(this.player, 32, 500);

    }
}
