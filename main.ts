let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(hava64_0, SpriteKind.Player)
})
