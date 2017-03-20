var gameField = document.getElementById("gameField");
var monitor = document.getElementById("monitor");

var dataLoader = new DataLoader();
var dataStore = new DataStore();
var imageLoader = new ImageLoader();
var spinButton = new SpinButton();
var combinedDrum = new CombinedDrum();
var winnerLine = new WinnerLine();
var winAudio = new Audio("audio/win.mp3");
var money = new Money(500, monitor);
//var stepAudio = new Audio("audio/step.mp3");

/**
 * Json info container
 */
var dataJson;

dataLoader.loadJSONFile('gameResources/slotNamesAndPath.json', function(json){
    dataJson = JSON.parse(json);
    /**
     * Drums configuration
     */
    var config = dataStore.saveConfiguration(dataJson.Ids);
    /**
     * Rewards
     */
    var rewards = dataStore.saveRewards(dataJson.Rewards);
    /**
     * Games images
     */
    var imageConfigurationsArray = dataJson.Images;
    imageLoader.loadImages(imageConfigurationsArray, function(images){
        /**
         * Save images in DataStore
         */
        dataStore.saveLoadedImages(images);

        var config = dataStore.getConfiguration();
        /**
         * Temp array
         */
        var drumIcon;
        /**
         * All drums icon container
         * @type {Array}
         */
        var drumIconsArray = [];
        /**
         * Temp arrays
         */
        var drumConfiguration;
        var parsedDrumConfiguration;
        var countDrums = config.length;
        var singleDrum;
        var drumsArray = [];

        for(var j = 0; j < config.length; j++){
            drumConfiguration = config[j];
            parsedDrumConfiguration = drumConfiguration.position.split(', ');
            drumIconsArray[j] = [];
            for(var i = 0; i < parsedDrumConfiguration.length; i++){
                    drumIcon = new DrumIcon(parsedDrumConfiguration[i]);
                    drumIconsArray[j][i] = drumIcon;
                }
        }

        for(var x = 0 ; x < countDrums; x++){
            singleDrum = new Drum(dataStore);
            drumsArray.push(singleDrum);
        }

        combinedDrum.setAllDrums(drumsArray);
        combinedDrum.setAllDrumsIcon(drumIconsArray);
        combinedDrum.displayAllDrums(gameField);

        spinButton.drawButton(dataStore.getImageById('activeButton'), gameField);
        money.setStartMoney();
    });
});

/**
 * Active buttons event method
 */
gameField.addEventListener("click", function(event){
    var clickX = event.clientX - this.offsetLeft;
    var clickY = event.clientY - this.offsetTop;
    var minX = 815;
    var maxX = 932;
    var minY = 210;
    var maxY = 323;
    var winsIds = [];
    var price = null;

    if(minX < clickX && clickX < maxX && minY < clickY && clickY < maxY){
        combinedDrum.clear(gameField);
        winAudio.currentTime = 0;
        winAudio.pause();
        var twist = money.twistDrumCost(25);
            combinedDrum.displayAllDrums(gameField, 10);
            var check = combinedDrum.checkDrumTurnover();
            spinButton.drawButton(dataStore.getImageById('activeButton'), gameField);
            if(check.length > 0){
                for(var i = 0; i < check.length; i++){
                    winnerLine.drawLine(dataStore.getImageById('WinnerLine'), gameField, check[i], 0.05);
                }

                winAudio.play();
                winsIds = combinedDrum.getWinIds();

                for(var j = 0; j < winsIds.length; j++){
                    price = parseInt(dataStore.getPrice(winsIds[j]));
                    money.moneyWin(price);
                }
            }
        if(!twist){
            spinButton.drawButton(dataStore.getImageById('NoActiveButton'), gameField);
            window.location.reload();
        }
    }
},false);