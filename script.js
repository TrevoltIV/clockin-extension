

const currentSite = window.location.href;
const currentSiteText = document.getElementById('current-site');
const clockInBtn = document.getElementById('clock-in');
const clockOutBtn = document.getElementById('clock-out');
let activityTimestamp = 0;
let loaded = false;
let time = [];




// TODO: Fix date updating, currently only updates on page load
const updateClock = () => {
    const currentTime = new Date().getTime();
    time.push(currentTime);
    return;
}

setInterval(() => updateClock, 3000);


console.log(time - activityTimestamp);
const handleActivityReset = () => {
    if (time - activityTimestamp > 5000) {
        activityTimestamp = time;
        console.log('time and stamp: ' + time + ' ' + activityTimestamp);
    } else {
        return;
    }
}


// Listeners for activity reset
window.addEventListener('click', handleActivityReset);
window.addEventListener('mousemove', handleActivityReset);
window.addEventListener('keydown', handleActivityReset);