document.addEventListener('DOMContentLoaded', function () {
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x1099bb
    });
    document.getElementById('pixi-container').appendChild(app.view);

    const slides = [
        "./img/experience1.jpg",
        "./img/experience2.jpg",
        "./img/experience3.jpg"
    ];

    const container = new PIXI.Container();
    app.stage.addChild(container);

    const slideTextures = slides.map(slide => PIXI.Texture.from(slide));
    const slideSprites = slideTextures.map(texture => new PIXI.Sprite(texture));
    slideSprites.forEach((sprite, index) => {
        sprite.anchor.set(0.5);
        sprite.x = app.renderer.width / 2 + index * app.renderer.width;
        sprite.y = app.renderer.height / 2;
        sprite.width = app.renderer.width;
        sprite.height = app.renderer.height;
        container.addChild(sprite);
    });

    let currentIndex = 0;

    function goToSlide(index) {
        const targetX = -index * app.renderer.width;
        container.x = targetX;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    setInterval(showNextSlide, 1500); 
});
