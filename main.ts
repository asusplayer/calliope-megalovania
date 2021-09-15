radio.onReceivedNumber(function (receivedNumber) {
	for (let index = 0; index <= beat.length; index++) {
        music.playTone(frequencys[notes1[index]], getBeat(index))
        basic.pause(20)
        if (index == 40) {
            radio.sendNumber(187)
        }
    }
})

function getBeat (index: number) {
    if (beat[index] == 0.5) {
        return 150
    } else if (beat[index] == 1) {
        return 300
    } else if (beat[index] == 2) {
        return 600
    }
    return 0
}
let beat: number[] = []
let notes1: number[] = []
notes1 = [20,20,20,20]
beat = [1,1,1,1]
let frequencys = [185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698]
radio.setGroup(187)
radio.setTransmitPower(7)
radio.setFrequencyBand(30)
