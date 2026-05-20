class MovableObjekt {
    characterX = 50;
    characterY = 150;
    x;
    y;
    img;
    height;
    width;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });
    }

    moveRight() {
        console.log('moving right');
    }
    moveLeft() {
        console.log('moving left');
    }

    
}