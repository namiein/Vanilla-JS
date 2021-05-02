const main = document.querySelector("main");

const loading = document.getElementsByClassName("loading-bars")[0];
const IMG_NUMBER = 4;

const IMAGE_NAME = ["igor-kasalovic-tNDvFkxkBHo-unsplash", "stefan-stefancik-TPv9dh822VA-unsplash", "garrett-parker-DlkF4-dbCOU-unsplash", "eberhard-grossgasteiger-cgEbku0EbOg-unsplash"];

const ATTRIBUTION = [
    'Photo by <a href="https://unsplash.com/@ikasalovic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Igor Kasalovic</a> on <a href="https://unsplash.com/wallpapers/desktop/dual-monitor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a href="https://unsplash.com/@cikstefan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Štefan Štefančík</a> on <a href="https://unsplash.com/wallpapers/desktop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a href="https://unsplash.com/@garrettpsystems?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">garrett parker</a> on <a href="https://unsplash.com/wallpapers/desktop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    'Photo by <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">eberhard grossgasteiger</a> on <a href="https://unsplash.com/wallpapers/desktop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
];

handleLoading = () => {
    loading.classList.remove("showing");
};

handleImageLoad = (image) => {
    image.classList.add("bgImage");
    main.prepend(image);
};

paintImage = (imgNum) => {
    const image = new Image();
    const p = document.createElement("p");
    p.classList.add("downloaded-img-attribution");

    if (imgNum >= IMG_NUMBER) {
        image.src = `https://source.unsplash.com/random/1920x1280`;
        p.innerHTML = ATTRIBUTION[imgNum];
    } else if (imgNum < IMG_NUMBER) {
        image.src = `images/${IMAGE_NAME[imgNum]}.jpg`;
        p.innerHTML = ATTRIBUTION[imgNum];
        main.appendChild(p);
    }

    image.addEventListener("load", handleImageLoad(image));
};

getRandom = () => {
    const number = Math.floor(Math.random() * IMG_NUMBER * 2);
    return number;
};

initBackground = () => {
    const randomNum = getRandom();
    paintImage(randomNum);

    setTimeout(() => {
        handleLoading();
        main.classList.add("showing");
    }, 4000);
};

initBackground();
