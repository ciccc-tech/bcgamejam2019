var config = {
    type: Phaser.AUTO,
    width: 1336,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};



var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'assets/background.png');

}

function create ()
{
    //  A simple background for our game
    this.add.image(668, 384, 'background');


}

function update ()
{

}
