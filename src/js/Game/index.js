import {Container, autoDetectRenderer} from "pixi.js";


class Game {
    constructor(element) {
        this.stage = new Container();

        this.renderer = autoDetectRenderer(
            {
                width: window.innerWidth, height: window.innerHeight, transparent: true
            },
            false
        );
        element.appendChild(this.renderer.view);

        requestAnimationFrame( this._tick.bind( this ) )
    }

    _tick() {
        this.renderer.render( this.stage );
        requestAnimationFrame( this._tick.bind( this ) );
    }
}