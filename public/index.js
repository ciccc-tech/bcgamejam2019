class MainGame
{
    constructor(config)
    {
        this.game = {}
        gameStartup(config)
    }

    gameStartup(config)
    {
        this.game = new Phaser.Game(config);

    }

    preload ()
    {

    }

    create ()
    {
        this.mousex = 0;
        this.mousey = 0;
            
              
    }

    update ()
    {
        this.mousex = this.game.input.mousePointer.x;
        this.mousey = this.game.input.mousePointer.y;

    }
}
