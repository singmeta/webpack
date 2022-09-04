import Phaser from "phaser";

export default class OnlinePlayer extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.playerId,config.charname);

        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this);
        this.scene.physics.add.collider(this, config.worldLayer);

        this.setTexture("players", `${config.charname}_front.png`).setScale(1.9, 2.1);

        this.map = config.map;
        console.log(`Map of ${config.playerId} is ${this.map}`);
        console.log(config.charname);

        // Player Offset
        this.body.setOffset(0, 24);

        // Display playerId above player
        this.playerNickname = this.scene.add.text((this.x - 40), (this.y - 25), config.playerId)
    }

    isWalking(charname,position, x, y) {
        // Player
        this.anims.play(`onlinePlayer-${charname}-${position}-walk`, true);
        this.setPosition(x, y);

        // PlayerId
        this.playerNickname.x = this.x - 40;
        this.playerNickname.y = this.y - 25;
    }

    stopWalking(position,charname) {
        this.anims.stop();
        this.setTexture("players", `${charname}_${position}.png`);
    }

    destroy() {
        super.destroy();
        this.playerNickname.destroy()
    }
}
