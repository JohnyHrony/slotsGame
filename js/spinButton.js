/**
 * The class that is responsible for the spin button
 * @constructor
 */
function SpinButton(){
    /**
     * Games Button shift factor(x)
     * @type {number}
     */
    this._widthOffset = 0.85;
    /**
     * Games Button shift factor(y)
     * @type {number}
     */
    this._heightOffset = 0.39;
    /**
     * Factor pictures img zoom
     * @type {number}
     */
    this._spinButtonResizeValue = 1.2;
}
/**
 * Draw active button
 * @param imgObj{object}
 * @param gameField{object} Context
 */
SpinButton.prototype.drawButton = function(imgObj, gameField){
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

        ctx.drawImage(pic, 0, 0, pic.width, pic.height, gameFieldWidth*this._widthOffset, gameFieldHeight*this._heightOffset, pic.width*this._spinButtonResizeValue, pic.height*this._spinButtonResizeValue);
};





