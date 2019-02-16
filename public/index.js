

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('eye', 'pics/lance-overdose-loader_eye.png');
    game.load.image('zone', 'sprites/platform.png');

}



var dropZone;
var dragPosition;

function create()
  {

    dropZone = game.add.sprite(500, 0, 'zone');
    dropZone.width = 300;
    dropZone.height = 600;

    inputEnabled = true;
    input.enableDrag();

    events.onInputOver.add(onOver, this);
    events.onInputOut.add(onOut, this);
    events.onDragStart.add(onDragStart, this);
    events.onDragStop.add(onDragStop, this);

    dragPosition = new Phaser.Point x,   y);
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
