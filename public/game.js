var API_StartGame = 'https://bcgamejam2019.herokuapp.com/game/start'




var ImagesToLoad = [
  ['background', 'assets/background.png'],
  ['building', 'assets/building.png'],
  ['elevator', 'assets/elevator.png'],
  ['elevator_room', 'assets/elevator_room.png'],
  ['bar_color', 'assets/bar_color.png'],
  ['bar_frame', 'assets/bar_frame.png'],
  ['calendar', 'assets/calendar.png'],
  ['character', 'assets/character.png'],
  ['character_left', 'assets/character_left.png'],
  ['click_point', 'assets/click_point.png'],
  ['dark_room_block', 'assets/dark_room_block.png'],
  ['day_icon', 'assets/day_icon.png'],

  ['door', 'assets/door.png'],
  ['energy_color', 'assets/energy_color.png'],
  ['energy_frame', 'assets/energy_frame.png'],
  ['energy_max', 'assets/energy_max.png'],
  ['floor_block', 'assets/floor_block.png'],
  ['game_title', 'assets/game_title.png'],
  ['light', 'assets/light.png'],
  ['next_destination', 'assets/next_destination.png'],
  ['night_icon', 'assets/night_icon.png'],
  ['norwester', 'assets/norwester.otf'],
  ['pointer', 'assets/pointer.png'],
  ['rough_sketch_ver1.2', 'assets/rough_sketch_ver1.2.jpg'],
  ['time_frame', 'assets/time_frame.png']
];



var SpritesToLoad = [
  ['pointer','assets/pointer.png'],
  ['character','assets/character.png'],
  ['elevator','assets/elevator.png']
];

var JSONToLoad = [
   [1,2]
]


var MusicToLoad = [
  ['fluorescent_switch1', 'assets/fluorescent_switch1.mp3'],
    ['aibackground', 'assets/aibackground.wav'],
  ['walk-asphalt2', 'assets/walk-asphalt2.mp3'],


];

var SoundFXToLoad = [
  ['elevator_sound', 'assets/elevator_sound.wav'],
  ['click_sound', 'assets/click_sound.wav'],

  ['gameover', 'assets/gameover.wav']
];




// =====================================================================================================
// NOTE: BaseScene will extend from here, but all other Scene classes should extend from base scene
class Scene extends Phaser.Scene
  {
    // used by function log to format the date/time before it is shown to console
    static formatDate(date)
      {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = minutes < 10 ? '0'+seconds : seconds;

        var strTime = hours + ':' + minutes + '.' + seconds + "[" + ampm + "]";
        return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
      }

 static _preloadAssetImages(fromScene, assetList2DArray)
  {
  for (var i = 0; i < assetList2DArray.length; i++)
    {
    this.log("Preloading Image: " + assetList2DArray[i][0] + " from " + assetList2DArray[i][1]);
    fromScene.load.image(assetList2DArray[i][0], assetList2DArray[i][1]);
    }
  }

  static _preloadAssetSprites(fromScene, assetList2DArray)
  {
     for (var i = 0; i < assetList2DArray.length; i++)
       {
       this.log("Preloading Sprites: " + assetList2DArray[i][0] + " from " + assetList2DArray[i][1]);

       fromScene.load.image(assetList2DArray[i][0], assetList2DArray[i][1]);
       }
  }


  static _preloadAssetMusic(fromScene, assetList2DArray)
  {
     for (var i = 0; i < assetList2DArray.length; i++)
       {
       this.log("Preloading Music: " + assetList2DArray[i][0] + " from " + assetList2DArray[i][1]);

       fromScene.load.image(assetList2DArray[i][0], assetList2DArray[i][1]);
       }
  }

  static _switchScene(fromScene, toSceneName)
    {
    this.log("SWITCHING TO SCENE: [" + toSceneName +"]")
    fromScene.scene.start(toSceneName);
    Scene._SaveData(fromScene,"test","test");
    }

  static _SaveData(fromScene, Key,Value)
    {
    this.log("SCENE SAVE DATA: " + Key + ": " + Value);
    fromScene.data.set(Key, Value);
    }

  static _LoadData(fromScene, Key)
    {
    this.log("SCENE LOAD DATA: " + Key,fromScene);
    return fromScene.data.get(Key);
    }

  // static log function that is accessable from all scenes since all scenes derive from the Scene class
  static log(message, from)
    {// output date/time and debug message
    var d = new Date();
    var aTimeOfMessage = this.formatDate(d);
    if (from === undefined)
      {
      console.log(aTimeOfMessage+ ":\t" + message);
      }
    else
      {
      console.log(aTimeOfMessage+ ":\t" + "[" + from + "]:\t\t" + message);
      }
    }
  }
