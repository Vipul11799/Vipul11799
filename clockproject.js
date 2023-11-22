function updateClock() {
    let hourHand = document.getElementById("hour-hand");
    let minuteHand = document.getElementById("minute-hand");
    let secondHand = document.getElementById("second-hand");

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    let minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    let secondDeg = (seconds / 60) * 360;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);