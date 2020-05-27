namespace SpriteKind {
    export const fesprit = SpriteKind.create()
    export const boo = SpriteKind.create()
    export const bouh = SpriteKind.create()
    export const trucnoir = SpriteKind.create()
    export const bowser = SpriteKind.create()
    export const fleur = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const champ1up = SpriteKind.create()
    export const gumpa = SpriteKind.create()
    export const bdf = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 f f f f f f 3 f f f f f f f 3
        3 f 3 3 3 3 3 3 f 3 3 3 3 3 f 3
        3 f 3 3 3 3 3 3 f 3 3 3 3 3 f 3
        3 f 3 3 3 3 3 3 f 3 3 3 3 3 f 3
        3 f 3 3 3 3 3 3 f 3 3 3 3 3 f 3
        3 f f f f f f 3 f f f f f f f 3
        3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3
        3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3
        3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3
        3 3 3 3 3 3 f 3 f 3 3 3 3 3 3 3
        3 f f f f f f 3 f 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        . . . . . . . . . . . . . . . .
        2 . . . . . 2 2 2 . . . . . . 2
        2 2 . . . 2 2 2 2 2 . . . . 2 2
        2 2 2 . 2 2 2 2 5 2 2 . . 2 2 2
        2 2 2 2 2 2 2 5 2 4 2 2 2 2 2 2
        2 5 2 2 2 5 5 2 2 4 4 2 2 2 5 2
        2 2 2 4 4 2 2 2 2 2 2 4 2 5 5 2
        2 2 2 2 4 4 2 2 2 2 2 2 4 5 2 2
        2 2 5 2 4 4 2 2 2 5 2 2 2 5 4 2
        2 2 2 4 4 2 2 2 2 5 2 2 2 2 4 2
        4 2 2 4 2 2 2 2 5 5 2 2 2 2 4 2
        4 4 2 2 2 2 5 5 5 2 2 2 4 4 4 2
        2 2 5 2 2 2 2 2 4 2 2 2 4 2 2 2
        2 2 5 2 2 2 4 4 2 2 2 2 2 5 5 2
        2 2 2 2 2 4 4 2 2 2 2 5 5 5 4 2
        2 2 2 4 4 4 5 2 2 2 5 5 2 2 4 4
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        c c c c c c c c c c c . . . . .
        c c c c c c c c c c c c c . . .
        2 c c c 2 2 c c c c 2 2 c 2 . .
        2 2 2 c 2 2 c 2 2 c c 2 2 c c .
        2 2 c c 2 2 c 2 2 2 c 2 . . . .
        c c c 2 2 2 c c 2 c c . . . . .
        c 2 c c 2 2 2 c 2 . . . . . . .
        c 2 2 c 2 2 2 . . . . . . . . .
        2 2 2 2 5 2 . . . . . . . . . .
        2 2 4 2 2 . . . . . . . . . . .
        2 2 2 2 . . . . . . . . . . . .
        2 5 2 . . . . . . . . . . . . .
        2 2 . . . . . . . . . . . . . .
        2 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile5 = img`
        . . . . c c c c c c c c c c c c
        . . . c c c c c c c c c c c c c
        . c c c 2 2 c c c c 2 2 c 2 2 2
        . 2 2 c 2 2 c 2 2 c c 2 2 c c 2
        . . . c 2 2 c 2 2 2 c 2 2 2 c c
        . . . . 2 2 c c 2 c c 2 2 2 c c
        . . . . . . . c 2 c c 2 2 2 c 2
        . . . . . . . . 2 c c 2 2 2 2 2
        . . . . . . . . . . 2 2 4 2 2 2
        . . . . . . . . . . . 2 2 2 2 2
        . . . . . . . . . . . . . 2 2 5
        . . . . . . . . . . . . . . 2 2
        . . . . . . . . . . . . . . 2 2
        . . . . . . . . . . . . . . . 2
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile6 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        2 c c c 2 2 c c c c 2 2 c 2 2 2
        2 2 2 c 2 2 c 2 2 c c 2 2 c c 2
        2 2 c c 2 2 c 2 2 2 c 2 2 2 c c
        c c c 2 2 2 c c 2 c c 2 2 2 c c
        c 2 c c 2 2 2 c 2 c c 2 2 2 c 2
        c 2 2 c 2 2 2 2 2 c c 2 2 2 2 2
        2 2 2 2 5 2 2 2 2 c 2 2 4 2 2 2
        2 2 4 2 2 2 2 4 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 5
        2 5 2 2 2 4 2 2 2 2 2 2 2 2 2 2
        . . 2 2 2 2 2 . . 2 2 2 2 2 2 .
        . . . 2 2 2 . . . . 2 2 2 2 . .
        . . . . 2 . . . . . . 2 2 . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile7 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f f f f f 2 2 f f f f f f 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f f f f f 2 2 2
        2 f f f f f 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 f 2 2 2 2 2 2 2
        2 f f f f f 2 2 f 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile8 = img`
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e f f f f f f f f f f f f e e
        e e f e e e e e e e e e e e e e
        e e f e e e e e e e e e e e e e
        e e f e e e e e e e e e e e e e
        e e f e e e e e e e e e e e e e
        e e f e e e e e f f f f f f e e
        e e f e e e e e f e e e e f e e
        e e f e e e e e f e e e e f e e
        e e f e e e e e e e e e e f e e
        e e f e e e e e e e e e e f e e
        e e f f f f f f f f f f f f e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
    `
    //% blockIdentity=images._tile
    export const tile9 = img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 f f f f 1 1 1 1 1 1 1 1
        1 1 f f f 1 1 1 f f 1 1 1 1 1 1
        1 1 f 1 1 1 1 1 1 f f 1 1 1 1 1
        1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1
        1 1 f 1 1 1 1 1 1 1 f 1 1 1 1 1
        1 1 f 1 1 1 1 1 1 f f 1 1 1 1 1
        1 1 f 1 1 1 f f f f f 1 1 1 1 1
        1 1 f 1 1 1 1 1 1 1 f f 1 1 1 1
        1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1
        1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1
        1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1
        1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1
        1 1 f 1 1 1 1 1 1 1 1 f f 1 1 1
        1 1 f f 1 1 1 f f f f 1 1 1 1 1
        1 1 1 f f f f 1 1 1 1 1 1 1 1 1
    `
    //% blockIdentity=images._tile
    export const tile11 = img`
        . f f f f f f f f f f f f f f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f f f f f f f f f f f f f f .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
    `
    //% blockIdentity=images._tile
    export const tile12 = img`
        . 2 f 7 7 7 7 7 7 7 7 7 7 f 2 .
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 2 5
        4 4 f 7 7 7 7 7 7 7 7 7 7 f 4 2
        4 2 f 7 7 7 7 7 7 7 7 7 7 f 4 2
        2 5 f 7 7 7 7 7 7 7 7 7 7 f 4 2
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 2 4
        2 4 f 7 7 7 7 7 7 7 7 7 7 f 2 4
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 2 2
        5 5 f 7 7 7 7 7 7 7 7 7 7 f 5 5
        2 5 f 7 7 7 7 7 7 7 7 7 7 f 4 5
        4 2 f 7 7 7 7 7 7 7 7 7 7 f 2 2
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 5 5
        2 4 f 7 7 7 7 7 7 7 7 7 7 f 5 2
        2 5 f 7 7 7 7 7 7 7 7 7 7 f 5 4
        4 2 f 7 7 7 7 7 7 7 7 7 7 f 2 2
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 2 4
    `
    //% blockIdentity=images._tile
    export const tile13 = img`
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . f f f f f f f f f f f f f f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f f f f f f f f f f f f f f .
    `
    //% blockIdentity=images._tile
    export const tile14 = img`
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
    `
    //% blockIdentity=images._tile
    export const tile15 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f f f f f f f f f f f f f 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f f f f f f f f f 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile16 = img`
        c c f 7 7 7 7 7 7 7 7 7 7 f c c
        c c f 7 7 7 7 7 7 7 7 7 7 f c c
        4 c f 7 7 7 7 7 7 7 7 7 7 f 4 c
        c 4 f 7 7 7 7 7 7 7 7 7 7 f c 2
        c c f 7 7 7 7 7 7 7 7 7 7 f 4 2
        2 c f 7 7 7 7 7 7 7 7 7 7 f 2 4
        2 4 f 7 7 7 7 7 7 7 7 7 7 f 2 4
        2 2 f 7 7 7 7 7 7 7 7 7 7 f 2 2
        5 2 f 7 7 7 7 7 7 7 7 7 7 f 2 5
        2 . f 7 7 7 7 7 7 7 7 7 7 f . 2
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
        . . f 7 7 7 7 7 7 7 7 7 7 f . .
    `
    //% blockIdentity=images._tile
    export const tile18 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 c c c
        2 2 5 2 2 2 2 2 2 5 2 2 c c c c
        2 2 2 2 2 4 2 2 2 2 2 c c 2 c c
        2 4 2 2 2 2 2 2 2 2 2 2 2 2 c c
        2 2 2 2 2 2 2 2 2 2 c c 2 2 c c
        2 5 2 2 2 2 2 2 2 2 2 c c c c c
        2 2 2 2 2 2 2 4 2 2 5 2 2 2 c c
        2 2 2 2 2 2 2 2 2 2 2 c c c c c
        2 2 2 2 5 2 2 2 2 2 c c 4 2 c c
        2 2 4 2 2 2 2 4 2 2 2 2 2 2 c c
        2 2 2 2 2 2 2 2 2 5 2 2 c c c c
        2 5 2 2 2 4 2 2 2 2 2 c 2 2 c c
        . . 2 2 2 2 2 . . 2 2 2 2 c 2 .
        . . . 2 2 2 . . . . 2 2 2 2 . .
        . . . . 2 . . . . . . 2 2 . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile19 = img`
        c c c 2 2 2 2 2 2 2 2 c c 2 c c
        c c c 2 2 2 2 2 2 5 2 2 c 4 c c
        c c 2 c c c 2 2 2 2 2 2 c c c c
        c c 2 5 2 2 2 2 2 2 2 2 2 c c c
        c c 2 2 4 2 2 2 2 2 2 4 2 c c c
        c c c c 2 2 2 2 2 2 2 2 c c c c
        c c 2 c c c 2 4 2 2 5 c 2 2 c c
        c c 2 2 c 2 2 2 2 2 2 2 2 2 c c
        c c c c c 2 2 2 2 2 2 c c c c c
        c c c 2 2 2 2 4 2 2 2 2 2 2 c c
        c c 2 2 5 2 2 2 2 5 2 c 2 2 c c
        c c 2 2 2 c c 2 2 2 2 c 2 2 c c
        c c c c c c 2 2 2 2 2 2 c c c c
        c c 2 2 2 2 2 2 5 2 2 2 2 2 c c
        c c c c 5 2 2 2 2 2 2 4 c c c c
        c c 2 c c 2 4 2 2 2 2 c 2 2 c c
    `
    //% blockIdentity=images._tile
    export const tile20 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c 2 2 c c c c 2 2 c 2 c c
        c c 2 c 2 2 c 2 2 c c 2 2 c c c
        c c c c 2 2 c 2 2 2 c 2 2 2 c c
        c c c 2 2 2 c c 2 c c 2 2 2 c c
        c c c c 2 2 2 c 2 c c 2 c c c c
        c c 2 c 2 2 2 2 2 c c 2 c 2 c c
        c c 2 2 5 2 2 2 2 c 2 2 4 2 c c
        c c 4 2 c c 2 4 2 2 2 c c c c c
        c c 2 c c 2 2 2 2 5 2 c 2 2 c c
        c c c c 2 4 2 2 2 2 2 c 2 2 c c
        c c 2 2 2 2 2 2 c c 2 2 2 2 c c
        c c 2 2 2 2 2 2 2 c c c c c c c
        c c c c c 2 2 2 2 2 5 2 c c c c
        c c 2 5 c c 4 2 2 2 2 2 c 2 c c
    `
    //% blockIdentity=images._tile
    export const tile21 = img`
        c c 2 c c 2 2 2 2 2 2 2 2 2 2 2
        c c c c 2 5 2 4 2 2 2 2 2 5 2 2
        c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        c c c c c c c 2 2 2 2 2 2 2 4 2
        c c 2 2 2 2 c 2 2 2 2 2 2 2 2 2
        c c c 2 2 2 2 2 5 2 2 2 2 2 2 2
        c c c c c 2 2 4 2 2 2 2 2 5 2 2
        c c 2 2 c c 2 2 2 2 2 2 2 2 2 2
        c c 2 2 5 2 2 2 2 2 2 2 4 2 2 2
        c c 4 2 c c 2 4 2 2 2 2 2 2 2 2
        c c c c c 2 c 2 2 5 2 2 2 2 2 5
        c c c 2 2 4 2 2 2 2 2 2 2 2 2 2
        . . 2 2 2 2 2 . . 2 2 2 2 2 2 .
        . . . 2 2 2 . . . . 2 2 2 2 . .
        . . . . 2 . . . . . . 2 2 . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile22 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        2 c 2 2 2 2 c c c c 2 2 c 2 c c
        2 c c 2 2 2 c 2 2 c c 2 2 c c c
        2 2 c c 2 5 c 2 2 2 c 2 2 2 c c
        2 c 2 2 2 2 c c 2 c c 2 2 2 c c
        5 2 2 2 2 2 2 c 2 c c 2 c c c c
        2 2 2 2 2 2 2 2 2 c c 2 c 2 c c
        2 2 2 2 5 2 2 2 2 c 2 2 4 2 c c
        2 2 4 2 2 2 2 4 2 2 2 c c c c c
        2 2 2 2 2 2 2 2 2 5 2 c 2 2 c c
        2 2 2 2 2 4 2 2 2 2 2 c 2 2 c c
        2 5 2 2 2 2 2 2 c c 2 2 2 2 c c
        4 2 2 2 2 2 2 2 2 c c c c c c c
        2 2 2 2 2 2 2 2 2 2 5 2 c c c c
        2 2 2 5 2 2 4 2 2 2 2 2 c 2 c c
    `
    //% blockIdentity=images._tile
    export const tile23 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c
        2 2 2 2 2 5 2 4 2 2 c c 2 5 c c
        2 2 2 2 2 2 2 2 2 2 2 c 2 c c c
        2 4 2 2 2 2 2 2 2 2 2 2 c 2 c c
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c
        2 5 2 2 2 2 2 2 5 2 2 c c c c c
        2 2 2 2 2 2 2 4 2 2 c c 2 5 c c
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c
        2 2 2 2 5 2 2 2 2 2 2 2 4 2 c c
        2 2 4 2 2 2 2 4 2 2 c c c c c c
        2 2 2 2 2 2 2 2 2 5 2 2 2 2 c c
        2 2 2 2 2 4 2 2 2 2 2 2 c c c c
        . . 2 2 2 2 2 . . 2 2 2 c 2 2 .
        . . . 2 2 2 . . . . 2 2 2 2 . .
        . . . . 2 . . . . . . 2 2 . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile24 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c 2 2 2 2 c c c c 2 2 c 2 2 2
        c c c 2 2 2 c 2 2 c c 2 2 c 2 2
        c c c c 2 5 c 2 2 2 c 2 2 c c 2
        c c 2 2 2 2 c c 2 c c 2 2 2 c c
        c c 2 2 2 2 2 c 2 c c 2 2 2 2 2
        c c c 2 2 2 2 2 2 c c 2 2 2 2 2
        c c 2 c 5 2 2 2 2 c 2 2 4 2 2 5
        c c 4 2 c c 2 4 2 2 2 2 2 2 2 2
        c c 2 2 2 2 2 2 2 5 2 2 2 2 2 2
        c c 2 c c c 2 2 2 2 2 2 2 2 2 2
        c c c 2 2 c 2 2 2 2 2 2 2 2 4 2
        c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        c c c c 2 2 2 2 2 2 5 2 2 2 5 2
        c c c c c 2 4 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile25 = img`
        . f f f f f f f f f f f f f f .
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
        . f f f f f f f f f f f f f f .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
    `
    //% blockIdentity=images._tile
    export const tile26 = img`
        . 2 f 8 8 8 8 8 8 8 8 8 8 f 2 .
        2 2 f 8 8 8 8 8 8 8 8 8 8 f 2 5
        4 4 f 8 8 8 8 8 8 8 8 8 8 f 4 2
        4 2 f 8 8 8 8 8 8 8 8 8 8 f 4 2
        2 5 f 8 8 8 8 8 8 8 8 8 8 f 4 2
        2 2 f 8 8 8 8 8 8 8 8 8 8 f 2 4
        2 4 f 8 8 8 8 8 8 8 8 8 8 f 2 4
        2 2 f 8 8 8 8 8 8 8 8 8 8 f 2 2
        5 5 f 8 8 8 8 8 8 8 8 8 8 f 5 5
        2 5 f 8 8 8 8 8 8 8 8 8 8 f 4 5
        4 2 f 8 8 8 8 8 8 8 8 8 8 f 2 2
        2 2 f 8 8 8 8 8 8 8 8 8 8 f 5 5
        2 4 f 8 8 8 8 8 8 8 8 8 8 f 5 2
        2 5 f 8 8 8 8 8 8 8 8 8 8 f 5 4
        4 2 f 8 8 8 8 8 8 8 8 8 8 f 2 2
        2 2 f 8 8 8 8 8 8 8 8 8 8 f 2 4
    `
    //% blockIdentity=images._tile
    export const tile27 = img`
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
    `
    //% blockIdentity=images._tile
    export const tile28 = img`
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . f f f f . f f f f . f f f f .
        . f d d f . f d d f . f d d f .
        f f d d f f f d d f f f d d f f
        f d d d d d d d d d d d d d d f
        f d d d d d d d d d d d d d d f
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile29 = img`
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile30 = img`
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . f 5 5 . . . . . . .
        . . . . f f 2 b b . . . . . . .
        . . . f 2 2 2 b b . . . . . . .
        . f f 2 2 2 2 b b . . . . . . .
        f 2 2 2 2 f f b b . . . . . . .
        . f f f f . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
        . . . . . . . b b . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile31 = img`
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . f 8 8 8 8 8 8 8 8 8 8 8 f . .
        f 8 8 8 8 8 8 8 8 8 8 8 8 f . .
        8 8 8 8 8 8 8 8 8 8 8 8 8 f . .
        8 8 8 8 8 8 8 8 8 8 8 8 8 f . .
        8 8 8 8 8 8 8 8 8 8 8 8 8 f . .
        8 8 8 8 8 8 8 8 8 8 8 8 f . . .
        8 8 8 8 8 8 8 8 8 8 8 8 f . . .
        8 8 8 8 8 8 8 8 8 8 8 f . . . .
        8 8 8 8 8 8 8 8 8 8 f . . . . .
        8 8 8 8 8 8 8 8 8 f . . . . . .
        8 8 8 8 8 8 8 f f . . . . . . .
        8 8 8 8 8 f f . . . . . . . . .
        f f f f f . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile32 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        f f f f . . . . . . . . . . . .
        f 8 8 f f f f f f f f f f f f f
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile33 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        f f f f f f f f f f f f f f f f
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile34 = img`
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . f f f f f f f f f f f f f f .
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
        . f f f f f f f f f f f f f f .
    `
    //% blockIdentity=images._tile
    export const tile35 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 f f f f 2 2 f f f f 2 2 2
        2 2 f 2 2 2 2 2 2 f 2 2 2 f 2 2
        2 2 f 2 2 2 2 2 2 f 2 2 2 f 2 2
        2 2 f 2 2 2 2 2 2 f 2 2 2 f 2 2
        2 2 f 2 2 2 2 2 2 f 2 2 2 f 2 2
        2 2 2 f f 2 2 2 2 f f f f 2 2 2
        2 2 2 2 2 f f 2 2 f 2 2 2 2 2 2
        2 2 2 2 2 2 f 2 2 f 2 2 2 2 2 2
        2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 2
        2 2 f f f 2 2 2 2 f 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile36 = img`
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e f e e f f f f f f e e f e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e f e e f f f f f f e e f e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e f e e f f f f f f e e f e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
        e e e e e f f f f f f e e e e e
    `
    //% blockIdentity=images._tile
    export const tile37 = img`
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e f e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e f e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e f e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
    `
    //% blockIdentity=images._tile
    export const tile38 = img`
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e f e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e f e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e e e e f f 5 f f
        f f f 5 f f e e f e e f f 5 f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
        f f f f f f e e e e e f f f f f
    `
    //% blockIdentity=images._tile
    export const tile41 = img`
        . . . . . . . . . . . . . f f f
        . . . . . . . . . . . . f 7 7 f
        . . . . . . . . . . . f 7 7 7 f
        . . . . . . . . . . . f 7 f 7 f
        . . . . . . . . . f f f f 7 7 f
        . . . . . . f f f 5 5 f 7 7 7 f
        . . . f f f 5 5 5 5 5 f 7 7 7 f
        . . f 5 5 5 5 5 5 5 5 f 7 7 7 f
        . . . f f f 5 5 5 5 5 f 7 7 7 f
        . . . . . . f f f 5 5 f 7 7 7 f
        . . . . . . . . . f f f f 7 7 f
        . . . . . . . . . . . f 7 f 7 f
        . . . . . . . . . . . f 7 7 7 f
        . . . . . . . . . . . f 7 7 7 f
        . . . . . . . . . . . . f 7 7 f
        . . . . . . . . . . . . . f f f
    `
    //% blockIdentity=images._tile
    export const tile42 = img`
        f f f . . . . . . . . . . . . .
        f 7 7 f . . . . . . . . . . . .
        f 7 7 7 f . . . . . . . . . . .
        f 7 f 7 f . . . . . . . . . . .
        f 7 7 f f f f . . . . . . . . .
        f 7 7 7 f 5 5 f f f . . . . . .
        f 7 7 7 f 5 5 5 5 5 f f f . . .
        f 7 7 7 f 5 5 5 5 5 5 5 5 f . .
        f 7 7 7 f 5 5 5 5 5 f f f . . .
        f 7 7 7 f 5 5 f f f . . . . . .
        f 7 7 f f f f . . . . . . . . .
        f 7 f 7 f . . . . . . . . . . .
        f 7 7 7 f . . . . . . . . . . .
        f 7 7 7 f . . . . . . . . . . .
        f 7 7 f . . . . . . . . . . . .
        f f f . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile43 = img`
        f f f . . . . . . . . . . . . .
        f 7 7 f . . . . . . . . . . . .
        f 7 7 7 f . . . . . . . . . . .
        f 7 f 7 f . . . . f . . . . . .
        f 7 7 f f f f . f 5 f . . . . .
        f 7 7 7 f 5 5 f f f f . . . . .
        f 7 7 7 f 5 5 5 5 5 f f f . . .
        f 7 7 7 f 5 5 5 5 5 5 5 5 f . .
        f 7 7 7 f 5 5 5 5 5 f f f . . .
        f 7 7 7 f 5 5 f f f f . . . . .
        f 7 7 f f f f f 5 5 f . . . . .
        f 7 f 7 f . . f 5 5 f . . . . .
        f 7 7 7 f . f 5 5 5 5 f . . . .
        f 7 7 7 f f f f f f f f f f . .
        f 7 7 f 7 7 f 7 7 7 7 f 7 7 f .
        f f f 7 7 f 7 7 7 7 7 7 f 7 7 f
    `
    //% blockIdentity=images._tile
    export const tile44 = img`
        . . . . . . . . . . . . . f f f
        . . . . . . . . . . . . f 7 7 f
        . . . . . . . . . . . f 7 7 7 f
        . . . . . . f . . . . f 7 f 7 f
        . . . . . f 5 f . f f f f 7 7 f
        . . . . . f f f f 5 5 f 7 7 7 f
        . . . f f f 5 5 5 5 5 f 7 7 7 f
        . . f 5 5 5 5 5 5 5 5 f 7 7 7 f
        . . . f f f 5 5 5 5 5 f 7 7 7 f
        . . . . f 5 f f f 5 5 f 7 7 7 f
        . . . . f 5 5 5 f f f f f 7 7 f
        . . . . f 5 5 5 f . . f 7 f 7 f
        . . . f 5 5 5 5 5 f . f 7 7 7 f
        . . f f f f f f f f f f 7 7 7 f
        . f 7 f 7 7 7 7 7 f 7 7 f 7 7 f
        f 7 f 7 7 7 7 7 7 7 f 7 7 f f f
    `
    //% blockIdentity=images._tile
    export const tile45 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . f 5 f . . . . . . .
        . . . . . . f 5 f . . . . . . .
        . . . . . . f 5 f . . . . . . .
        . . . . . f 5 5 5 f . . . . . .
        . . . . . f 5 5 5 f . . . . . .
        . . . . . f 5 5 5 f . . . . . .
        . . . . f 5 5 5 5 5 f . . . . .
        . . . . f 5 5 5 5 5 f . . . . .
        . . f f f f f f f f f f f f . .
        . f 7 7 f 7 7 7 7 7 f 7 7 7 f .
        f 7 7 f 7 7 7 7 7 7 7 f 7 7 7 f
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile46 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2
        2 2 f f f f f 2 f f f f 2 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 f f 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 f f 2 2 2
        2 2 f 2 2 2 2 2 2 2 f f 2 2 2 2
        2 2 f 2 2 2 f f f f f 2 2 2 2 2
        2 2 f 2 2 2 2 2 2 2 f f 2 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 f f 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 2
        2 2 f 2 2 2 2 2 2 2 2 f f 2 2 2
        2 2 f 2 2 2 2 2 2 2 f f 2 2 2 2
        2 2 f 2 2 2 2 2 f f 2 2 2 2 2 2
        2 2 f f f f f f 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile47 = img`
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
    `
    //% blockIdentity=images._tile
    export const tile48 = img`
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . f f f f f f f f f f f f f f .
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f .
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f .
        . f f f f f f f f f f f f f f .
    `
    //% blockIdentity=images._tile
    export const tile49 = img`
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . f 2 2 2 2 2 2 2 2 2 2 2 f . .
        f 2 2 2 2 2 2 2 2 2 2 2 2 f . .
        2 2 2 2 2 2 2 2 2 2 2 2 2 f . .
        2 2 2 2 2 2 2 2 2 2 2 2 2 f . .
        2 2 2 2 2 2 2 2 2 2 2 2 2 f . .
        2 2 2 2 2 2 2 2 2 2 2 2 f . . .
        2 2 2 2 2 2 2 2 2 2 2 2 f . . .
        2 2 2 2 2 2 2 2 2 2 2 f . . . .
        2 2 2 2 2 2 2 2 2 2 f . . . . .
        2 2 2 2 2 2 2 2 2 f . . . . . .
        2 2 2 2 2 2 2 f f . . . . . . .
        2 2 2 2 2 f f . . . . . . . . .
        f f f f f . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile50 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        f f f f . . . . . . . . . . . .
        f 2 2 f f f f f f f f f f f f f
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile51 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        f f f f f f f f f f f f f f f f
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile52 = img`
        e e e e f e e e e e f e e e e e
        e e e e f e e e e e f e e e e e
        f f f f f f f f f f f f f f f f
        e f e e e e e f e e e e e f e e
        e f e e e e e f e e e e e f e e
        f f f f f f f f f f f f f f f f
        e e e e f e e e e e f e e e e e
        e e e e f e e e e e f e e e e e
        f f f f f f f f f f f f f f f f
        e f e e e e e f e e e e e f e e
        e f e e e e e f e e e e e f e e
        f f f f f f f f f f f f f f f f
        e e e e f e e e e e f e e e e e
        e e e e f e e e e e f e e e e e
        f f f f f f f f f f f f f f f f
        e f e e e e e f e e e e e f e e
    `
    //% blockIdentity=images._tile
    export const tile53 = img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 5 5 5 f f f f f f 5 5 5
        5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5
        5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5
        5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5
        5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5
        5 5 5 5 f f f 5 5 5 5 f f 5 5 5
        5 5 5 5 5 5 5 f f f f f 5 5 5 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    `
    //% blockIdentity=images._tile
    export const tile54 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . f f f f
        f f f f f f f f f f f f f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile55 = img`
        . f f f f f f f f f f f f f f .
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f .
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f .
        . f f f f f f f f f f f f f f .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
    `
    //% blockIdentity=images._tile
    export const tile56 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . e e e e e e e e e e e e e e .
        e e e e e e e e e e e e e e e e
        . . d . . . . . . . . . . d . .
        . . . d . . . . . . . . d . . .
        . . . . d d . . . . d d . . . .
        . . . . . . d d d d . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . d d . . d d . . . . .
        . . . d d . . . . . . d d . . .
        . . d . . . . . . . . . . d . .
        . e e e e e e e e e e e e e e .
        e e e e e e e e e e e e e e e e
    `
    //% blockIdentity=images._tile
    export const tile57 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . f f f f
        f f f f f f f f f f f f f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile58 = img`
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 f . .
        . . f 8 8 8 8 8 8 8 8 8 8 8 f .
        . . f 8 8 8 8 8 8 8 8 8 8 8 8 f
        . . f 8 8 8 8 8 8 8 8 8 8 8 8 8
        . . f 8 8 8 8 8 8 8 8 8 8 8 8 8
        . . f 8 8 8 8 8 8 8 8 8 8 8 8 8
        . . . f 8 8 8 8 8 8 8 8 8 8 8 8
        . . . f 8 8 8 8 8 8 8 8 8 8 8 8
        . . . . f 8 8 8 8 8 8 8 8 8 8 8
        . . . . . f 8 8 8 8 8 8 8 8 8 8
        . . . . . . f 8 8 8 8 8 8 8 8 8
        . . . . . . . f f 8 8 8 8 8 8 8
        . . . . . . . . . f f 8 8 8 8 8
        . . . . . . . . . . . f f f f f
    `
    //% blockIdentity=images._tile
    export const tile59 = img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 f f f f 8 8 f f f f 8 8 8
        8 8 f 8 8 8 8 8 8 f 8 8 8 f 8 8
        8 8 f 8 8 8 8 8 8 f 8 8 8 f 8 8
        8 8 f 8 8 8 8 8 8 f 8 8 8 f 8 8
        8 8 f 8 8 8 8 8 8 f 8 8 8 f 8 8
        8 8 8 f f 8 8 8 8 f f f f 8 8 8
        8 8 8 8 8 f f 8 8 f 8 8 8 8 8 8
        8 8 8 8 8 8 f 8 8 f 8 8 8 8 8 8
        8 8 8 8 8 f 8 8 8 f 8 8 8 8 8 8
        8 8 f f f 8 8 8 8 f 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    `
    //% blockIdentity=images._tile
    export const tile60 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . f f f f
        f f f f f f f f f f f f f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 f
        f f f f f f f f f f f f f 2 2 f
        . . . . . . . . . . . . f f f f
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile61 = img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 f f 2 2 2 f f f 2 2 2 2 2
        2 2 f 2 f f 2 f f 2 f f 2 2 2 2
        2 2 f 2 2 f 2 f 2 2 2 f 2 2 2 2
        2 2 f 2 2 2 f 2 2 2 f f 2 2 2 2
        2 2 2 f 2 2 f 2 2 2 f 2 2 2 2 2
        2 2 2 f 2 2 2 2 2 2 f 2 2 2 2 2
        2 2 2 f 2 2 2 2 2 f f 2 2 2 2 2
        2 2 2 f f 2 2 2 f f 2 2 2 2 2 2
        2 2 2 2 f f 2 f f 2 2 2 2 2 2 2
        2 2 2 2 2 f f f 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    `
    //% blockIdentity=images._tile
    export const tile62 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . f 2 2 2 2 f . . . . .
        . . . . f 2 2 2 2 2 2 f . . . .
        . . . f 2 2 2 2 2 2 2 2 f . . .
        . . . f 2 2 f f f f 2 2 f . . .
        . . f 2 2 2 f 2 2 f 2 2 2 f . .
        . . f 2 2 2 f 2 2 f 2 2 2 f . .
        . . f 2 2 2 f f f f 2 2 2 f . .
        . . f 2 2 2 f 2 2 2 2 2 2 f . .
        . . f 2 2 2 f 2 2 2 2 2 2 f . .
        . . f 2 2 2 f 2 2 2 2 2 2 f . .
        . . f 2 2 2 f 2 2 2 2 2 2 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . f f f f f f f f f f f f f f .
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile63 = img`
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        . e e e e e e . . e e e e e e .
        . . e e e e . . . . e e e e . .
        . . . e e . . . . . . e e . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile64 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f f f . . . .
        . . . f 2 2 2 2 2 2 2 2 f . . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . f f f f f f f f f f f f f f .
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile65 = img`
        5 2 2 2 4 4 2 2 2 2 5 2 2 2 2 2
        5 5 2 2 2 2 4 2 2 2 2 2 5 2 2 2
        2 2 5 2 2 2 4 2 2 2 2 5 2 2 2 4
        4 2 5 2 2 2 2 2 5 2 2 2 2 4 4 2
        2 2 2 2 4 2 2 5 2 4 2 2 2 2 2 2
        2 5 2 2 2 5 5 2 2 4 4 2 2 2 5 2
        2 2 2 4 4 2 2 2 2 2 2 4 2 5 5 2
        2 2 2 2 4 4 2 2 2 2 2 2 4 5 2 2
        2 2 5 2 4 4 2 2 2 5 2 2 2 5 4 2
        2 2 2 4 4 2 2 2 2 5 2 2 2 2 4 2
        4 2 2 4 2 2 2 2 5 5 2 2 2 2 4 2
        4 4 2 2 2 2 5 5 5 2 2 2 4 4 4 2
        2 2 5 2 2 2 2 2 4 2 2 2 4 2 2 2
        2 2 5 2 2 2 4 4 2 2 2 2 2 5 5 2
        2 2 2 2 2 4 4 2 2 2 2 5 5 5 4 2
        2 2 2 4 4 4 5 2 2 2 5 5 2 2 4 4
    `
    //% blockIdentity=images._tile
    export const tile66 = img`
        5 2 2 2 4 4 2 2 2 2 5 2 2 2 2 2
        5 5 2 2 2 2 4 2 2 2 2 2 5 2 2 2
        2 2 5 2 2 2 4 2 2 2 2 5 2 2 2 4
        4 2 5 2 2 2 2 2 5 2 2 2 2 4 4 2
        2 2 2 2 4 2 2 5 2 4 2 2 2 2 2 2
        2 5 2 2 2 5 5 2 2 4 4 2 2 2 5 2
        2 2 2 4 4 2 2 2 2 2 2 4 2 5 5 2
        2 2 2 2 4 4 2 2 2 2 2 2 4 5 2 2
        2 2 5 2 4 4 2 2 2 5 2 2 2 5 4 2
        2 2 2 4 4 2 2 2 2 5 2 2 2 2 4 2
        4 2 2 4 2 2 2 2 5 5 2 2 2 2 4 2
        4 4 2 2 2 2 5 5 5 2 2 2 4 4 4 2
        2 2 5 2 2 2 2 2 4 2 2 2 4 2 2 2
        2 2 5 2 2 2 4 4 2 2 2 2 2 5 5 2
        2 2 2 2 2 4 4 2 2 2 2 5 5 5 4 2
        2 2 2 4 4 4 2 2 2 2 5 5 2 2 4 4
    `
    //% blockIdentity=images._tile
    export const tile67 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 f f f 7 7 7 7 7 7 7 7 7 7
        7 7 f f 7 7 7 7 7 f f 7 7 7 7 7
        7 7 f 7 7 7 7 7 7 f 7 f f 7 7 7
        7 7 f 7 7 7 7 7 7 f 7 7 f 7 7 7
        7 7 f 7 7 7 7 7 7 f 7 7 f 7 7 7
        7 7 f f 7 7 7 7 7 f 7 7 f 7 7 7
        7 7 7 f f f 7 7 7 f f f f 7 7 7
        7 7 7 7 7 7 f f 7 f 7 7 7 7 7 7
        7 7 7 7 7 7 7 f 7 f 7 7 7 7 7 7
        7 7 7 7 7 7 7 f 7 f 7 7 7 7 7 7
        7 7 7 f 7 7 f f 7 f 7 7 7 7 7 7
        7 7 7 f f f 7 7 7 f 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 f 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile38, function (sprite, location) {
    if (controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile30, function (sprite, location) {
    info.changeScoreBy(10)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile62, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`120010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000002a0000000000000000000000000000000000000000004600292929000000000000000000000000292929292929000000000000000000000000292929292929020202020202020202020202292929292929484848484848484848484848292929292929474747474747474747474747292929`,
            img`
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                2 2 2 . . . . . . . . . . . . 2 2 2
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,sprites.dungeon.floorDark1,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,sprites.builtin.crowd9,sprites.builtin.crowd4,sprites.builtin.crowd3,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.dungeon.hazardLava0,sprites.dungeon.buttonTeal,sprites.dungeon.buttonTealDepressed,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    for (let value of tiles.getTilesByType(myTiles.tile46)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
})
function startbonus2 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000002a0000000000000000000000000000002a0000000000000000000000000000002a0000000000000000000000000000002a0000000000000039393939000000002a0000000000000000000000000000002b000000000000002f2f2f2f00000000000000003000000000000000000000300000002f2f000000300000300000002f2f0000000000002f2f00002f2f00000000000000300000000000000000000030000000002f2f2f0000000000002f2f2f0000000000000000300000300000000000003801002f2f2f2f00002f2f2f2f0000000000000000000000000000000000000037373737373737373737373737373737`,
            img`
                . . . . . . . . . . . . . . 2 .
                . . . . . . . . . . . . . . 2 .
                . . . . . . . . . . . . . . 2 .
                . . . . . . . . . . . . . . 2 .
                . . . . . . . . . . . . . . 2 .
                . . . . . . . . . . . . . . 2 .
                . . . . . . 2 2 2 2 . . . . . .
                . . . . . . . . . . . . . . . .
                . 2 2 . . . . . . . . . . 2 2 .
                . . . . . 2 2 . . 2 2 . . . . .
                . . . . . . . . . . . . . . . .
                . . 2 2 2 . . . . . . 2 2 2 . .
                . . . . . . . . . . . . . . . .
                2 . . 2 2 2 2 . . 2 2 2 2 . . .
                . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,sprites.dungeon.floorDark1,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mario, myTiles.tile1)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(myTiles.tile53)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, myTiles.tile0)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
        `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(myTiles.tile61)) {
        champi_1up = sprites.create(img`
            . . . . . f f f f f f . . . . .
            . . . f f f 1 7 7 1 f f f . . .
            . . f f 1 1 1 7 7 1 1 1 f f . .
            . f f 7 1 1 7 7 7 7 1 1 7 f f .
            . f 1 7 7 7 7 7 7 7 7 7 7 1 f .
            f f 1 1 7 7 1 1 1 1 7 7 1 1 f f
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f
            f 1 1 1 7 1 1 1 1 1 1 7 1 1 1 f
            f 7 7 7 7 7 1 1 1 1 7 7 7 7 7 f
            f 7 7 f f f f f f f f f f 7 7 f
            f f f f 1 1 f 1 1 f 1 1 f f f f
            . f f 1 1 1 f 1 1 f 1 1 1 f f .
            . . f 1 1 1 1 1 1 1 1 1 1 f . .
            . . f f 1 1 1 1 1 1 1 1 f f . .
            . . . f f f f f f f f f f . . .
        `, SpriteKind.champ1up)
        tiles.placeOnTile(champi_1up, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bdf, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gumpa, function (sprite, otherSprite) {
    if (mario.y < otherSprite.y - 5) {
        mario.vy = -150
        otherSprite.destroy()
        music.pewPew.play()
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        music.pewPew.play()
    }
})
scene.onHitWall(SpriteKind.bdf, function (sprite) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.bowser, myTiles.tile66, function (sprite, location) {
    pause(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fesprit, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    mario.startEffect(effects.fire, 5000)
})
function startbowser () {
    tiles.setTilemap(tiles.createTilemap(
            hex`120010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000002a0000000000000000000000000000000000000000004400292929454545454545454545454545292929292929000000000000000000000000292929292929020202020202020202020202292929292929484848484848474747474848292929292929474747474748484848484847292929`,
            img`
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,sprites.dungeon.floorDark1,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,sprites.builtin.crowd9,sprites.builtin.crowd4,sprites.builtin.crowd3,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.dungeon.hazardLava0,sprites.dungeon.buttonTeal,sprites.dungeon.buttonTealDepressed,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mario, myTiles.tile1)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(myTiles.tile46)) {
        bowser = sprites.create(img`
            . . . . . . . . . . . . . . . f . . . f . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f 1 f . f 1 f . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . f 1 4 4 f 1 1 f . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f 4 4 f f 1 1 1 f . f f . . . . . . . . . . . . . . . .
            . . . . . . . . . f 1 1 f f f 1 1 1 1 f f f 1 1 f . . . . . . . . . . . . . . .
            . . . . . . . f f 1 4 4 4 f 1 1 1 1 1 f 4 4 1 f . . . . . . . . . . . . . . . .
            . . . . . . f 1 4 4 f f 7 7 f 1 1 1 f 4 1 4 f . . . . . . . . . . . . . . . . .
            . . . . . . . f f 1 1 f 7 7 7 f f f 4 4 4 1 1 f f . . . . . . . . . . . . . . .
            . . . . f f f f 1 1 1 f 7 7 7 7 7 7 f 4 4 4 4 1 4 f . . . . . . . . . . . . . .
            . . . f 4 4 4 f f 1 1 f 7 7 7 7 7 7 f 4 4 4 4 4 4 4 f . . . . . . . . . . . . .
            . . f 4 4 4 4 4 f 1 f 7 7 7 7 7 7 7 7 f 4 1 1 1 f 4 f . . . . . . . . . . . . .
            . . f 4 4 4 4 4 4 f 7 7 f f 7 7 7 7 7 f 4 4 4 1 f f . . . . . . . . . . . . . .
            . . f 4 4 4 4 4 4 4 f f 4 4 f 7 7 7 7 f 1 4 4 1 1 f . . . . . . . . . . . . . .
            . . . f 1 4 4 4 4 4 4 4 4 4 4 f 7 7 7 f f 1 4 4 4 1 f . . . . . . . . . . . . .
            . . . f 1 f 1 1 4 4 4 4 4 4 4 f 7 7 f f f f 4 4 f 4 f . . . . . . . . . . . . .
            . . . . f f 1 1 f f 1 1 f 4 4 f f f 1 1 1 f f f 1 f . . . . . . . . . . . . . .
            . . . . . . f f f f f f 4 4 f f 1 1 1 f f 7 7 1 1 f f f f f . . . . . . . . . .
            . . . . . . . f f 4 4 4 4 f f 1 1 1 f 7 7 7 7 7 7 7 7 1 1 1 f . . . . . . . . .
            . . . . . . f 4 4 4 4 4 f f f 1 1 f 7 7 1 7 7 7 7 7 7 1 1 1 f . . . . . . . . .
            . . . . . . . f f f f f f f 1 1 f 7 7 1 1 7 7 7 7 7 7 7 1 1 f . . . . . . . . .
            . . . . . . . . . . . . f f 1 1 f 7 7 7 7 7 7 1 1 1 7 7 7 7 f . . . . . . . . .
            . . . . . . . . . . . f 4 f 1 1 f 7 7 7 7 7 7 1 1 1 7 7 7 7 f . . . . . . . . .
            . . . . . . . . . . . f 4 4 f 1 1 f f 7 7 7 7 7 1 1 7 7 7 7 1 f . . . . . . . .
            . . . . . . . . . . . f 1 7 f 1 1 1 1 f 7 7 7 7 7 7 7 7 7 7 1 1 f . . . . . . .
            . . . . . f f f . . . f 7 7 7 f 1 1 1 f f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . .
            . . . . f 1 4 4 f f f 4 f 7 1 7 f 1 1 1 f 7 1 1 7 7 7 7 7 7 7 f . . . . . . . .
            . . . . . f 4 4 4 4 4 4 4 f 7 7 f 1 1 1 f 7 7 1 7 7 1 1 1 7 7 f . . . . . . . .
            . . . . . f 4 4 4 4 4 4 4 f 7 7 7 f 1 1 f f 7 7 7 7 1 1 1 7 7 1 f . . . . . . .
            . . . . f 4 4 4 4 4 4 4 4 4 f 1 7 f 1 1 1 f 7 7 7 7 7 1 1 7 7 f . . . . . . . .
            . . . f 1 4 4 4 4 4 4 4 4 4 f 7 7 f 1 1 1 f f 7 7 7 7 7 7 7 7 f . . . . . . . .
            . . . . f f 4 4 4 4 4 4 4 f f f f f f 1 1 1 f f 7 7 7 7 7 7 f . . . . . . . . .
            . . . . . f 1 4 4 4 f f f f . . f 4 f 1 1 1 1 1 f f 7 7 7 f . . . . . . . . . .
            . . . . . . f f f f . . . . f f 4 4 4 f 1 1 1 1 1 1 f f f 1 f . . . . . . . . .
            . . . . . . . . . . . . . . f 4 4 4 4 4 f 1 1 1 1 1 1 1 1 1 f f . . . . . . . .
            . . . . . . . . . . . . . . f 4 4 4 4 4 4 f f 1 1 1 1 1 1 f f 1 f . . . . . . .
            . . . . . . . . . . . . . . f 4 4 4 4 4 4 4 4 f f f f f f f 1 1 f f . . . . . .
            . . . . . . . . . . . . . . f f 4 4 4 4 4 4 f f 4 4 4 4 4 4 f f f 1 f . . . . .
            . . . . . . . . . . . . f f 4 4 4 4 4 4 4 4 f f f 4 4 4 4 4 4 4 4 f f . . . . .
            . . . . . . . . . . . f 4 4 4 4 4 4 4 4 4 4 4 f . f f f 4 4 4 4 4 4 4 f . . . .
            . . . . . . . . . . f 4 4 4 4 4 4 4 4 4 4 4 4 f . . . . f f f f f f f . . . . .
            . . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . . . . . . . . .
        `, SpriteKind.bowser)
        tiles.placeOnTile(bowser, value)
        tiles.setTileAt(value, myTiles.tile0)
        bowser.y += 3
        bowser.ay = 300
        bouseux = "vivant"
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.champ1up, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 300)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile28, function (sprite, location) {
    info.changeScoreBy(1)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowser, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -150
    }
})
function startbonus1 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1e00140000000000000000000000000000000000000000000000180000000000000000000000000000000000002f2f2f2f2f2f2f2f000000180000000000000000000000000000000000002f3131313131312f000000180000000000000000000000000000000000002f3131313131312f000000180000000000000000000000000000000000002f3131313131312f000000180000000000000000000000000000000000002f3131313131312f000000361e35000000000000000000000000000000002f3131313131312f0000002f2f2f2f00003131000000000000000000000000000000000000000000000000000000002f2f000000000000000000000000000000000000000000000000003131310000000000000000000000000000000000000000000000000000002f2f2f0000000000000000003131000000000000000000000000313100000000000000000000000000002f2f0000000000000000000000002f2f0000000000000000003131310000000000000034343434343400000000000000313131000000002f2f2f00000000002f2f2f2f2f2f2f2f2f2f00000000002f2f2f00000000000000313131000000000000000000000000000031313100000000001e350100002f2f2f31310000000000000000000031312f2f2f000000000000000000000000002f2f000000000000000000002f2f0000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030`,
            img`
                . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . .
                . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . 2 . . . . . . .
                . . . . . . . . . . . 2 . . . . . . 2 . . . 2 . . . . . . .
                . . . . . . . . . . . 2 . . . . . . 2 . . . 2 . . . . . . .
                . . . . . . . . . . . 2 . . . . . . 2 . . . 2 . . . . . . .
                . . . . . . . . . . . 2 . . . . . . 2 . . . 2 2 2 . . . . .
                . . . . . . . . . . . 2 . . . . . . 2 . . . 2 2 2 2 . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 . . . . . . . . . . . . 2 2 . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 2 . . . 2 2 2 . . . . . . . . . . . . . . 2 2 2 . . . . .
                . . . . . . . . 2 2 . . . . . . . . . . 2 2 . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,sprites.dungeon.floorDark1,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    tiles.placeOnRandomTile(mario, myTiles.tile1)
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(myTiles.tile53)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, myTiles.tile0)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
        `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fleur, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1500)
})
function startlvl () {
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f d d 6 6 f 6 6 6 6 f 6 d d f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f d d 6 f 6 6 6 6 6 f 6 d d f f f f f f f f f f f f f f f f f f f d 6 6 6 6 f 6 6 6 6 f 6 6 6 d f f f f f f f f f f f f f f f f f f d d 6 6 f 6 6 6 6 f 6 d d f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f d d 6 6 f 6 6 6 f 6 6 d d f f f f f f f f f f f f f f f f f f f f d 6 6 6 f 6 6 6 6 6 f 6 6 6 d f f f f f f f f f f f f f f f f f d f 6 6 6 6 f 6 6 6 6 f 6 6 6 6 d f f f f f f f f f f f f f f f f d 6 6 6 6 f 6 6 6 6 f 6 6 6 d f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f d 6 6 6 6 f 6 6 6 f 6 6 6 6 d f f f f f f f f f f f f f f f f f f d f 6 6 6 f 6 6 6 6 6 f 6 6 6 f d f f f f f f f f f f f f f f f d 6 6 f 6 6 6 f 6 6 6 6 f 6 6 6 f 6 d f f f f f f f f f f f f f f d f 6 6 6 6 f 6 6 6 6 f 6 6 6 6 d f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f d f 6 6 6 d d d d d d d 6 6 6 f d f f f f f f f f f f f f f f f f d 6 6 f 6 6 d d d d d d d 6 6 f 6 6 d f f f f f f f f f f f f f f d 6 6 6 f 6 d d d d d d d 6 6 f 6 6 d f f f f f f f f f f f f f d 6 6 f 6 6 6 f 6 6 6 6 f 6 6 6 6 f d f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f d 6 6 f d d c c c c c c c d d f 6 6 d f f f f f f f f f f f f f f f d 6 6 6 d d c c c c c c c d d 6 6 6 d f f f f f f f f f f f f f d 6 6 6 6 d d c c c c c c c d d 6 6 6 6 d f f f f f f f f f f f f d 6 6 6 f 6 d d d d d d d 6 6 6 f 6 d f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c d 6 6 d f f f f 6 f 6 f 6 f 6 f 6 f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f d 6 6 6 6 d d c c c c c c c d d f 6 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f 6 f 6 f 6 f 6 f 6 f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d f f d f f 6 f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f f f d 6 6 6 d c c c c c c c c c c c d 6 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d 6 6 d f f 6 f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f 6 f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 6 f 6 f 6 f 6 f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 6 f 6 f 6 f 6 f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 6 f 6 f 6 f 6 f 6 f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 6 f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 6 f 6 f 6 f 6 f 6 f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d f f d f f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f 6 f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 6 f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 6 f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f 6 f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 6 f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f 6 f 6 f 6 f 6 f
        6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f 6 f 6 f 6 f 6 f f
        f f f f f f f 6 f f f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f 5 f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f 5 f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f 6 f f f f f f f f
        f f f f f f f 6 f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 f f f f f d f f d c c c c c c c c c c c c c d f f d f f f f f f f f f 6 f f f f f f f f
        f f f f f f f 6 f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f 6 f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 2 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 2 4 5 f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 5 4 2 2 2 4 5 f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 5 4 2 2 2 4 5 f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 5 4 2 4 5 f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f d f f d c c c c c c c c c c c c c d f f d f f f 5 4 2 2 2 4 5 f f f d f f d c c c c c c c c c c c c c d f f d f f f 5 4 2 2 2 4 5 f f d f f d c c c c c c c c c c c c c d f f d f f 5 4 2 2 2 4 5 f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f 6 f f f f f f f f f f 6 f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 2 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 2 4 5 f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f 5 4 2 2 2 4 5 f f d f f d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f 6 f f f f f f f f f f 6 f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 5 4 2 4 5 f f f d 6 6 d c c c c c c c c c c c c c d f f d f f f f f f f f f f f f f f f f f f
        f 6 f f f f f f f f f f 6 f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 4 4 4 4 4 4 4 f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f 4 4 4 4 4 4 4 f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f 5 4 5 f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f e e e e e e e e e f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f e e e e e e e e e f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f 4 4 4 4 4 4 4 f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d f f d c c c c c c c c c c c c c d f f d f f f e e e e e e e f f f d f f d c c c c c c c c c c c c c d f f d f f f e e e e e e e f f d f f d c c c c c c c c c c c c c d 6 6 d f e e e e e e e e e f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f e e e e e f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f e e e e e f f f d 6 6 d c c c c c c c c c c c c c d f f d f f e e e e e e e f f d f f d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f e e e f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f e e e f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f e e e e e f f f d 6 6 d c c c c c c c c c c c c c d f f d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f e f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f e f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f e e e f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f e f f f f f d 6 6 d c c c c c c c c c c c c c d 6 6 d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d 6 6 6 f 6 d f f f f f f f f f f f f f d d d d d d d d d d d d d d d d 6 6 f 6 d f f f f f f f f f f f f d d d d d d d d d d d d d d d 6 6 f 6 6 d f f f f f f f f f f f d d d d d d d d d d d d d d d d 6 6 6 f d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d d 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f 6 d f f f 6 f 6 f 6 f 6 f 6 f d d 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f 6 d f f f f f f f f f f f f d d 6 6 f 6 6 6 f 6 6 6 f 6 6 6 6 f 6 6 d f f f f f f f f f f f d d 6 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d d 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f 6 d f f 6 f 6 f 6 f 6 f 6 f f d d 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f 6 d f f f f f f f f f f f f d d 6 6 f 6 6 6 f 6 6 6 f 6 6 6 6 f 6 6 d f f f f f f f f f f f d d 6 6 6 f 6 6 6 6 f 6 6 6 6 f 6 6 6 f d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f 6 f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f 6 f 6 f 6 f 6 f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 f f f f f f f f f f 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    `)
    if (currentlvl == 0) {
        tiles.setTilemap(tiles.createTilemap(
            hex`b400190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000313100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000313100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000003131000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000031000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000031083100003108310000003108310000000000000000310000000000000000000000000000000000000000000031000000000000000000000000000000000000000000000000000c00000000000000310000000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040505050505050505050505050505050505130000000000310000000000000000000000000000000000000000000403000000000000000000000000000000000000000000000000000b310000000405050505050505050505050503000000000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000000000000000001000000000001c00000000000000000000000000000000000000310600000000000000000000000000000000000000000000000000000000040300000000000000000000000000000000000000000403000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003100000000000000000403000000000000000000000000000000000000001000000000001b00000000000000000000000000000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000900000000003100000000000000000000000000000000000000000000001000000000001b00000000000000000000000000000000310600000000000000000000000000000000000000000000000000000000000031000000040300000000000000000000000000000403000000000000310000000000000000000006000000000600000000060000000006000000060000000600000000000000000000000000000403000d00040300000000000000040300000c00000000040503000000310000000000000000000000000000000000001000000000001b0000000000000000000000000000000403000000000000000000000000000000000000000000310000000000310000000900000000000000000008000031000d000000000000000000000000090000003100070031000000003100000000310000000031000000000000000000000000000000003100070000310831000000000900000000073108310000000000000c00000000000000000000190000310000000031000000003100000000311000000000001b00000000000100000000000000310600000000000000000000000000000000000000000000000403000d0004030006000c0000310000000405050505050300090000000000000000000000000c0000040505050505030600040503060004050306000405030600040306000403060004030600040505050505050505050505050e05050505050505050300000000000c00000000000000000019190604050306060405030606040503060604050f00000000001b0000000000000000000000060403000000000000000000000000003100070000310831000000000000090000000000000c00000900310000000000000000000c0000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000c00000000003100001919190000000000000000000000000000000000000000000000001a00000000191919191919190000000000000000000000000000001919191919191919191919000000000c0000000000000c00000c00090000000000000000000c0000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000c00001919191919191919190000000000000000000000000000000000000019191919191919191919191919191919190202020202020202020202020202021919191919191919191919020202020a0202020202020a02020a020a0202020202020202020a0202020202020202020202020a0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020a02020202020202020202020202020a02021919191919191919190202020202020202020202020202020202020219191919191919191919`,
            img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . .
                . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 . . . . . . . 2 2 . . 2 . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . .
                . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 . . . 2 . . . . . . 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 2 . . 2 2 2 . . 2 2 2 . . 2 2 2 . . 2 2 . . 2 2 . . 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . 2 2 . 2 2 2 . . 2 2 2 . . 2 2 2 . . 2 2 2 . . . . . . 2 . . .
                . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . 2 . . . . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . 2 . . 2 . 2 . . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . 2 . . 2 . 2 . . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,sprites.dungeon.floorDark1,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    } else if (currentlvl == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`7d0010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000000000000031000000000000310000000000000031000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031001100000000000000000000000000000000001100000d000405050503000d000004030000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004030012130000000000000000000000000000001514000009000000000000000900000000000031000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000310000000012133100000000000000000000003115140000000c000000000000000c00000000000403000000000000000000000037000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000310004030000000000121300000000000000000000001514000000000c000000000000000c000000000000000000310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b0000000000000100000004030000000000000000001213000000000000000000151400000000000c000000000000000c000000000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a0000000000000000310000000000000000000000000012133107000000073115140000000000000c000000000000000c000000000000000000000000310000000000000000000000000000000000000000000000000000000000000000000004030000000000000000000000000000000000000000000000000000001a0000000004050505050300000000000000000000000000120505050505050514000000000000000c000000000000000c003100000000000000000004030000000000000000003100000000310000000031000000000000000000000031000600000600310000000000000000000000310000000031000000000000311a0000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000c0031000000000000000000000000000000000000000403000d000403000d00040300000000000000000000000403000000000403000000000000000000000403000d000403000000000031001a0000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000c31313100000000000000000000000000003107000000000009000000000900000000310831000000003100060000000000000000060000310006000600000000000900000000000000310000190000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000c0916090000000000000000000000001c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c0006001c1c1c00000000000000000000001c1c1c0006001c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c02020202020202020202020202020202020202020202020202020202020202020202020a020202020202020a0a170a0202020202020202020202021c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c0202021c1c1c02020202020202020202021c1c1c0202021c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c`,
            img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . 2 2 2 2 2 . . . . 2 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . 2 2 . 2 2 . . . . . . . . . . . . . . . 2 2 . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . 2 2 . . . 2 . . . . . . . 2 . . . . . 2 2 . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . 2 2 . . . . . 2 2 . . . . . . . . . . . 2 2 . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . 2 2 . . . . . . . . . 2 2 . . . . . . . . . 2 2 . . . . . 2 . . . . . . . 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . 2 2 . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 . . . 2 2 . . . . . . . . . . . 2 2 . . . . 2 2 . . . . . . . . . . 2 2 . . . 2 2 . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,sprites.dungeon.floorDark1,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    } else if (currentlvl == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`a00019000000000000000000000000000000000000000000000000000000001000000c00000c00000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000002b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000002b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000002b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003131312e2f2d0000000000000000000000000000000000000000002100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000310000000405050505050300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000403000000310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004030000000000000000040300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c00000b0000000000000000000000000000000000000000000000000000000000310831000000000000000000000000000000000000000000000000000000000000000000000031000000310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000c00000c0000000000000000000000000000000000000000000000000000000000000004050503000000000000000000000000000000000000000000000000000000000000000000000403000000040300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000311000000c00000b0000000000000000000000000000000000000000000000000000003100000000000000000000000000000000000000000000000000000000000000000000000000000000310000000000000000000000040300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000311000000c0000000000000000000000000000000000000000000000000000000000000403000000000000000000000000000000000000000000000000000000000000000000000000000004030000000000000000040300000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003100310031001000000c0000000000310000310007003100000000000000000000000000003100060000000000000000000000000700000007000000000000000000000000000000000000000000310000000000040300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000604050505050505051400000b0000000000090000040505050300000000000000000000000000000403000000000000000000000004050505050505050300000000000000000000000000000000000000040300000000000000000000000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000000000003100000c0000000000000000000000000000000000003100060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000310000000000000403000000000000000000000000000000000000000000000000000000000000000000000000000000000000002900000000000000000000000000000000000000000004030000000000000000000000000000000900000c0000000000000000000000000000000000000403000000000000000000000000000000000000000000000000003100000000000000000000000000000000000000040300000000000000000004030000000000000000000000000000000000000000000000000000000000000000000000000000282227000000000000000000000000000000003100000000000000000000000000000000003100000c00000c0000000000000000000000000000310000060000000000000000000000000000000000000000000000000000000403000000000000000000000000000000000000000000003100000000000000000000000000000000313131310000000000000000003100000000000000000000000000000028232223270000000000000000000000000000000403060000000000000000000007000000000900000c00000c0000000000000000000000000405050503000000000000000000000000000000000000000000000000003100000000000000000000000000000000000000000000000000040300000000000000000000000000040505050505050505050300000d00040505030000000000000000000000002522232223222600000000000000000000003100060000000403000000000000040505050300000c00000c00000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000403000000000000000000000000000000000000000000310000000000000000040300000000040300000000000000000000000000000900000000000000000000000000000000002522232223222600000000010000000000000403000000000000003108310000000000000000000c00000c00000c0000000000000000000000000000000000000000000000000000003100060006003100000000003100000000000000000000000000000000000000000000000000040300000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000002522232423222600000000000000310000000000000000000000040505050306000000000000000c00000c00000c0000000000000000000000000000000000000000000000000000040503000600040503000d00040503000000000000000000000000000700003108313108310000000000000000040300000000000403000000000000000000000000000000000c00000000000000000000000000000000002522232223222600001c1c1c1c1c1c1c1c000000000000000000000000000000000000000000000c00000c00000c000000000000000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000001c1c1c1c1c1c1c1c1c1c1c1c00000000000000000000000000000000000000000000000000000000000000000c000000000000001c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c020202020202020202020202020202020202020202020a02020a02020a0202020202020202020202020202020202020202020202020202020202020202020202020a0202020202020202020202020202021c1c1c1c1c1c1c1c1c1c1c1c02020202020202020202020202020202020202020202020202020202020202020a020202020202021c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c`,
            img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 . . . . . . 2 2 . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . 2 . . . . . 2 . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 2 2 . . . . . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . 2 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,sprites.dungeon.floorDark1,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile41,myTiles.tile42,myTiles.tile43,myTiles.tile44,myTiles.tile45,myTiles.tile46,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile58,myTiles.tile59,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,myTiles.tile64,myTiles.tile65,myTiles.tile66,myTiles.tile67],
            TileScale.Sixteen
        ))
    } else {
        game.over(true, effects.confetti)
    }
    if (spawn == "lvl") {
        tiles.placeOnRandomTile(mario, myTiles.tile1)
    } else if (spawn == "bonus1") {
        tiles.placeOnRandomTile(mario, myTiles.tile59)
    } else if (spawn == "bonus2") {
        tiles.placeOnRandomTile(mario, myTiles.tile35)
    }
    scene.cameraFollowSprite(mario)
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile59)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile35)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile67)) {
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of sprites.allOfKind(SpriteKind.fesprit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bouh)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.trucnoir)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fleur)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.gumpa)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(myTiles.tile7)) {
        esprit_de_feu = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . . f 2 4 2 2 f . . . . .
            . . . . f 2 f 2 2 f 5 f . . . .
            . . . f 4 2 f 2 2 f 2 4 f . . .
            . . . f 2 2 f 2 2 f 2 2 f . . .
            . . . f 5 2 2 2 5 2 2 2 f . . .
            . . . . f 2 4 2 2 4 2 f . . . .
            . . . . . f 2 f f 2 f . . . . .
            . . . . . f 5 f . f f . . . . .
            . . . . . . f . . f . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.fesprit)
        tiles.placeOnTile(esprit_de_feu, value)
        tiles.setTileAt(value, myTiles.tile0)
        animation.runMovementAnimation(
        esprit_de_feu,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        esprit_de_feu.startEffect(effects.fire)
    }
    for (let value of tiles.getTilesByType(myTiles.tile9)) {
        truc_noir = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.trucnoir)
        tiles.placeOnTile(truc_noir, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        fleur = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . .
            . . f f . . . . . . . . . . . . . . . . . f f . .
            . f 1 1 f . . . . . . . . . . . . . . . f 1 1 f .
            . f 1 1 1 f . . . . . . . . . . . . . f 1 1 1 f .
            . . f 1 1 1 f . . . . . . . . . . . f 1 1 1 f . .
            . f 2 f 1 1 1 f . . . . . . . . . f 1 1 1 f 2 f .
            . f 2 2 f 1 1 1 f . . . . . . . f 1 1 1 f 2 2 f .
            . f 1 1 2 f 1 1 1 f . . . . . f 1 1 1 f 2 1 1 f .
            . f 1 1 2 2 f 1 1 1 f . . . f 1 1 1 f 2 2 1 1 f .
            . . f 2 2 2 2 f 1 1 1 f f f 1 1 1 f 2 2 2 2 f . .
            . . f 2 2 2 2 2 f 1 1 1 1 1 1 1 f 2 1 1 2 2 f . .
            . . . f 1 1 2 2 2 f f f f f f f 2 2 1 1 2 f . . .
            . . . f 1 1 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 f . . .
            . . . . f 2 2 2 2 1 1 2 2 2 2 1 1 2 2 2 f . . . .
            . . . . . f 2 2 2 2 2 2 2 2 2 1 1 2 2 f . . . . .
            . . f f . . f f 2 2 2 2 1 1 2 2 2 f f . . f f . .
            . f 7 7 f . . . f f f 2 1 1 f f f . . . f 7 7 f .
            f 7 7 7 7 f f f . . f 7 7 7 f . . f f f 7 7 7 7 f
            f 7 7 7 7 7 7 7 f . f 7 7 7 f . f 7 7 7 7 7 7 7 f
            . f 7 7 7 7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 7 7 f .
            . . f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f . .
            . . . . f f f f f f f f f f f f f f f f f . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.fleur)
        tiles.placeOnTile(fleur, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile53)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, myTiles.tile0)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . f 5 5 5 f f f 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . f 5 5 5 f 5 5 5 5 5 5 f . . .
            . . f 5 5 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 f 5 5 f . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 f f 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . f 5 5 f 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f 5 5 f . . . . . . .
            . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . f 5 5 f f f 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . f 5 5 f 5 5 5 5 5 f . . . .
            . . . f 5 5 5 5 5 5 f . . . . .
            . . . . f 5 5 5 5 f . . . . . .
            . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . . .
        `],
        100,
        true
        )
    }
    for (let value of tiles.getTilesByType(myTiles.tile8)) {
        gumpa = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f f f f e e f f f f . . .
            . . . . f 1 f e e f 1 f . . . .
            . . . f e 1 1 f f 1 1 e f . . .
            . f f e e 1 f e e f 1 e e f f .
            f e e e e 1 f e e f 1 e e e e f
            f e e e e e e e e e e e e e e f
            f e e 1 f f f f f f f f 1 e e f
            . f e 1 e e e e e e e e 1 e f .
            . . f f f f f f f f f f f f . .
            . . . f e 1 1 1 1 1 1 f . . . .
            . f f f f e 1 1 1 1 1 1 f f f .
            f f f f f f e e e e e f f f f f
            f f f f f f f . . . f f f f f f
        `, SpriteKind.gumpa)
        tiles.placeOnTile(gumpa, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bouh, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.blizzard, 200)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile29, function (sprite, location) {
    info.changeScoreBy(5)
    currentlvl += 1
    spawn = "lvl"
    startlvl()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trucnoir, function (sprite, otherSprite) {
    otherSprite.destroy()
    bouh = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . . . . . .
        . . . . f f 1 1 1 1 1 1 f f . . . . . .
        . . . f 1 1 1 1 1 1 1 1 b b f . . . . .
        . . f 1 1 1 1 1 1 1 1 1 1 1 b f . . . .
        . . f 1 f 1 f 1 1 1 1 1 1 1 b f . . . .
        . f 1 1 f 1 f 1 1 1 1 1 f f 1 b f . . .
        . f 1 1 1 1 1 1 1 1 1 f 1 1 f b f . . .
        . f 1 2 1 2 1 2 1 1 1 1 1 1 f b f . . .
        . f 1 2 2 2 2 2 1 1 1 1 1 f 1 1 b f . .
        . f 1 2 2 2 2 2 2 1 1 1 1 1 1 1 b f . .
        . . f 1 2 1 2 1 2 1 1 1 1 1 1 b b f . .
        . . f 1 1 1 1 1 1 1 1 1 b b b b f . . .
        . . . f 1 1 1 1 1 1 b b b f f f . . . .
        . . . . f f f b b b b f f . . . . . . .
        . . . . . . . f f f f . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.bouh)
    bouh.setPosition(mario.x + 60, mario.y - 60)
    bouh.follow(mario, 35)
    bouh.say("Bouahahahaha", 1500)
    nombrebouh += 1
})
let bdf: Sprite = null
let bouh: Sprite = null
let gumpa: Sprite = null
let fleur: Sprite = null
let truc_noir: Sprite = null
let esprit_de_feu: Sprite = null
let bouseux = ""
let bowser: Sprite = null
let champi_1up: Sprite = null
let coin: Sprite = null
let mario: Sprite = null
let spawn = ""
let currentlvl = 0
info.setLife(5)
info.setScore(0)
let nombrebouh = 0
currentlvl = 0
spawn = "lvl"
mario = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 2 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . .
    . . . . e e e d d d f d . . . . . . . .
    . . . e d e d d d d f d d d . . . . . .
    . . . e d e e d d d d f d d d . . . . .
    . . . e e d d d d d f f f f . . . . . .
    . . . . . d d d d d d d d . . . . . . .
    . . . . 2 2 8 2 2 8 2 2 . . . . . . . .
    . . . 2 2 2 8 2 2 8 2 2 2 . . . . . . .
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . . . . .
    . . 1 1 2 8 5 8 8 5 8 2 1 1 . . . . . .
    . . 1 1 1 8 8 8 8 8 8 1 1 1 . . . . . .
    . . 1 1 8 8 8 8 8 8 8 8 1 1 . . . . . .
    . . . . 8 8 8 . . 8 8 8 . . . . . . . .
    . . . e e e . . . . e e e . . . . . . .
    . . e e e e . . . . e e e e . . . . . .
    . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mario.ay = 350
controller.moveSprite(mario, 100, 0)
startlvl()
game.onUpdate(function () {
    mario.setImage(img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . 2 2 2 2 2 2 2 . . . . . . . .
        . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . .
        . . . . e e e d d d f d . . . . . . . .
        . . . e d e d d d d f d d d . . . . . .
        . . . e d e e d d d d f d d d . . . . .
        . . . e e d d d d d f f f f . . . . . .
        . . . . . d d d d d d d d . . . . . . .
        . . . . 2 2 8 2 2 8 2 2 . . . . . . . .
        . . . 2 2 2 8 2 2 8 2 2 2 . . . . . . .
        . . 2 2 2 2 8 8 8 8 2 2 2 2 . . . . . .
        . . 1 1 2 8 5 8 8 5 8 2 1 1 . . . . . .
        . . 1 1 1 8 8 8 8 8 8 1 1 1 . . . . . .
        . . 1 1 8 8 8 8 8 8 8 8 1 1 . . . . . .
        . . . . 8 8 8 . . 8 8 8 . . . . . . . .
        . . . e e e . . . . e e e . . . . . . .
        . . e e e e . . . . e e e e . . . . . .
        . . . . . . . . . . . . . . . . . . . .
    `)
    if (mario.vy < 0) {
        mario.setImage(img`
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 2 2 2 2 2 2 2 . 1 1 1 . .
            . . . . . . 2 2 2 2 2 2 2 2 2 2 1 1 . .
            . . . . . . e e e d d d f d . 2 2 2 . .
            . . . . . e d e d d d d f d d d 2 2 . .
            . . . . . e d e e d d d d f d d d 2 . .
            . . . . . e e d d d d d f f f f 2 . . .
            . . . . . . . d d d d d d d d 2 2 . . .
            . 1 1 1 2 2 2 2 8 2 2 2 2 8 2 2 . . e .
            . 1 1 1 2 2 2 2 2 8 2 2 2 2 8 . . e e .
            . . 1 . . 2 2 2 2 8 8 8 8 8 5 8 8 e e .
            . . . . . . 8 8 8 8 5 8 8 8 8 8 8 e e .
            . . . . e e 8 8 8 8 8 8 8 8 8 8 8 e e .
            . . . e e e 8 8 8 8 8 8 8 . . . . . . .
            . . . e e . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
        `)
    }
    if (mario.vx < 0) {
        mario.image.flipX()
        mario.setImage(mario.image)
    }
})
game.onUpdate(function () {
    if (nombrebouh > 0) {
        bouh.setImage(img`
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
            . . . . . . f f f f f f . . . . . . . .
            . . . . f f 1 1 1 1 1 1 f f . . . . . .
            . . . f 1 1 1 1 1 1 1 1 b b f . . . . .
            . . f 1 1 1 1 1 1 1 1 1 1 1 b f . . . .
            . . f 1 f 1 f 1 1 1 1 1 1 1 b f . . . .
            . f 1 1 f 1 f 1 1 1 1 1 f f 1 b f . . .
            . f 1 1 1 1 1 1 1 1 1 f 1 1 f b f . . .
            . f 1 2 1 2 1 2 1 1 1 1 1 1 f b f . . .
            . f 1 2 2 2 2 2 1 1 1 1 1 f 1 1 b f . .
            . f 1 2 2 2 2 2 2 1 1 1 1 1 1 1 b f . .
            . . f 1 2 1 2 1 2 1 1 1 1 1 1 b b f . .
            . . f 1 1 1 1 1 1 1 1 1 b b b b f . . .
            . . . f 1 1 1 1 1 1 b b b f f f . . . .
            . . . . f f f b b b b f f . . . . . . .
            . . . . . . . f f f f . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . .
        `)
        if (bouh.vx > 0) {
            bouh.image.flipX()
            bouh.setImage(bouh.image)
        }
    }
})
forever(function () {
    if (bouseux == "vivant") {
        pause(3500)
        bdf = sprites.create(img`
            . . . . . . 4 4 4 4 . . . 4 4 . . . . . .
            . . . . 4 4 5 5 5 5 4 4 4 5 5 4 4 . 4 4 .
            . . . 4 5 5 5 4 4 5 5 5 5 5 5 5 5 4 5 5 4
            . . 4 5 5 4 4 4 4 4 4 5 5 5 4 4 5 5 5 4 .
            . 4 5 5 4 4 2 2 2 2 4 4 5 5 4 . 4 4 4 . .
            . 4 5 4 4 2 2 2 2 2 2 4 4 5 4 4 4 . . . .
            4 5 5 4 2 2 2 2 2 2 2 2 4 5 5 5 5 4 4 . .
            4 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 5 5 5 4 .
            4 5 4 4 2 2 2 2 2 2 2 2 4 4 5 5 5 5 4 . 4
            4 5 5 4 2 2 2 2 2 2 2 2 4 5 5 5 4 4 . 4 .
            . 4 5 4 4 2 2 2 2 2 2 4 4 5 4 4 . . . . .
            . 4 5 5 4 4 2 2 2 2 4 4 5 5 4 . 4 4 4 . .
            . . 4 5 5 4 4 4 4 4 4 5 5 5 4 4 5 5 5 4 .
            . . . 4 5 5 5 4 4 5 5 5 5 5 5 5 5 4 5 5 4
            . . . . 4 4 5 5 5 5 4 4 4 5 5 4 4 . 4 4 .
            . . . . . . 4 4 4 4 . . . 4 4 . . . . . .
        `, SpriteKind.bdf)
        bdf.setPosition(bowser.x, bowser.y)
        bdf.vx = -100
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, myTiles.tile38) && controller.up.isPressed()) {
        spawn = "lvl"
        startbowser()
    }
})
forever(function () {
    if (bouseux == "vivant") {
        bowser.vy = -150
        pause(6000)
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, myTiles.tile25) && controller.down.isPressed()) {
        startbonus1()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Bottom, myTiles.tile56)) {
        mario.vy = -300
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Right, myTiles.tile50) && controller.right.isPressed()) {
        startbonus2()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Left, myTiles.tile57) && controller.left.isPressed()) {
        spawn = "bonus1"
        startlvl()
    }
})
forever(function () {
    if (mario.tileKindAt(TileDirection.Top, myTiles.tile48) && controller.up.isPressed()) {
        spawn = "bonus2"
        startlvl()
    }
})
