var AXESTILECOUNT = 40; //40 is our default tile count for axes
class Game {
    constructor() {}
    euclidianGCD_Efficient(a,b){// find the max. possible size for a tile
        if(a > b){
            while(true){
                //swap a and b
                let a_holder = a;
                a = b;
                //replace b with a mod b
                b = a_holder % b;
                
                if(b == 0){//if b mod a = 0, then we have found our GCD
                    return a;
                }            
            }        
        }
        else if(b > a){
            while(true){
                //swap b and a
                let b_holder = b;
                b = a;
                //replace a with b mod a
                a = b_holder % a;
                if(a == 0){//if a mod b = 0, then we have found our GCD
                    return b;
                }
            }        
        }
        else {
            console.log('numbers are equal, common divisior is the number itself');
            return a;//or b. it doesn't matter
        }
    }
    calculateEmptySpaceLength(dimension){
        let dimensionXTemp = dimension;

        dimensionXTemp %= AXESTILECOUNT;

        //if mod AXESTILECOUNT of dimensionXTemp is odd, increment it by 1 then take its mod 2.
        if(dimensionXTemp % 2 == 1) {
            dimensionXTemp++;
            dimensionXTemp /= 2;
        }
        //if mod AXESTILECOUNT of dimensionXTemp is even, take its mod 2 directly.
        else dimensionXTemp /= 2;
        //this process gives us how much space should be left out from the sides.
    
        return dimensionXTemp;
    }
    buildTiles() {
        let dimensionY = window.screen.height; //entire screen height
        let dimensionX = window.screen.width; //entire screen width

        let percentageFactor = 0.6; //this value is subject to change

        //let tileWidth = this.euclidianGCD_Efficient(dimensionX,dimensionY*percentageFactor);//find the GCD of dimensions        
        let tileWidth = Math.floor(dimensionX/AXESTILECOUNT);

        let startCoorY = (dimensionX*percentageFactor); //y coordinate of the first tile
        let startCoorX = this.calculateEmptySpaceLength(dimensionX); //starting x coordinate after empty space is calculated

        console.log(startCoorX);//test

        let CoorX = startCoorX;
        let CoorY = startCoorY;

        let finalRowY = startCoorY+(tileWidth*AXESTILECOUNT);//this gives us the Y coordinate of the final row;

        //css block
        let textCss1 = '.tile { width: tileWidthpx; height: tileWidthpx; position: absolute; background-color: blue; }';
        let jsCss1 = document.createElement('style');
        jsCss1.type = 'text/css';
        jsCss1.innerText = textCss1;
        document.getElementsByTagName("head")[0].appendChild(jsCss1);
        //

        let isMine = false;
        let count=1;

        while(CoorY != finalRowY){
            if(CoorX <= dimensionX) {
                console.log('X: ' + CoorX + ' Y: ' + CoorY);//test

                let theTile = new tile(CoorX,CoorY,isMine);//tile object

                CoorX += tileWidth; //increment CoorX by tile width

                //
                /*var recomKategoriler = document.createElement("div");
                recomKategoriler.className = "yemek";
                recomKategoriler.classList.add("ki"+count);
                var textCss = '.ki'+count+' { left: ' + count*55 + 'px;}';
                var jsCss = document.createElement('style');
                jsCss.type = 'text/css';
                jsCss.innerText = textCss;
                document.getElementsByTagName("head")[0].appendChild(jsCss);
                document.querySelector('.bodyIngame').append(recomKategoriler);*/         
            }
            else{ 
                //assuming tile field expands as wide as the screen width
                CoorY += tileWidth;//increment CoorY by tileWidth
                //since we are assuming tiles to be squares
                //tileWidth = tileHeight
                CoorX = startCoorX;
            }            
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
newGame.buildTiles();

