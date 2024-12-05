let zal = 0
let ergehpnis = 0
let aplusb = 0
input.onButtonPressed(Button.A, function () {
    zal = zal + 1
    basic.showNumber(zal)
})
input.onGesture(Gesture.Shake, function () {
    ergehpnis = 0
    zal = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    aplusb = ergehpnis + zal
    basic.showNumber(aplusb)
})
input.onButtonPressed(Button.B, function () {
    ergehpnis = ergehpnis + 1
    basic.showNumber(ergehpnis)
})
basic.forever(function () {
	
})
