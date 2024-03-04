input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # # .
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        `)
    health += 1
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    health += 1
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    health += -1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `)
})
let health = 10
basic.forever(function () {
    if (health == 0) {
        basic.showIcon(IconNames.Skull)
        basic.showString("Game Over")
    }
})
basic.forever(function () {
    basic.pause(5000)
    basic.showString("I am hungry and thirsty")
})
