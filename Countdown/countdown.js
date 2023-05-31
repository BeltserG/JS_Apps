let launchDay = "1 Sep 2025";
const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

const submit = document.querySelector("#timer-form");

function left(){
    let currentDate = new Date();
    let launchDate = new Date(launchDay);
    const secondsTotal = Math.floor((launchDate - currentDate) / 1000);
    const days = Math.floor(secondsTotal / (3600*24));
    const hours = Math.floor(secondsTotal / 3600 % 24);
    const minutes = Math.floor(secondsTotal / 60 % 60);
    const seconds = secondsTotal % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}

left();

setInterval(left, 1000);

submit.addEventListener('submit', (e) => {
    
    e.preventDefault();
    launchDay = document.querySelector('.timer-date-time').value;
})