function coresAroundElectrons() {}
coresAroundElectrons.prototype.add = function(rolled_dices) {
    if(rolled_dices.length === 0){
        return "NO ROLLED DICES";
    } else if (rolled_dices.length < 4){
        return "NEEDS ATLEAST 4 ROLLED DICES";
    } else {
        let sum = 0;
        for(let i = 0; i < rolled_dices.length; i++){
            sum += rolled_dices[i] % 2 == 0 ? rolled_dices[i] : 0;
        }
        return sum;
    }
};
