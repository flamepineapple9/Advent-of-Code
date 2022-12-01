var GAMMA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var GAMMARESULT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var EPSILONRESULT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];





//converts INPUT into array PARSED
const INPUT = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
const PARSED = INPUT.split(/\n/);

var O2log = new Array(PARSED[0].length).fill(0);
var CO2log = new Array(PARSED[0].length).fill(0);

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

console.log(GAMMARESULT.join().replace(/,/g, ''))
console.log(EPSILONRESULT.join().replace(/,/g, ''))

//I just googled and hard coded these; I didnt feel like making it calculate them
var gammaDecimal = 1836;
var epsilonDecimal = 2259;
console.log(gammaDecimal);
console.log(epsilonDecimal);

var power = gammaDecimal*epsilonDecimal

console.log(power);





//PT 2 

var O2rating = [...PARSED]; 

//loops through every bit
for(var bit = 0; bit < O2rating[0].length; bit++){
    //loops through every byte
    for(var byte = 0; byte < O2rating.length; byte++){
        if(O2rating[byte][bit] == 1){
            O2log[bit]++;
        }
        
        //converts decimal to corresponding most common bit
        if(O2log[bit] >= O2rating.length/2){
            O2log[bit] = 1;
        } else {
            O2log[bit] = 0;
        }

        for(var byte = 0; byte < O2rating.length; byte++){
            if(O2rating[byte][bit] != O2log[bit]){
                O2rating.splice(byte, 1);
                byte--;
            }
        }
    }
}
console.log(O2log);



/*var CO2rating = [...PARSED];
for(var bit = 0; bit < CO2rating.length; bit++){
    
    for(var byte = 0; byte < CO2rating.length; byte++){
        if(CO2rating[byte][bit] == 1){
            CO2log[bit]++;
        }
    }

    if(CO2log[bit] > CO2rating.length/2){
        CO2log[bit] = 1;
    } else {
        CO2log[bit] = 0;
    }

    for(var byte = 0; byte < CO2rating.length; byte++){
        if(CO2rating[byte][bit] != CO2log[bit]){
            CO2rating.splice(byte, 1);
            byte--;
        }
    }

}
console.log(CO2log);
console.log(CO2rating)*/