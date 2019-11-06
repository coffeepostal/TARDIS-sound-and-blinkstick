let player = require('play-sound')(opts={})

// //  Setup player
// player.play('audio/tardis.mp3', function(err) {
//     if(err) throw err
// })

// //  Setup player with timeout
// player.play('audio/tardis.mp3', { timeout: 300 }, function (err) {
//     if (err) throw err
// })

// //  Setup player with lower volume for afplay on OSX
// player.play('audio/tardis.mp3', { afplay: ['-v', 1] }, function (err) {
//     if (err) throw err
// })

function playSound() {
    console.log('🚨Time and Relative Dimension in Space🚨')
    player.play('audio/tardis.mp3', function(err) {
        if(err) throw err
    })
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

    // Clear the timer and reset it with the new time
    clearInterval(timer)
    timer = setInterval(launchTardis, randRange(timeArray))

    // Console log the new time
    console.log((randRange(timeArray) - 10000)/1000 + ' second(s)')
}

// 1000 = Initial timer when the page is first loaded
let timer = setInterval(launchTardis, 1000)