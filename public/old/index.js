<header>
   <script src="//cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.js"></script>
    <script src="index.js"></script>
</header>
<body>

  <script type="text/javascript">
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        audio: {
        disableWebAudio: true
              }
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

    var game = new MainGame(config);

  </script>
</body>
<aside class="">

</aside>
<footer>

</footer>
