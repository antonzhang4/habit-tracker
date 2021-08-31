time = document.getElementById('time')
let duration = 60*30
let timer = duration, minutes, seconds
let timerId

function initializeTime() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    time.textContent = minutes + ':' + seconds
}

initializeTime()

function startTimer() {
    clearInterval(timerId)
    timerId = setInterval(() => {
        initializeTime()   
        if(--timer < 0) 
            timer = duration
    }, 1000);
}

/*window.onload = function() {
    let thirtyMin = 60 * 30
}*/

document.getElementById("start").addEventListener('click', startTimer) // click the button multiple times cause the timer is act strange
document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerId)
})
document.getElementById('reset').addEventListener('click', function() {
    duration = 60*30
    timer = duration, minutes, seconds
    initializeTime()
    clearInterval(timerId)
})