class Character extends MovableObjekt {
    width = 200;
    height = 250;
    x = 50;
    y = 150;
    currentImageIndex = 1;
    imageCache = {};
    currentImage = 0;
    IMAGES_IDLE = [
        '../imgs/1.Sharkie/1.IDLE/1.png',
        '../imgs/1.Sharkie/1.IDLE/2.png',
        '../imgs/1.Sharkie/1.IDLE/3.png',
        '../imgs/1.Sharkie/1.IDLE/4.png',
        '../imgs/1.Sharkie/1.IDLE/5.png',
        '../imgs/1.Sharkie/1.IDLE/6.png',
        '../imgs/1.Sharkie/1.IDLE/7.png',
        '../imgs/1.Sharkie/1.IDLE/8.png',
        '../imgs/1.Sharkie/1.IDLE/9.png',
        '../imgs/1.Sharkie/1.IDLE/10.png',
        '../imgs/1.Sharkie/1.IDLE/11.png',
        '../imgs/1.Sharkie/1.IDLE/12.png',
        '../imgs/1.Sharkie/1.IDLE/13.png',
        '../imgs/1.Sharkie/1.IDLE/14.png',
        '../imgs/1.Sharkie/1.IDLE/15.png',
        '../imgs/1.Sharkie/1.IDLE/16.png',
        '../imgs/1.Sharkie/1.IDLE/17.png',
        '../imgs/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIM = [
        '../imgs/1.Sharkie/3.Swim/1.png',
        '../imgs/1.Sharkie/3.Swim/2.png',
        '../imgs/1.Sharkie/3.Swim/3.png',
        '../imgs/1.Sharkie/3.Swim/4.png',
        '../imgs/1.Sharkie/3.Swim/5.png',
        '../imgs/1.Sharkie/3.Swim/6.png'
    ]

    constructor() {
        super();
        this.loadImage('../imgs/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animateIdle();
    }

    animateIdle() {
        setInterval(() => {
        let path = this.IMAGES_IDLE[this.currentImage];
        this.img = this.imageCache[path];
        this.playCharacterAnimation(18);
        }, 200);
    }

    playCharacterAnimation(arrayValue) {
        this.currentImage ++;
        if (this.currentImage == arrayValue) {
            this.currentImage = 1;
        }
    }


    // animateCharakter() {
    //     setInterval(() => {
    //         this.playIdleAnimation();
    //     }, 200);
    // }

    //  updateCharacterImage() {
    //     this.loadImage(`../imgs/1.Sharkie/1.IDLE/${this.currentImageIndex}.png`);
    // }

}