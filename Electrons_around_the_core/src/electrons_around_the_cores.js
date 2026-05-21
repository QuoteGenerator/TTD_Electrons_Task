function coresAroundElectrons() {}
coresAroundElectrons.prototype.add = function(rolled_dices) {
    if(rolled_dices.length === 0){
        return "NO ROLLED DICES";
    } else if (rolled_dices.length < 4){
        return "NEEDS ATLEAST 4 ROLLED DICES";
    } 
    return "6";
};
