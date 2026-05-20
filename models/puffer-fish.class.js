class PufferFish extends MovableObjekt {
    width = 70;
    height = 70;
    currentImageIndex = 1;

    constructor() {
        super();
        this.updateImage();
        this.x = 200 + Math.random() * 450;
        this.y = 50 + Math.random() * 350;
        this.animateEnemies();
    }

    updateImage() {
        this.loadImage(`../imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim${this.currentImageIndex}.png`);
    }

    animateEnemies() {
        
            setInterval(() => {
                if (this.x >= this.characterX + 200) {
                    this.x -= 0.2;
                } return;
            }, 1000 / 60);

            setInterval(() => {
                this.playAnimation();
            }, 150);
        
    }

    playAnimation() {
        this.currentImageIndex++;
        if (this.currentImageIndex > 5) {
            this.currentImageIndex = 1;
        }
        this.updateImage();
    }
}
