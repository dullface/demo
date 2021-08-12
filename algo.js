class Game {
    constructor() {
        let dimensionX = window.screen.height; //entire screen height
        let dimensionY = window.screen.width; //entire screen width

        let percentageFactor = 0.6; //this value is subject to change

        let availableSpace = dimensionX*percentageFactor;

        let startCoorY = (dimensionX*percentageFactor); // x coordinate of the first tile
        let startCoorX = 0; // y coordinate of the first tile

        console.log(dimensionX);//test
    }
    buildTiles(tileWidth) { //assume tiles are square, so one dimension is enough
        let tileDimension = this.tileWidth*this.tileWidth;//space a single tile fills
        let tileCount = this.availableSpace/tileDimension;//maximum number of tiles that can fit

        let CoorX = this.startCoorX;
        let CoorY = this.startCoorY;

        for(let i=0;i<tileCount;i++){
            let isMine = false;
            let theTile = new tile(CoorX,CoorY,isMine);

            CoorX += tileWidth; //increment CoorX by tile width
            if(CoorX == (this.dimensionX-this.tileWidth)){ 
                //assuming tile field expands as wide as the screen width
                CoorY += tileWidth;//increment CoorY by tileWidth
                //since we are assuming tiles to be squares
                //tileWidth = tileHeight
                CoorX = 0;
            }
            console.log('X: Y: '); //test
        }
        return 0;
    }
}
class tile {
    constructor(x,y,isMine) {
        this.x = x;
        this.y = y;
        this.isMine = false; // initially, false by default
    }
}

let newGame = new Game();
newGame.buildTiles(10);