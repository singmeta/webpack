import TilesTown from "./assets/tilesets/tuxmon-sample-32px-extruded.png";
import TownJSON from "./assets/tilemaps/town";
import TownJSON2 from "./assets/tilemaps/town4";
import TownJSON3 from "./assets/tilemaps/town5";
import TownJSON4 from "./assets/tilemaps/town6";
import Route1JSON from "./assets/tilemaps/route1";

import AtlasPNG from "./assets/atlas/atlas.png";
import AtlasJSON from "./assets/atlas/atlas";
import PlayersAtlasPNG from "./assets/images/players/players.png";
import PlayersAtlasJSON from "./assets/atlas/players";

export class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Load Town
    this.load.image("TilesTown", TilesTown);
    this.load.tilemapTiledJSON("town", TownJSON);

    // Load Route1
    this.load.tilemapTiledJSON("route1", Route1JSON);

    this.load.tilemapTiledJSON("map2", TownJSON2);
    this.load.tilemapTiledJSON("map3", TownJSON3);
    this.load.tilemapTiledJSON("map4", TownJSON4);

    // Load atlas
    this.load.atlas("currentPlayer", AtlasPNG, AtlasJSON);
    this.load.atlas("players", PlayersAtlasPNG, PlayersAtlasJSON);
    this.load.atlas("players2", PlayersAtlasPNG, PlayersAtlasJSON);
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    /*
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch(`http://localhost:5002/room/getRooms/${s}`, requestOptions)
          .then(response => response.text())
          .then(result => {this.scene.start("playGame",{map:result,playerTexturePosition:'front'})})
          .catch(error => console.log('error', error));
*/

    this.scene.start("playGame", {
      map: window.location.pathname.split("/")[3],
      playerTexturePosition: "front",
    });

    // Create the player's walking animations from the texture currentPlayer. These are stored in the global
    // animation manager so any sprite can access them.
    /*
        this.anims.create({
            key: "ninja-left-walk",
            frames: this.anims.generateFrameNames("players2", {
                prefix: "ninja-left-walk.",
                start: 0,
                end: 3,
                zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "ninja-right-walk",
            frames: this.anims.generateFrameNames("players2", {
                prefix: "ninja-right-walk.",
                start: 0,
                end: 3,
                zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "ninja-front-walk",
            frames: this.anims.generateFrameNames("players2", {
                prefix: "ninja-front-walk.",
                start: 0,
                end: 3,
                zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "ninja-back-walk",
            frames: this.anims.generateFrameNames("players2", {
                prefix: "ninja-back-walk.",
                start: 0,
                end: 3,
                zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        */

    // onlinePlayer animations
    this.anims.create({
      key: "ninja-left-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "ninja-right-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "ninja-front-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "ninja-back-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "boss-left-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "boss-right-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "boss-front-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "boss-back-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "knight-left-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "knight-right-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "knight-front-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "knight-back-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "nurse-left-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "nurse-right-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "nurse-front-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "nurse-back-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "professor-left-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "professor-right-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "professor-front-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "professor-back-walk",
      frames: this.anims.generateFrameNames("players2", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-boss-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-boss-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-boss-front-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-boss-back-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "boss_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-ninja-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-ninja-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-ninja-front-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-ninja-back-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "ninja_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-knight-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-knight-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-knight-front-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-knight-back-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "knight_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-nurse-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-nurse-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-nurse-front-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-nurse-back-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "nurse_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    // onlinePlayer animations
    this.anims.create({
      key: "onlinePlayer-professor-left-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_left_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-professor-right-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_right_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-professor-front-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_front_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "onlinePlayer-professor-back-walk",
      frames: this.anims.generateFrameNames("players", {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: "professor_back_walk.",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
