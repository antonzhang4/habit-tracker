const time = document.getElementById('time')
const pomodoro = document.getElementById("pomodoro")
const pomodoroType = document.getElementsByClassName("pomodoro-type")

let timerSetting = 30
let duration = 60 * timerSetting
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

function resetTime() {
    duration = 60 * timerSetting
    timer = duration, minutes, seconds
    initializeTime()   
}
/*window.onload = function() {
    let thirtyMin = 60 * 30
}*/

document.getElementById("start").addEventListener('click', startTimer) 
document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerId)
})

document.getElementById('reset').addEventListener('click', function() {
    duration = 60 * timerSetting
    timer = duration, minutes, seconds
    initializeTime()
    clearInterval(timerId)
})


document.getElementById("pomodoro-btn").addEventListener('click', function() {
    for(i=0; i<pomodoroType.length; i++) {
        pomodoroType[i].classList.remove("pomodoro-active")
    }
    document.getElementById("pomodoro-btn").classList.add("pomodoro-active")
    timerSetting = 30
    resetTime()
    //change linear gradient when button is pressed
})

document.getElementById("short-break-btn").addEventListener('click', function() {
    for(i=0; i<pomodoroType.length; i++) {
        pomodoroType[i].classList.remove("pomodoro-active")
    }
    document.getElementById("short-break-btn").classList.add("pomodoro-active")
    timerSetting = 5
    resetTime()  
})

document.getElementById("long-break-btn").addEventListener('click', function() {
    for(i=0; i<pomodoroType.length; i++) {
        pomodoroType[i].classList.remove("pomodoro-active")
    }
    document.getElementById("long-break-btn").classList.add("pomodoro-active")
    timerSetting = 15
    resetTime()
})
