class World {
    character = new Character();
    canvas;
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish()
    ];
    backgroundObjects = [
        new BackgroundObject('../imgs/3. Background/Layers/5. Water/D1.png'),
        new BackgroundObject('../imgs/3. Background/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('../imgs/3. Background/Layers/3.Fondo 1/D1.png'),
        new BackgroundObject('../imgs/3. Background/Layers/2. Floor/D1.png'),
        new BackgroundObject('../imgs/3. Background/Layers/1. Light/1.png')    
    ];
    

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.moveObjectsToMap(this.backgroundObjects);
        this.moveOneObjectToMap(this.character)
        this.moveObjectsToMap(this.enemies);
        
        requestAnimationFrame(() => this.draw());
    }

    moveOneObjectToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    moveObjectsToMap(movingObjects) {
        movingObjects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        })
    }

}