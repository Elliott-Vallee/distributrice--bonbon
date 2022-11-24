let Angle_Servo = 150
let État_Actuel = 0
let État_Passé = 0
basic.forever(function () {
    Angle_Servo = 150
    État_Actuel = pins.digitalReadPin(DigitalPin.P1)
    servos.P0.setAngle(Angle_Servo)
    if (État_Actuel != État_Passé) {
        if (État_Actuel == 1) {
            Angle_Servo += -90
        }
    }
    if (Angle_Servo == 60) {
        servos.P0.setAngle(Angle_Servo)
        basic.pause(2000)
    }
    État_Passé = État_Actuel
})
