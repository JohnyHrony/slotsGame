/**
 * The class that is responsible for the single games drum
 * @constructor
 */
function Drum(dataStore){
    /**
     * Container for icons
     * @type {Array}
     * @private
     */
    this._drumIconsArray = [];
    /**
     * Slots count in the drum
     * @type {number}
     * @private
     */
    this._countSlots = 0;
    /**
     * Current first active slots position
     * @type {number}
     * @private
     */
    this._startPosition = 0;
    /**
     * A pointer to the class DataStore
     */
    this._dataStore = dataStore;
    /**
     * Active elements count
     * @type {number}
     * @private
     */
    this._activeElementsInDrum = 3;
    /**
     * offset top
     * @type {number}
     * @private
     */
    this._drumsOffsetTop = 0.07;
    this._offsetTopCoeficient = 0.3;
    /**
     * Active ids array
     * @type {Array}
     * @private
     */
    this._idForCheckArray = [];
}
/**
 * Set drums icon
 * @param drumIconsArray
 */
Drum.prototype.setDrumIcons = function(drumIconsArray){
    this._drumIconsArray = drumIconsArray;
    this._countSlots = drumIconsArray.length;
};
/**
 * Display single drum
 * @param gameField(object) Context
 * @param drumOffsetLeft{int} left offset
 * @param maxStartPosition{int} max drums scroll
 */
Drum.prototype.displayDrum = function(gameField, drumOffsetLeft, maxStartPosition){
    var drumIconId;
    var drumIconImg;
    var maxStartPos = maxStartPosition || 0;
    var startPoss = this._startPosition + maxStartPos;
    var offsetTop = this._drumsOffsetTop;
    this._idForCheckArray.length = 0;

    if(startPoss > (this._countSlots - this._activeElementsInDrum)){
        startPoss -= this._countSlots - this._activeElementsInDrum;
        this._startPosition -= this._countSlots - this._activeElementsInDrum;
    }
    
    for(var i = 0; i < this._drumIconsArray.length; i++) {
        if(i >= startPoss && i < (startPoss + this._activeElementsInDrum)) {
            drumIconId = this._drumIconsArray[i].id;
            drumIconImg = this._dataStore.getImageById(drumIconId);

            if (drumIconImg == false) {
                console.warn(drumIconId + ' image is not found!');
            } else {
                this._drumIconsArray[i].drawIcon(drumIconImg, gameField, drumOffsetLeft, offsetTop);
            }

            offsetTop += this._offsetTopCoeficient;
            this._idForCheckArray.push(drumIconId);
        }
    }

    this._startPosition += maxStartPos;
    //console.log(this._startPosition);

};
/**
 * Return active ids
 * @returns {Array}
 */
Drum.prototype.activeIds = function(){
    return this._idForCheckArray;
};