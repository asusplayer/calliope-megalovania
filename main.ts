radio.onReceivedNumber(function (receivedNumber) {

})

function getBeat (index: number) {
    if (beat[index] == 0.5) {
        return 150
    } else if (beat[index] == 1) {
        return 300
    } else if (beat[index] == 2) {
        return 600
    } else if (beat[index] == 3) {
        return 900
    }
    return 0
}
let beat: number[] = []
let notes1: number[] = []
notes1 = [8,8,8,8,8,8,6,6,6,6,6,6,6,5,5,5,5,5,5,5,4,4,6,6,6,6,6,20,20,8,8,8,8,23,20,23,8,18,18,6,6,6,6,23,20,23,17,17,5,5,5,5,23,20,23,16,16,4,4,6,6,23,20,23,20,20,8,8,8,23,20,23,8,18,18,6,6,6,6,23,20,23,17,17,5,5,5,5,23,20,23,16,16,4,4,6,6,23,20,6,22,23]
beat = [1,2,1,1,2,3,1,2,1,1,1,0.5,3,1,2,1,1,1,0.5,3,1,2,1,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,0.5,0.5,0.5,0.5,1,2,1,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,0.5,0.5,0.5,0.5,1,2,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,1,0.5,0.5,1,2,1,1,1,0.5,0.5,0.5,0.5]
let frequencys = [185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698]
radio.setGroup(187)
radio.setTransmitPower(7)
radio.setFrequencyBand(30)
	for (let index = 0; index <= beat.length; index++) {
        music.playTone(frequencys[notes1[index]], getBeat(index))
        basic.pause(20)
    }