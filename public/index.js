
var mousePos = {}
var sprite;
var lockText;

function preload()
{

    this.load.baseURL = 'localhost:3000';
    this.load.crossOrigin = 'anonymous';

    this.load.image('background', '/assets/background.png');
    // this.load.image('bar_color', '/assets/bar_color.png');
    // this.load.image('bar_frame', '/assets/bar_frame.png');
    // this.load.image('building', '/assets/building.png');
    // this.load.image('calender', '/assets/calender.png');
    // this.load.image('character', '/assets/character.png');
    // this.load.image('click_point', '/assets/click_point.png');
    // this.load.image('dark_room_block', '/assets/dark_room_block.png');
    // this.load.image('day_icon', '/assets/day_icon.png');
    // this.load.image('door', '../assets/door.png');
    // this.load.image('elevator_room', '../assets/elevator_room.png');
    // this.load.image('elevator', '../assets/elevator.png');
    // this.load.image('energy_color', '../assets/energy_color.png');
    // this.load.image('energy_frame', '../assets/energy_frame.png');
    // this.load.image('energy_max', '../assets/energy_max.png');
    // this.load.image('floor_block', '../assets/floor_block.png');
    // this.load.image('night_icon', '../assets/night_icon.png');
    // this.load.image('rough_sketch_ver1.2', '../assets/rough_sketch_ver1.2.png');
    // this.load.image('time_frame', '../assets/time_frame.png');
    // this.load.image('wall_block', '../assets/wall_block.png');

}


var card;
var dropZone;
var dragPosition;

function loadInitialImages()
{
   var background = this.add.image(400, 300, 'background');
}

function create()
  {
    loadInitialImages();
    dropZone = game.add.sprite(500, 0, 'zone');
    dropZone.width = 300;
    dropZone.height = 600;

    card = game.add.sprite(100, 100, 'eye');

        if (this.input.mouse.locked)
        {
            sprite.x += pointer.movementX;
            sprite.y += pointer.movementY;

            // Force the sprite to stay on screen
            sprite.x = Phaser.Math.Wrap(sprite.x, 0, game.renderer.width);
            sprite.y = Phaser.Math.Wrap(sprite.y, 0, game.renderer.height);

    dragPosition = new Phaser.Point(card.x, card.y);
}
}


function onOver(sprite, pointer) {

    sprite.tint = 0xff7777;

}


function onOut(sprite, pointer) {


}

function onDragStart(sprite, pointer) {

}

function update ()
{

}

function onDragStop(sprite, pointer) {

    if (!sprite.overlap(dropZone))
    {
        game.add.tween(sprite).to( { x: dragPosition.x, y: dragPosition.y }, 500, "Back.easeOut", true);
    }

}

function update ()
{
}

function render ()
{
}


function render ()
 {

}




  var game = new Phaser.Game(config);
