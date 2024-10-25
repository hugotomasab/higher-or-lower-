input.onButtonPressed(Button.A, function () {
    if (next_number < Number2) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        Score += 1
        Number2 = next_number
        next_number = randint(20, 120)
        basic.showNumber(Number2)
    } else {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.showNumber(next_number)
        basic.showString("Score ")
        basic.showNumber(Score)
    }
})
input.onButtonPressed(Button.B, function () {
    if (next_number > Number2) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        Score += 1
        Number2 = next_number
        next_number = randint(20, 120)
        basic.showNumber(Number2)
    } else {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.showNumber(next_number)
        basic.showString("Score ")
        basic.showNumber(Score)
    }
})
let Score = 0
let Number2 = 0
let next_number = 0
next_number = randint(20, 120)
Number2 = randint(20, 120)
Score = 0
basic.showNumber(Number2)
