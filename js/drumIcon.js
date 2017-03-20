/**
 * The class that is responsible for the single slot of the games
 * @constructor
 */
function DrumIcon(id){
    this.id = id;
    this._offsetLeft = 0.15;
    this._offsetTop = 0.1;

}
/**
 * Method which draw single icon
 * @param imgObj{object}
 * @param gameField{object} Context
 * @param offsetLeft{int}
 * @param offsetTop{int}
 */
DrumIcon.prototype.drawIcon = function(imgObj, gameField, offsetLeft, offsetTop){
    var offLeft = offsetLeft || this._offsetLeft;
    var offTop = offsetTop || this._offsetTop;
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
    ctx.drawImage(pic, 0, 0, pic.width, pic.height, gameFieldWidth*offLeft, gameFieldHeight*offTop, pic.width, pic.height);
};



