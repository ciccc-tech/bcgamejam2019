

function preload()
{

    this.load.baseURL = 'localhost:3000/assets/';
    this.load.crossOrigin = 'anonymous';

    this.load.image('background', 'assets/background.png');
    this.load.image('bar_color', '/assets/bar_color.png');
    this.load.image('bar_frame', '/assets/bar_frame.png');
    this.load.image('building', '/assets/building.png');
    this.load.image('calender', '/assets/calender.png');
    this.load.image('character', '/assets/character.png');
    this.load.image('click_point', '/assets/click_point.png');
    this.load.image('dark_room_block', '/assets/dark_room_block.png');
    this.load.image('day_icon', '../assets/day_icon.png');
    this.load.image('door', '../assets/door.png');
    this.load.image('elevator_room', '../assets/elevator_room.png');
    this.load.image('elevator', '../assets/elevator.png');
    this.load.image('energy_color', '../assets/energy_color.png');
    this.load.image('energy_frame', '../assets/energy_frame.png');
    this.load.image('energy_max', '../assets/energy_max.png');
    this.load.image('floor_block', '../assets/floor_block.png');
    this.load.image('night_icon', '../assets/night_icon.png');
    this.load.image('rough_sketch_ver1.2', '../assets/rough_sketch_ver1.2.png');
    this.load.image('time_frame', '../assets/time_frame.png');
    this.load.image('wall_block', '../assets/wall_block.png');

}

var card;
var dropZone;
var dragPosition;

function loadInitialImages()
{
   var background = this.add.sprite(400, 300, 'background');
}

function create()
  {
    loadInitialImages();
    dropZone = this.add.sprite(500, 0, 'zone');
    dropZone.width = 300;
    dropZone.height = 600;

    card = this.add.sprite(100, 100, 'eye');

    card.inputEnabled = true;
    card.input.enableDrag();

    card.events.onInputOver.add(onOver, this);
    card.events.onInputOut.add(onOut, this);
    card.events.onDragStart.add(onDragStart, this);
    card.events.onDragStop.add(onDragStop, this);

    dragPosition = new Phaser.Point(card.x, card.y);

}

function onOver(sprite, pointer)
{

    sprite.tint = 0xff7777;

}

function onOut(sprite, pointer)
{

    sprite.tint = 0xffffff;

}

function onDragStart(sprite, pointer)
{

    dragPosition.set(sprite.x, sprite.y);

}

function onDragStop(sprite, pointer)
{

    if (!sprite.overlap(dropZone))
    {
        this.add.tween(sprite).to( { x: dragPosition.x, y: dragPosition.y }, 500, "Back.easeOut", true);
    }

}

function update ()
{

}


function render ()
{

}
