

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('eye', 'pics/lance-overdose-loader_eye.png');
    game.load.image('zone', 'sprites/platform.png');

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
