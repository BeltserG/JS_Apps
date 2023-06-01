const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function clock(){
    let date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    document.querySelector(".second").style.setProperty("--rotation", `${seconds*6}deg`);
    document.querySelector(".minute").style.setProperty("--rotation", `${minutes*6}deg`);
    document.querySelector(".hour").style.setProperty("--rotation", `${hours%12*30+30*minutes/60}deg`);
}

clock();
setInterval(clock,1000);