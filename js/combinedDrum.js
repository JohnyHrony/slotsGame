/**
 * The class that is responsible for the combined drum
 * @constructor
 */
function CombinedDrum(){
    /**
     * all drums
     * @type {Array}
     * @private
     */
    this._drumsArray = [];
    /**
     * Combined Drums left offset
     * @type {number}
     * @private
     */
    this._drumOffsetLeft = 0.07;
    /**
     * Combined Drums left offset increase coefficients
     * @type {number}
     * @private
     */
    this._offsetCoeficient =  0.255;
    /**
     * Array for active ids
     * @type {Array}
     * @private
     */
    this._checkArray = [];
    /**
     * winIds container
     * @type {Array}
     * @private
     */
    this._winIds = [];
}
/**
 * Set all drums into array
 * @param drumsArray
 */
CombinedDrum.prototype.setAllDrums = function(drumsArray){
    this._drumsArray  = drumsArray;
};
/**
 * Set all drums icon
 * @param drumIconsArray
 */
CombinedDrum.prototype.setAllDrumsIcon = function(drumIconsArray){
    for(var i = 0; i < this._drumsArray.length; i++){
        this._drumsArray[i].setDrumIcons(drumIconsArray[i]);
    }
};
/**
 * Display all drums
 * @param gameField{object} Context
 * @param position{int} max drum scroll
 */
CombinedDrum.prototype.displayAllDrums = function(gameField, position){
    var offsetLeft = this._drumOffsetLeft;
    var maxRange = position;
    var minRange = 3;
    var random;
    this._checkArray.length = 0;

    for(var i = 0; i < this._drumsArray.length; i++){
        random = Math.floor(Math.random() * (maxRange - minRange + 1) + 1);
        this._drumsArray[i].displayDrum(gameField, offsetLeft, random);
        offsetLeft += this._offsetCoeficient;

        this._checkArray.push(this._drumsArray[i].activeIds());
    }
};
/**
 * Clear games field
 * @param gameField{object} Context
 */
CombinedDrum.prototype.clear = function(gameField){
    var ctx = gameField.getContext('2d');
    ctx.clearRect(0, 0, gameField.width, gameField.height);
};
/**
 *Check active ids and return winning 
 * @returns {Array} winning ids
 */
CombinedDrum.prototype.checkDrumTurnover = function(){
    var tempArray = this._checkArray;
    var winPosition = [];
    var tempWin = [];
    this._winIds.length = 0;

    for(var i = 0; i < tempArray.length; i++){
        tempWin[i] = [];
        for(var j = 0; j < tempArray[i].length; j++){
            tempWin[i][j] = tempArray[j][i]
        }
    }

    for(var x = 0; x < tempWin.length; x++){
        var flag = 0;

        for(var y = 0; y < tempWin[x].length-1; y++){
            if(tempWin[x][y] == tempWin[x][y+1]){
                flag++;
            }
        }

        if(flag == 2){
            winPosition.push(x);
            this._winIds.push(tempWin[x][0]);
        }
        flag = 0;
    }
    return winPosition;
};

CombinedDrum.prototype.getWinIds = function(){
    return this._winIds;
};
