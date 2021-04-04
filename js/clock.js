const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

format = (time) => {
    if (time < 10) {
        return `0${time}`;
    } else {
        return `${time}`;
    }
};

getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${format(minutes)}:${format(seconds)}`;
};

initClock = () => {
    getTime();
    setInterval(getTime, 1000);
};

initClock();
