const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const newYears = '1 jan 2021';



function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const countdownDays =(newYearsDate - currentDate);

    const totalseconds =(countdownDays / 1000);

    const seconds =Math.floor(totalseconds %60);
    const mins =Math.floor(totalseconds / 60) %60;
    const hours =Math.floor(totalseconds / 3600) %24;
    const days =Math.floor(totalseconds/3600 /24);

    
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = mins;
    secondsEL.innerHTML = seconds;  

}

countdown();

setInterval(countdown,1000);