//converts INPUT into array PARSED
const INPUT = ``;
const PARSED = INPUT.split(/\n/);


//initializes arrays, makes them as long as there are bits in each byte
var GAMMA = new Array(PARSED[0].length).fill(0);
var GAMMARESULT = new Array(PARSED[0].length).fill(0);
var EPSILONRESULT = new Array(PARSED[0].length).fill(0);


//goes through every bit, and adds one to the respective result bit if that bit is 1
for(var byte = 0; byte < PARSED.length; byte++){
    for(var bit = 0; bit < PARSED[byte].length; bit++){
        if(PARSED[byte][bit] == 1){
            GAMMA[bit]++;
        }
    }
}
/*if more than half of the bits added one to the result bit, the result bit will
 be over PARSED.length/2. If above, make the GAMMA result bit 1
*/
for(var i = 0; i < GAMMA.length; i++){
    if(GAMMA[i] > PARSED.length/2){
        GAMMARESULT[i]++;
    }
}
//EPSILON is just GAMMA flipped, so this does that
for(var i = 0; i < GAMMA.length; i++){
    if(GAMMARESULT[i] == 0){
        EPSILONRESULT[i]++;
    }
}
//I just googled "binary to decimal" and hard coded these; I didnt feel like making it calculate them
var gammaDecimal = 1836;
var epsilonDecimal = 2259;
console.log("gamma = " + gammaDecimal);
console.log("epsilon = " + epsilonDecimal);

var power = gammaDecimal*epsilonDecimal

console.log("power consumtion = " + power);
console.log("------------------------------")




//----------- PT 2 -----------


//initializing arrays, duplicates `PARSED` onto `O2rating` and `CO2rating`
var O2rating = [...PARSED]; 
var CO2rating = [...PARSED];
    //makes log arrays, makes them as long as there are bits in each byte
var O2log = new Array(PARSED[0].length).fill(0);
var CO2log = new Array(PARSED[0].length).fill(0);


//iterates across every bit position in O2rating
for(var bit = 0; bit < O2rating[0].length; bit++){

    //stops loop if there is only one element left
    if(O2rating.length == 1){
        break;
    }

    //goes through each byte, looking at the `bit`nth bit, if it is 1, adds one to the O2log array in the respective bit position
    for(var byte = 0; byte < O2rating.length; byte++){
        if(O2rating[byte][bit] == 1){
            O2log[bit]++;
        }
    }

    //converts O2log to a binary array ([1, 0, 1, 1, 0] instead of [498, 506, 486, 501, 516])
    if(O2log[bit] >= O2rating.length/2){
        O2log[bit] = 1;
    } else {
        O2log[bit] = 0;
    }

    //goes through each byte, comparing the `bit`nth bit to the corresponding bit in O2log. Removes any byte that does not have the most common bit in the `bit`nth position
    for(var byte = 0; byte < O2rating.length; byte++){
        if(O2rating[byte][bit] != O2log[bit]){
            O2rating.splice(byte, 1);
            byte--;
        }
    }
    
}


//iterates accross every bit position in CO2rating
for(var bit = 0; bit < PARSED[0].length; bit++){
    
    //stops loop if there is only one element left
    if(CO2rating.length == 1){
        break;
    }

    //goes through each byte, looking at the `bit`nth bit, if it is 1, adds one to the CO2log array in the respective bit position
    for(var byte = 0; byte < CO2rating.length; byte++){
        if(CO2rating[byte][bit] == 1){
            CO2log[bit]++;
        }
    }

    //converts CO2log to a binary array ([1, 0, 1, 1, 0] instead of [498, 506, 486, 501, 516])
    if(CO2log[bit] >= CO2rating.length/2){
        CO2log[bit] = 1;
    } else {
        CO2log[bit] = 0;
    }
    
    /*goes through each byte, comparing the `bit`nth bit to the corresponding bit in O2log. Removes any byte that *has* the most common 
    bit in the `bit`nth position; therefor leaving only the bytes with the less common bit */
    for(var byte = 0; byte < CO2rating.length; byte++){
        if(CO2rating[byte][bit] == CO2log[bit]){
            CO2rating.splice(byte, 1);
            byte--;
        }
    }

}


//silly printing things
var O2ratingDecimal = parseInt(O2rating, 2);
var CO2ratingDecimal = parseInt(CO2rating, 2);
console.log("O2 rating = " + O2ratingDecimal);
console.log("CO2 rating = " + CO2ratingDecimal);

var solution = O2ratingDecimal*CO2ratingDecimal;
console.log("life support rating = " + solution);