const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", 
"Sat"];

function startTime() {
    const d = new Date();
    let h, M, dayW, month, day, year, m, s;
    dayW = d.getDay();
    month = '' + (d.getMonth() + 1);
    day = '' + d.getDate();
    year = d.getFullYear() - 2000;

    if (d.getHours() > 12){
        h = d.getHours() - 12;
        M = "PM";
    }else{
        h = d.getHours();
        M = "AM";
    }
    m = d.getMinutes();
    s = d.getSeconds();
    m = checkTime(m);
    
    
    document.getElementsByClassName("clock")[0].innerHTML = 
        weekNames[dayW] + " (" + 
        day + " " + 
        monthNames[month + 1] + " " + 
        year + ") " + 
        h + ":" + 
        m + 
        M;
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

