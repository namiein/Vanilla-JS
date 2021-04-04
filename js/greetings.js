const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

saveName = (text) => {
    localStorage.setItem(USER_LS, text);
};

handleSubmit = (e) => {
    e.preventDefault();
    const value = input.value;
    paintGreeting(value);
    saveName(value);
};

askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};

paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text} :)`;
};

loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);

    if (!currentUser) {
        console.log("no name");
        askForName();
    } else {
        paintGreeting(currentUser);
    }
};

initGreetings = () => {
    loadName();
};

initGreetings();
