// this is our config for the game, it will be passed to phaser when we create it

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





// here we create an insteance of the phaser engine
var game = new Phaser.Game(config);


// here we define some empty objects, we will load stuff into them later
// we do it here, so it is global scope and we can access from any function



// init is the very first function called when your State starts up.
//It's called before preload, create or anything else.
//If you need to route the game away to another State you could do so here,
//or if you need to prepare a set of variables or objects before the preloading starts.
init()
{
  this.background = {}
  this.building = {}
  this.elevator_room = {}
  this.elevator = {}
}






//loadRender is called during the Loader process.
// This only happens if you've set one or more assets to load in the preload method.
//The difference between loadRender and render is that any objects you render in this method
// you must be sure their assets exist first.
loadRender()
{}



//loadUpdate is called during the Loader process.
// This only happens if you've set one or more assets to load in the preload method.
loadUpdate()
{}


//This method will be called if the core game loop is paused.
paused()
{}


// pauseUpdate is called while the game is paused instead of preUpdate, update and postUpdate.
pauseUpdate()
{}


//preload is called first. Normally you'd use this to load your game assets
//(or those needed for the current State)
// You shouldn't create any objects in this method that require assets that you're also loading in this method,
// as they won't yet be available.
preload()
{}

//The preRender method is called after all Game Objects have been updated, but before any rendering takes place.
preRender()
{}


//Nearly all display objects in Phaser render automatically, you don't need to tell them to render.
// However the render method is called AFTER the game renderer and plugins have rendered,
// so you're able to do any final post-processing style effects here. Note that this happens before plugins
// postRender takes place.
render()
{}


// If your game is set to Scalemode RESIZE then each time the browser resizes it will call this function,
// passing in the new width and height.
resize()
{}

//This method will be called when the core game loop resumes from a paused state.
resumed()
{}


//This method will be called when the State is shutdown (i.e. you switch to another state from this one).
shutdown()
{}


//The update method is left empty for your own use.
//It is called during the core game loop AFTER debug, physics, plugins and the Stage have had their preUpdate methods
//called. If is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles and Plugins have had their postUpdate methods called.
update()
{}








// this function is called by phaser after (new PhaserGame.....) and is load to preload the assets we will need.
function preload ()
  {
    // load image that is the background layer
  this.load.image('background', 'assets/background.png');

  // load image that represents our building
  this.load.image('building', 'assets/building.png');

  // load image that represent our 'elevator area'
  this.load.image('elevator_room', 'assets/elevator_room.png');

  // load the image that represent our 'elevator room'
  this.load.image('elevator', 'assets/elevator.png');

  }

// create is called once preload has completed,
// this includes the loading of any assets from the Loader.

function create ()
    {
    //  A simple background for our game

    this.background =      this.add.image((config.width / 2), (config.height / 2), 'background');
    this.building =        this.add.image((config.width / 1.5), (config.height / 2), 'building');
    this.elevator_room =   this.add.image((config.width/ 2.8), (config.height / 2), 'elevator_room');
    this.elevator =        this.add.image((config.width/2.8), (config.height / 1.175), 'elevator');

    }


// this function is called per frame and is used to 'update' game state
function update ()
  {

  }
