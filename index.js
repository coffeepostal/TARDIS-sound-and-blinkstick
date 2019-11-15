const player = require('play-sound')(opts={})
const blinkstick = require('blinkstick'),
    led = blinkstick.findFirst();

function playSound() {
    console.log('🚨Time and Relative Dimension in Space🚨')
    player.play('audio/tardis.mp3', function(err) {
        if(err) throw err
    })
}

function runLights() {
    if (led) {

        led.pulse('white', { 'index': 0, 'duration': 2000, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse('white', { 'index': 1, 'duration': 2000, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse('white', { 'index': 2, 'duration': 2000, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse('white', { 'index': 3, 'duration': 2000, 'steps': 50 }, function () {
            led.turnOff();
        })

    }
}

// tardis()

function randRange(data) {
    let newTime = data[Math.floor(data.length * Math.random())]
    return newTime
}

function launchTardis() {
    // Set the array of milliseconds to pass before triggering the event
    let timeArray = new Array(10000, 15000, 20000, 30000)

    // Play the Audio 🔊
    playSound()

    // Trigger the LEDs 🚨
    runLights()

    // Clear the timer and reset it with the new time
    clearInterval(timer)
    timer = setInterval(launchTardis, randRange(timeArray))

    // Console log the new time
    console.log((randRange(timeArray) - 10000)/1000 + ' second(s)')
}

// 1000 = Initial timer when the page is first loaded
let timer = setInterval(launchTardis, 2000)