// =====================================================================================================



// =====================================================================================================
// This is the BaseScene, all Game Scenes will extend from here

class BaseScene extends Scene
  {
  log(message, from)
      {
        Scene.log(message,from)
      }

  init ()
        {
        this.log("init Called",this.name);
        }

  preload ()
        {
        this.log("Preload Called",this.name);
        }

  create ()
          {
          this.log("Create Called",this.name);
          }
  }
// =====================================================================================================


// This Class will describe the 'default' scene, that is, the first scene
// that gets started when our game loads
class DefaultScene extends BaseScene
  {


    constructor ()
    {
        super('DefaultScene');
        this.name = 'DefaultScene';
        this.log("Constructor Called",this.name);

        // load the next scene after 3 seconds
        setTimeout(function(){   game.scene.start('GameScene'); }, 3000);
    }

    init ()
      {
      this.log("Init Called", this.name);
      }

    preload ()
    {
      this.log("Preload Called", this.name);

      Scene._preloadAssetImages(this,ImagesToLoad);
      Scene._preloadAssetSprites(this,SpritesToLoad);
      Scene._preloadAssetMusic(this, MusicToLoad);

    }

    create ()
    {
        this.log("Create Called", this.name);

          this.background = new BackgroundWidget(this,'background',(config.width / 2), (config.height / 2));

        this.music = this.sound.add('aibackground');
        this.music.play({loop:true});


    }

    update(time,delta)
      {
      //this.log(time);
      }
}
// =====================================================================================================




// This Class will describe the 'Title' scene
class TitleScene extends BaseScene
  {

    constructor ()
    {
        super('TitleScene');
        this.name = 'TitleScene';
        this.log("Constructor Called",this.name);

    }

    init ()
      {
        this.log("init Called",this.name);
      }

    preload ()
    {
        this.log("preload Called",this.name);
        Scene._preloadAssetImages(this,ImagesToLoad);
        Scene._preloadAssetSprites(this,SpritesToLoad);

    }

    create ()
    {
          this.log("Create Called",this.name);

    }

    update(time,delta)
      {
      //this.log(time);
      }
}
// =====================================================================================================




class GameScene extends BaseScene
  {

    constructor ()
    {
        super('GameScene');
        this.name = 'GameScene';
        this.log("Constructor Called",this.name);
    }

    init ()
      {

        this.log("init Called",this.name);

        this.background = {}
        this.building = {}
        this.elevator_room = {}
        this.elevator = {}
        this.characters = []
        this.charCount = 10;

        this.lockText = ""

      }


    preload ()
      {
        this.log("preload Called",this.name);
        Scene._preloadAssetImages(this,ImagesToLoad);
        Scene._preloadAssetSprites(this,SpritesToLoad);

    }

    create ()
      {
      this.log("Create Called",this.name);
      this.input.mouse.capture = true;
      //  A simple background for our game
      //this.background =      this.add.image((config.width / 2), (config.height / 2), 'background');
      this.background = new BackgroundWidget(this,'background',(config.width / 2), (config.height / 2));

      this.building =        this.add.image((config.width / 1.5), (config.height / 2), 'building');
      this.elevator_room =   this.add.image((config.width/ 2.8), (config.height / 2), 'elevator_room');
      this.elevator =        this.add.image((config.width/2.8), (config.height / 1.175), 'elevator');

      // draw characters
      var x = 10;
      for (var i = 0; i < this.charCount; i++)
          {
          var aSprite = this.add.sprite(x, 10, 'character')
          x = x + 10;
          this.characters.push(aSprite);
          }
      //Scene._switchScene(this,"DefaultScene");
      this.add.text(20, config.height-20, 'Game Title: ' + config.title);
      this.add.text(300, config.height-20, config.url);
      this.add.text(config.width-250, config.height-20, config.version);

      this.mousePointer = this.add.sprite(20, 300, 'pointer');
      this.input.mouse.disableContextMenu();


      // mouse
      // Pointer lock will only work after an 'engagement gesture', e.g. mousedown, keypress, etc.
      game.canvas.addEventListener('mousedown', function ()
            {
              game.input.mouse.requestPointerLock();
            });

     // When locked, you will have to use the movementX and movementY properties of the pointer
      // (since a locked cursor's xy position does not update)
      this.input.on('pointermove', function (pointer)
          {
          if (this.input.mouse.locked)
            {
            this.mousePointer.x += pointer.movementX;
            this.mousePointer.y += pointer.movementY;

            // Force the sprite to stay on screen
            this.mousePointer.x = Phaser.Math.Wrap( this.mousePointer.x, 0, game.renderer.width);
            this.mousePointer.y = Phaser.Math.Wrap( this.mousePointer.y, 0, game.renderer.height);

            if (pointer.movementX > 0) {this. mousePointer.setRotation(0.1); }
            else if (pointer.movementX < 0) { this.mousePointer.setRotation(-0.1); }
            else { this.mousePointer.setRotation(0); }

            this.updateLockText(true);
            }
          }, this);

          // Exit pointer lock when Q is pressed. Browsers will also exit pointer lock when escape is
        // pressed.
        this.input.keyboard.on('keydown_Q', function (event)
          {
          if (game.input.mouse.locked)
            {
            game.input.mouse.releasePointerLock();
            }
          }, 0, this);



    // Optionally, you can subscribe to the game's pointer lock change event to know when the player
    // enters/exits pointer lock. This is useful if you need to update the UI, change to a custom
    // mouse cursor, etc.
    this.input.on('pointerlockchange', function (event)
      {
        this.updateLockText(event.isPointerLocked, this.mousePointer.x, this.mousePointer.y);
      }, 0, this);


    this.updateLockText(false);

    this.lockText = this.add.text(120, 10, '', { fill: '#00ff00' }).setDepth(1);


    }


    update(time,delta)
      {
      //this.log(time);
      var pointer = this.input.activePointer;

      this.lockText.setText([
                  'x: ' + pointer.worldX,
                  'y: ' + pointer.worldY,
                  'AnyButtonDown: ' + pointer.isDown,
                  'leftButtonDown: ' + pointer.leftButtonDown(),
                  'RightButtonDown: ' + pointer.rightButtonDown()
                  ]);
      }

      updateLockText (isLocked)
        {
        Scene.log([
          isLocked ? 'The pointer is now locked!' : 'The pointer is now unlocked.',
          'Sprite is at: (' + this.mousePointer.x + ',' + this.mousePointer.y + ')',
          'Press Q to release pointer lock.'
          ]);
        }
      }
