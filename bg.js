const body = document.querySelector("body");

const IMG_NUMBER = 3;

handleImageLoad = () => {};

paintImage = (imgNum) => {
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
};

getRandom = () => {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
};

initBackground = () => {
    const randomNum = getRandom();
    paintImage(randomNum);
};

initBackground();
