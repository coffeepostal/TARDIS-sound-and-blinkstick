const blinkstick = require('blinkstick');
const led = blinkstick.findFirst();

var finished = false;

if (led) {

    led.pulse('green', { 'index': 7, 'duration': 2500, 'steps': 5 }, function () {
        finished = true;
    });

    var wait = function () { if (!finished) setTimeout(wait, 100) }
    wait();

} else {
    console.log('No BlinkStick detected')
}
