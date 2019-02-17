function preload()
  {
    // sort some required info about where to pull files from and CORS
    this.load.baseURL = 'localhost:80';
    this.load.crossOrigin = 'anonymous';

    var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);

            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);

            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);

            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });

            assetText.setOrigin(0.5, 0.5);

            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });

            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });

            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });

            this.load.image('logo', 'zenvalogo.png');
            for (var i = 0; i < 5000; i++) {
                this.load.image('logo'+i, 'zenvalogo.png');
            }



    this.load.image('background', 'assets/background.png');
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




function create()
  {
    var background = this.add.image(400, 300, 'background');


}


function onOver(sprite, pointer) {



}


function onOut(sprite, pointer) {


}

function onDragStart(sprite, pointer) {

}

function update ()
{

}

function onDragStop(sprite, pointer) {


}


function render ()
{
}





let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(this.config);
