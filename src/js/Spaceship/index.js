import {Sprite} from "pixi.js";


class Spaceship {
    constructor(game, x, y) {
        this._game = game;
        this._body = Sprite.fromImage("https://raw.githubusercontent.com/deepstreamIO/ds-demo-spaceshooter/master/tutorial-images/1-spaceship-plain.png");
        this._body.position.x = x;
        this._body.position.y = y;
        this._body.anchor.x = 0.5;
        this._body.anchor.y = 0.5;
        this._game.stage.addChild(this._body);
    }
}