input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
    }
})
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Target)
basic.showString("loading..")
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let DirectionY = 1
let DirectionX = randint(-1, 1)
basic.pause(100)
basic.forever(function () {
    music.playMelody("F A A G B A G A ", 174)
    ball.change(LedSpriteProperty.X, DirectionX)
    ball.change(LedSpriteProperty.Y, DirectionY)
    if (ball.isTouching(paddleA) || ball.isTouching(paddleB)) {
        ball.change(LedSpriteProperty.X, DirectionX * -1)
        ball.change(LedSpriteProperty.Y, -1)
        DirectionY = -1
        DirectionX = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) <= 0) {
            DirectionY = 1
            DirectionX = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) >= 4) {
            ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) <= 0) {
            DirectionX = 1
        } else if (ball.get(LedSpriteProperty.X) >= 4) {
            DirectionX = -1
        }
        basic.pause(500)
    }
})
