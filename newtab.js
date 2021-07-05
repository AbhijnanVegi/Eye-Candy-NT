function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ':' + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function setDate() {
    const today = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[today.getDay()]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let m = months[today.getMonth()]
    let date = today.getDate()
    let y = today.getFullYear()
    document.getElementById('date').innerHTML = d + ', ' + date + ' ' + m +', ' + y
}

setDate()
startTime()