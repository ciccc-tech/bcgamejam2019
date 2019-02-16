
var mousePos = {}
var sprite;
var lockText;

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
    mousePos = 
    {
        x: 0,
        y: 0
    };


}



var dropZone;
var dragPosition;

function create()
{
    sprite = this.add.sprite(400, 300, 'day_icon');

    // Pointer lock will only work after an 'engagement gesture', e.g. mousedown, keypress, etc.
    game.canvas.addEventListener('mousedown', function () {
        game.input.mouse.requestPointerLock();
    });

    // When locked, you will have to use the movementX and movementY properties of the pointer
    // (since a locked cursor's xy position does not update)
    this.input.on('pointermove', function (pointer) {

        if (this.input.mouse.locked)
        {
            sprite.x += pointer.movementX;
            sprite.y += pointer.movementY;

            // Force the sprite to stay on screen
            sprite.x = Phaser.Math.Wrap(sprite.x, 0, game.renderer.width);
            sprite.y = Phaser.Math.Wrap(sprite.y, 0, game.renderer.height);

            if (pointer.movementX > 0) { sprite.setRotation(0.1); }
            else if (pointer.movementX < 0) { sprite.setRotation(-0.1); }
            else { sprite.setRotation(0); }

            updateLockText(true);
        }
    }, this);

    // Exit pointer lock when Q is pressed. Browsers will also exit pointer lock when escape is
    // pressed.
    this.input.keyboard.on('keydown_Q', function (event) {
        if (game.input.mouse.locked)
        {
            game.input.mouse.releasePointerLock();
        }
    }, 0, this);

    // Optionally, you can subscribe to the game's pointer lock change event to know when the player
    // enters/exits pointer lock. This is useful if you need to update the UI, change to a custom
    // mouse cursor, etc.
    this.input.on('pointerlockchange', function (event) {
        updateLockText(event.isPointerLocked, sprite.x, sprite.y);
    }, 0, this);

    lockText = this.add.text(16, 16, '', {
        fontSize: '20px',
        fill: '#ffffff'
    });
    updateLockText(false);
}

function updateLockText (isLocked)
{
    lockText.setText([
        isLocked ? 'The pointer is now locked!' : 'The pointer is now unlocked.',
        'Sprite is at: (' + sprite.x + ',' + sprite.y + ')',
        'Press Q to release pointer lock.'
    ]);


}



function update () 
{

}


function render () 
{

}