// =====================================================================================================





// =====================================================================================================
// SEE: https://photonstorm.github.io/phaser3-docs/Phaser.Boot.Config.html
// and https://jwiese.eu/en/blog/2017/08/phaser-3---game-configuration/
var config = {
    type: Phaser.AUTO,
    width: 1336,
    height: 768,
    zoom: 1.1,
    resolution: 1,
    seed : 42,


    parent: 'gameContainer',
    title: 'A.I. Survive',
    url: 'https://bcgamejam2019.herokuapp.com/',
    version: "0.0.1",

    input: {keyboard:	true, mouse: true},
    pixelArt:	false,
    clearBeforeRender:	true,
    backgroundColor: 0,
    transparent: false,


    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },

            debug: true,
            fps: 30
        }
    },
    audio:
    {
    disableWebAudio: false
  },

    scene: [DefaultScene,GameScene, TitleScene]
};
// =====================================================================================================

class GenericWidget
  {
  constructor(inScene, imageName, posX, posY)
    {
    this.image =      inScene.add.image( posX, posY, imageName);
    this.posX = posX;
    this.posY = posY;
    }
  }


// WIDGETS
class BackgroundWidget extends GenericWidget
  {
    constructor(inScene, imageName, posX, posY)
    {
      super(inScene,imageName,posX,posY);
    }
  }





// =====================================================================================================
// here we create an insteance of the phaser engine
var game = new Phaser.Game(config);

/*
    //loadRender is called during the Loader process.
    // This only happens if you've set one or more assets to load in the preload method.
    //The difference between loadRender and render is that any objects you render in this method
    // you must be sure their assets exist first.
    function loadRender()
    {}



    //loadUpdate is called during the Loader process.
    // This only happens if you've set one or more assets to load in the preload method.
    function loadUpdate()
    {}


    //This method will be called if the core game loop is paused.
    function paused()
    {}


    // pauseUpdate is called while the game is paused instead of preUpdate, update and postUpdate.
    function pauseUpdate()
    {}



    //The preRender method is called after all Game Objects have been updated, but before any rendering takes place.
    function preRender()
    {}




    // If your game is set to Scalemode RESIZE then each time the browser resizes it will call this function,
    // passing in the new width and height.
    function resize()
    {}

    //This method will be called when the core game loop resumes from a paused state.
    function resumed()
    {}


    //This method will be called when the State is shutdown (i.e. you switch to another state from this one).
    function shutdown()
    {}


    //The update method is left empty for your own use.
    //It is called during the core game loop AFTER debug, physics, plugins and the Stage have had their preUpdate methods
    //called. If is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles and Plugins have had their postUpdate methods called.
    function update()
    {}*/
