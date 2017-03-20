/**
 * Class which unloads resource in to the games
 */
function DataLoader(){}

/**
 * Method which load games resource from Json file
 * @param path {string} path from Json file
 * @param callback [function} callback function which return paths and names games resources
 */
DataLoader.prototype.loadJSONFile = function(path, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (typeof callback == "function") {
                /**
                 * apply() sets the meaning of "this" in the callback
                 */
                callback.apply(xhttp, [xhttp.responseText]);
            }
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};