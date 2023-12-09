const countElement = document.getElementById("count");

let count = 0;

const addCount = () => {
    count++;
    countElement.textContent = count;
};

const resetCount = () => {
    count = 0;
    countElement.textContent = count;
};
