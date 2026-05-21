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
    } else if(rolled_dices.length == 6){
        let multiplikator = 0;
        let divisor = 0;
        let sum = 0;

        for(let j = 0; j < rolled_dices.length; j++){
            if(rolled_dices[j] == rolled_dices[j+1]){
                divisor += 1;
                rolled_dices[j] = "d";
                rolled_dices[j+1] = "d";
            }
        }
        for(let j = 0; j < rolled_dices.length; j++){
            for(let k = 0; k < rolled_dices.length; k++){
                if(j != k && rolled_dices[j] == rolled_dices[k] && rolled_dices[j] != "d"){
                    multiplikator += 1;
                    rolled_dices[j] = "d";
                    rolled_dices[k] = "d";
                }
            }
        }

        for(let i = 0; i < rolled_dices.length; i++) {
            if(isNaN(rolled_dices[i])){continue;}

            sum += rolled_dices[i];
        }

        if(multiplikator == 0){
            multiplikator = 1;
        }
        if(divisor == 0){
            divisor = 1;
        }
        
        return (sum * multiplikator) / divisor;
    }
}
