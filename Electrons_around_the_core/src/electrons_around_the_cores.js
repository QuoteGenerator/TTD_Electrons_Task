function coresAroundElectrons() {}
coresAroundElectrons.prototype.add = function(rolled_dices) {
    if(rolled_dices.length === 0){
        return "NO ROLLED DICES";
    } else if (rolled_dices.length < 4){
        return "NEEDS ATLEAST 4 ROLLED DICES";
    } else if (rolled_dices.length < 6){
        let sum = 0;
        for (let i = 0; i < rolled_dices.length; ++i){
            if(rolled_dices[i] % 2 == 0){
                sum += rolled_dices[i];
            }
        }
        return sum;
    }
}
