/**
 * Image load class
 * @constructor
 */
function ImageLoader() {
        this._images = [];
        this._imageCounter = 0;
        this._callback = null;
    }

    // imagesInfoArray[i].id - id of image {string}
    // imagesInfoArray[i].src - source path of image{string}
ImageLoader.prototype.loadImages = function(imagesInfoArray, callback) {
    this._imageCounter = imagesInfoArray.length;
    this._callback = callback;

    for (var i = 0; i < imagesInfoArray.length; i++) {
        this._loadImage(imagesInfoArray[i]);
    }
};

// imageInfo.id - id of image {string}
// imageInfo.src - source path of image{string}
ImageLoader.prototype._loadImage = function(imageInfo) {
    var img = new Image();

    this._images.push({
        id: imageInfo.id,
        img: img
    });

    img.src = imageInfo.src;

    var self = this;
    img.onload = function () {
      self._decreaseCounter();
    };
    
};

ImageLoader.prototype._decreaseCounter = function() {
    this._imageCounter--;

    if (this._imageCounter == 0) {
        //images are loaded
        this._callback.apply(this, [this._images]);
        this._reset();
    }
};
/**
 * Reset
 * @private
 */
ImageLoader.prototype._reset = function() {
    this._loadImages = [];
    this._imageCounter = 0;
};