/**
 * Class which save images and configuration from json file
 * @constructor
 */
function DataStore(){
    /**
     * configuration array
     * @type {Array}
     * @private
     */
    this._configuration = [];
    /**
     * Images array
     * @type {Array}
     * @private
     */
    this._imagesArray = [];
    /**
     * Rewards array
     * @type {Array}
     * @private
     */
    this._rewardsArray = [];
}

/**
 * Configurations save method
 * @param array
 */
DataStore.prototype.saveConfiguration = function(array){
    for(var i = 0; i < array.length; i++){
        this._configuration.push(array[i]);
    }
};
/**
 * Images save method
 * @param imgArray
 * @returns {Array}
 */
DataStore.prototype.saveLoadedImages = function(imgArray){
    for(var i = 0; i < imgArray.length; i++){
        this._imagesArray.push(
            imgArray[i]
        );
    }
    //console.log(this._imagesArray);
};

/**
 * Configuration return method
 * @returns {Array}
 */
DataStore.prototype.getConfiguration = function(){
    return this._configuration;
};

/**
 * Method which return single image by id
 * @param id
 * @returns {*}
 */
DataStore.prototype.getImageById = function(id){
    for(var i = 0; i < this._imagesArray.length; i++) {
            if (id == this._imagesArray[i].id) {
                return this._imagesArray[i];
            }
    }
    return false;
};

DataStore.prototype.saveRewards = function(array){
    for(var i = 0; i < array.length; i++){
        this._rewardsArray.push(array[i]);
    }
};

DataStore.prototype.getPrice = function (id) {
    for(var i = 0; i < this._rewardsArray.length; i++){
        if(this._rewardsArray[i].id == id){
            return this._rewardsArray[i].price;
        }
    }
};