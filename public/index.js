

function preload()
{

    game.load.baseURL = 'localhost:3000/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('background', '../assets/background.png');
    game.load.image('bar_color', '../assets/bar_color.png');
    game.load.image('bar_frame', '../assets/bar_frame.png');
    game.load.image('building', '../assets/building.png');
    game.load.image('calender', '../assets/calender.png');
    game.load.image('character', '../assets/character.png');
    game.load.image('click_point', '../assets/click_point.png');
    game.load.image('dark_room_block', '../assets/dark_room_block.png');
    game.load.image('day_icon', '../assets/day_icon.png');
    game.load.image('door', '../assets/door.png');
    game.load.image('elevator_room', '../assets/elevator_room.png');
    game.load.image('elevator', '../assets/elevator.png');
    game.load.image('energy_color', '../assets/energy_color.png');
    game.load.image('energy_frame', '../assets/energy_frame.png');
    game.load.image('energy_max', '../assets/energy_max.png');
    game.load.image('floor_block', '../assets/floor_block.png');
    game.load.image('night_icon', '../assets/night_icon.png');
    game.load.image('rough_sketch_ver1.2', '../assets/rough_sketch_ver1.2.png');
    game.load.image('time_frame', '../assets/time_frame.png');
    game.load.image('wall_block', '../assets/wall_block.png');

}


var card;
var dropZone;
var dragPosition;

function create()
  {

    dropZone = game.add.sprite(500, 0, 'zone');
    dropZone.width = 300;
    dropZone.height = 600;

    card = game.add.sprite(100, 100, 'eye');

    card.inputEnabled = true;
    card.input.enableDrag();

    card.events.onInputOver.add(onOver, this);
    card.events.onInputOut.add(onOut, this);
    card.events.onDragStart.add(onDragStart, this);
    card.events.onDragStop.add(onDragStop, this);

    dragPosition = new Phaser.Point(card.x, card.y);
}



function onOver(sprite, pointer) {

    sprite.tint = 0xff7777;

}

function onOut(sprite, pointer) {

    sprite.tint = 0xffffff;

}

function onDragStart(sprite, pointer) {

    dragPosition.set(sprite.x, sprite.y);

}

function onDragStop(sprite, pointer) {

    if (!sprite.overlap(dropZone))
    {
        game.add.tween(sprite).to( { x: dragPosition.x, y: dragPosition.y }, 500, "Back.easeOut", true);
    }

}

function update () {

}


function render () {

}
