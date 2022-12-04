var input = ``;

var PARSED = input.split(/\n/);

var total = 0;

for(var elfPair = 0; elfPair < PARSED.length; elfPair++){
    var firstElf = PARSED[elfPair].split(",")[0];
    var secondElf = PARSED[elfPair].split(",")[1];
    var firstElfFirstNum = parseInt(firstElf.split("-")[0], 10);
    var firstElfSecondNum = parseInt(firstElf.split("-")[1], 10);
    var secondElfFirstNum = parseInt(secondElf.split("-")[0], 10);
    var secondElfSecondNum = parseInt(secondElf.split("-")[1], 10);


    if(firstElfFirstNum >= secondElfFirstNum && firstElfSecondNum <= secondElfSecondNum){
        total++;
    } else if(secondElfFirstNum >= firstElfFirstNum && secondElfSecondNum <= firstElfSecondNum){
        total++;
    }

}

console.log(total);



//---------- pt2 ----------

var total2 = 0;

for(var elfPair = 0; elfPair < PARSED.length; elfPair++){
    var firstElf = PARSED[elfPair].split(",")[0];
    var secondElf = PARSED[elfPair].split(",")[1];
    var firstElfFirstNum = parseInt(firstElf.split("-")[0], 10);
    var firstElfSecondNum = parseInt(firstElf.split("-")[1], 10);
    var secondElfFirstNum = parseInt(secondElf.split("-")[0], 10);
    var secondElfSecondNum = parseInt(secondElf.split("-")[1], 10);


    if(secondElfSecondNum >= firstElfFirstNum && secondElfSecondNum <= firstElfSecondNum||secondElfFirstNum <= firstElfSecondNum && secondElfFirstNum >= firstElfFirstNum||firstElfFirstNum >= secondElfFirstNum && firstElfSecondNum <= secondElfSecondNum){
        total2++;
    }
}

console.log(total2);
