var blinkstick = require('blinkstick'),
    led = blinkstick.findFirst();

if (led) {

    led.pulse('red', {'index': 0, 'duration': 2000}, function() {
        led.turnOff();
    })
    led.pulse('red', { 'index': 1, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 2, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 3, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 4, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 5, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 6, 'duration': 2000 }, function () {
        led.turnOff();
    })
    led.pulse('red', { 'index': 7, 'duration': 2000 }, function () {
        led.turnOff();
    })

}

