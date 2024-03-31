Microbit.ledRBrightness(DigitalPin.P0, false)
basic.forever(function () {
    if (Microbit.farState(Write_pin.w0) == 0) {
        Microbit.ledRBrightness(DigitalPin.P10, true)
    } else {
        Microbit.ledRBrightness(DigitalPin.P0, false)
    }
})
