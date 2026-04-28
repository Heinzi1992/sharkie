class BackgroundObject extends MovableObjekt {

    x = 0;
    y = 0;
    img;
    height = 480;
    width = 720;

    constructor(imgPath) {
        super().loadImage(imgPath);
    }
    
}