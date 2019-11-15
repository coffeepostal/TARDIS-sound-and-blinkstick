const player = require('play-sound')(opts={})
const blinkstick = require('blinkstick'),
    led = blinkstick.findFirst();

function launchTardis() {
    // Set the array of milliseconds to pass before triggering the event
    let timeArray = new Array(10000, 15000, 20000, 30000)
    // Light Length

    // Play the Audio 🔊
    playSound()

    // Trigger the LEDs 🚨
    runLights(100, 750)
    setTimeout(function () { runLights(150, 750); }, 2000);
    setTimeout(function () { runLights(200, 750); }, 4000);
    setTimeout(function () { runLights(255, 650); }, 5750);
    setTimeout(function () { runLights(255, 650); }, 7500);

    // Reset LEDs
    setTimeout(function () { ledReset(); }, 10000);

    // Clear the timer and reset it with the new time
    clearInterval(timer)
    timer = setInterval(launchTardis, randRange(timeArray))

    // Console log the new time
    console.log((randRange(timeArray) - 10000)/1000 + ' second(s)')
}

//  Reset the LEDs
function ledReset() {
    if (led) {
        let finished = false;
        let ledCount = 3;
        let index = 0;

        console.log("Resettings LEDs...");

        let setColor = function () {
            led.blink("#000000", { 'channel': 0, 'index': index, 'delay': 2 }, function () {
                if (index == ledCount) {
                    finished = true;
                } else {
                    index += 1;
                    setTimeout(setColor, 5);
                }
            });
        }

        setColor();

        let wait = function () { if (!finished) setTimeout(wait, 100) }
        wait();
    } else {
        console.log('No BlickStick detected')
    }
}

function playSound() {
    console.log('🚨Time and Relative Dimension in Space🚨')
    player.play('audio/tardis.mp3', function (err) {
        if (err) throw err
    })
}

function randRange(data) {
    let newTime = data[Math.floor(data.length * Math.random())]
    return newTime
}

function runLights(intesity, duration) {
    if (led) {

        led.pulse(intesity, intesity, intesity, { 'index': 0, 'duration': duration, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse(intesity, intesity, intesity, { 'index': 1, 'duration': duration, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse(intesity, intesity, intesity, { 'index': 2, 'duration': duration, 'steps': 50 }, function () {
            led.turnOff();
        })
        led.pulse(intesity, intesity, intesity, { 'index': 3, 'duration': duration, 'steps': 50 }, function () {
            led.turnOff();
        })

    }
}

// 1000 = Initial timer when the page is first loaded
let timer = setInterval(launchTardis, 500)