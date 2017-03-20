/**
 * The class that is responsible for all games money operations
 * @param startSum{int}
 * @constructor
 */
function Money(startSum, monitorObj){
    this.startSum = startSum;
    this._monitorObj = monitorObj;
}
/**
 * Set start Sum
 */
Money.prototype.setStartMoney = function(){
    this._monitorObj.innerHTML = this.startSum;
};
/**
 * Charge for twist
 * @param twistCost{int} price for 1 twist
 */
Money.prototype.twistDrumCost = function(twistCost){
    var currentSum = this.startSum;
    this.startSum  -= twistCost;
    if(currentSum >= twistCost) {
        this._monitorObj.innerHTML = this.startSum;
        return true;
    }else{
        alert('Game over');
        return false;
    }
};
/**
 * summarize current sum and winner sum
 * @param sum{int}
 */
Money.prototype.moneyWin = function(sum){
    this.startSum += sum;
    this._monitorObj.innerHTML = this.startSum;
};