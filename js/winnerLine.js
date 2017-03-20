/**
 * The class that is responsible for the winner line 
 * @constructor
 */
function WinnerLine(){
    this._startOffset = 0.2;
    this._lineStep = 0.3;
}
/**
 * Draw winner line
 * @param imgObj{object}
 * @param gameField{object} Context
 * @param linePosition{int} winner slots position
 * @param offsetLeft{int}
 */
WinnerLine.prototype.drawLine = function(imgObj, gameField, linePosition, offsetLeft){
    /**
     * Context
     */
    var ctx = gameField.getContext('2d');
    /**
     * Create img object
     */
    var pic = imgObj.img;
    /**
     *Games field width
     */
    var gameFieldWidth = gameField.width;
    /**
     *Games field height
     */
    var gameFieldHeight = gameField.height;
    var offsetTop = this._startOffset + this._lineStep*linePosition;

    ctx.drawImage(pic, 0, 0, pic.width, pic.height,gameFieldWidth*offsetLeft, gameFieldHeight*offsetTop, pic.width, pic.height);
};