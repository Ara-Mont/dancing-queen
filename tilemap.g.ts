// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010202020202020202020202010202010202010101010202010202020102020102020102020102020102020201020201020201010201020201020101010102010202020102010101010101010202020101010101020102020202020102010101020202020201010201010201020202010201010101010102020102010101020102020202020201010101020101020201010101010102020202010202010101010202020201020102020102020202020102010102010201010101010201010201020101020102010101020102010102010201010201020202010201020201010101010102010101020202010202020202020202020202010202020202`, img`
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 . 2 2 . . . . 2 2 . 2 2 2 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 2 2 
. 2 2 . 2 2 . . 2 . 2 2 . 2 . . 
. . 2 . 2 2 2 . 2 . . . . . . . 
2 2 2 . . . . . 2 . 2 2 2 2 2 . 
2 . . . 2 2 2 2 2 . . 2 . . 2 . 
2 2 2 . 2 . . . . . . 2 2 . 2 . 
. . 2 . 2 2 2 2 2 2 . . . . 2 . 
. 2 2 . . . . . . 2 2 2 2 . 2 2 
. . . . 2 2 2 2 . 2 . 2 2 . 2 2 
2 2 2 . 2 . . 2 . 2 . . . . . 2 
. . 2 . 2 . . 2 . 2 . . . 2 . 2 
. . 2 . 2 . . 2 . 2 2 2 . 2 . 2 
2 . . . . . . 2 . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.builtin.coral0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
