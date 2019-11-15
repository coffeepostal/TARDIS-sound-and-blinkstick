const blinkstick = require('blinkstick');
const led = blinkstick.findFirst();

if (led) {
    let finished = false;
    let ledCount = 31;
    let index = 0;

    console.log("Resettings LEDs...");

    let setColor = function () {
        led.blink("#000000", { 'channel': 0, 'index': index, 'delay': 10 }, function () {
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
