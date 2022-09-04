import Phaser from "phaser";
import { onlinePlayers, room } from "./SocketServer";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.scene.physics.add.collider(this, config.worldLayer);

    this.setTexture(
      "players2",
      `${window.location.pathname.split("/")[4]}_${
        this.scene.playerTexturePosition
      }.png`
    ).setScale(1.9, 2.1);

    // Register cursors for player movement
    this.cursors = this.scene.input.keyboard.createCursorKeys();

    // Player Offset
    this.body.setOffset(0, 24);

    // Player can't go out of the world
    this.body.setCollideWorldBounds(true);

    // Set depth (z-index)
    this.setDepth(5);

    // Container to store old data
    this.container = [];

    // Player speed
    this.speed = 150;

    this.canChangeMap = true;

    // Player nickname text
    this.playerNickname = this.scene.add.text(
      this.x - this.width * 1.4,
      this.y - this.height / 2,
      "Player"
    );

    // Add spacebar input
    this.spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  update(time, delta) {
    const prevVelocity = this.body.velocity.clone();

    // Show player nickname above player
    this.showPlayerNickname();

    // Player door interaction

    // Player world interaction
    //this.worldInteraction();

    // Stop any previous movement from the last frame
    this.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.body.setVelocityY(-this.speed);
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(this.speed);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    this.body.velocity.normalize().scale(this.speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown) {
      this.anims.play(
        `${window.location.pathname.split("/")[4]}-left-walk`,
        true
      );
    } else if (this.cursors.right.isDown) {
      this.anims.play(
        `${window.location.pathname.split("/")[4]}-right-walk`,
        true
      );
    } else if (this.cursors.up.isDown) {
      this.anims.play(
        `${window.location.pathname.split("/")[4]}-back-walk`,
        true
      );
    } else if (this.cursors.down.isDown) {
      this.anims.play(
        `${window.location.pathname.split("/")[4]}-front-walk`,
        true
      );
    } else {
      this.anims.stop();

      // If we were moving, pick and idle frame to use
      if (prevVelocity.x < 0)
        this.setTexture(
          "players2",
          `${window.location.pathname.split("/")[4]}_left.png`
        );
      else if (prevVelocity.x > 0)
        this.setTexture(
          "players2",
          `${window.location.pathname.split("/")[4]}_right.png`
        );
      else if (prevVelocity.y < 0)
        this.setTexture(
          "players2",
          `${window.location.pathname.split("/")[4]}_back.png`
        );
      else if (prevVelocity.y > 0)
        this.setTexture(
          "players2",
          `${window.location.pathname.split("/")[4]}_front.png`
        );
    }
  }

  showPlayerNickname() {
    this.playerNickname.x = this.x - this.playerNickname.width / 2;
    this.playerNickname.y = this.y - this.height / 2;
  }

  isMoved() {
    if (
      this.container.oldPosition &&
      (this.container.oldPosition.x !== this.x ||
        this.container.oldPosition.y !== this.y)
    ) {
      this.container.oldPosition = { x: this.x, y: this.y };
      return true;
    } else {
      this.container.oldPosition = { x: this.x, y: this.y };
      return false;
    }
  }
  /*
    doorInteraction() {
        this.scene.map.findObject("Doors", obj => {
            if ((this.y >= obj.y && this.y <= (obj.y + obj.height)) && (this.x >= obj.x && this.x <= (obj.x + obj.width))) {
                console.log('Player is by ' + obj.name);
                if (this.spacebar.isDown) {
                    console.log('Door is open!')
                }
            }
        });
    }
*/

  worldInteraction() {
    this.scene.map.findObject("Worlds", (world) => {
      if (
        this.y >= world.y &&
        this.y <= world.y + world.height &&
        this.x >= world.x &&
        this.x <= world.x + world.width
      ) {
        console.log("Player is by world entry: " + world.name);

        // Get playerTexturePosition from from Worlds object property
        let playerTexturePosition;
        if (world.properties)
          playerTexturePosition = world.properties.find(
            (property) => property.name === "playerTexturePosition"
          );
        if (playerTexturePosition)
          this.playerTexturePosition = playerTexturePosition.value;

        // Load new level (tiles map)
        this.scene.registry.destroy();
        this.scene.events.off();
        this.scene.scene.restart({
          map: world.name,
          playerTexturePosition: this.playerTexturePosition,
        });

        room.then((room) =>
          room.send({
            event: "PLAYER_CHANGED_MAP",
            map: world.name,
          })
        );
      }
    });
  }
}
