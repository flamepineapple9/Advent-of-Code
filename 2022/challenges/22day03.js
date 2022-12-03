var input = ``;
var PARSED = input.split(/\n/);


//char and num library is used to convert character to it's priority value
let charLibrary = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","i","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numLibrary = [];
//just makes the num library, i couldnt figure out how to have this luxury for charLibrary
for(var i = 1; i < 53; i++){
    numLibrary.push(i);
}


var sum = 0;

for(var i = 0; i < PARSED.length; i++){ 
    var arrayOfCharacters = PARSED[i].split("");
    var firstHalf = arrayOfCharacters.slice(0, arrayOfCharacters.length/2);
    var secondHalf = arrayOfCharacters.slice(-arrayOfCharacters.length/2, arrayOfCharacters.length);
    
    firstHalf.sort();secondHalf.sort();
    
    var duplicate;
    while(true){
        if(firstHalf[0]==secondHalf[0]){
            duplicate = firstHalf[0];
            break;
        }
        if(firstHalf[0] < secondHalf[0]){
            firstHalf.shift();
        } else {
            secondHalf.shift();
        }
    }
    
    for(var char = 0; char < charLibrary.length; char++){
        if(duplicate == charLibrary[char]){
            sum += numLibrary[char];
        }
    }
}

console.log(sum);


//---------- pt2 ----------

var sumpt2 = 0;
var triplicate = 0;

for(var i = 2; i < PARSED.length; i += 3){ 
    var firstElf = PARSED[i - 2].split("");
    var secondElf = PARSED[i - 1].split(""); 
    var thirdElf = PARSED[i].split(""); 

    firstElf.sort(); secondElf.sort(); thirdElf.sort();

    //testArr is used to find the "smallest" first character. If all three first charcters are equal, hooray! if not, remove the smallest first character.
    while(true){
        var testArr = [firstElf[0], secondElf[0], thirdElf[0]];
        testArr.sort();

        if(firstElf[0]==secondElf[0] && secondElf[0]==thirdElf[0]){
            triplicate = firstElf[0];
            break;
        }
        if(firstElf[0] == testArr[0]){
            firstElf.shift();
        } else if(secondElf[0] == testArr[0]){
            secondElf.shift();
        } else {
            thirdElf.shift();
        }
    }
    
    //converts character to it's priority value
    for(var char = 0; char < charLibrary.length; char++){
        if(triplicate == charLibrary[char]){
            sumpt2 += numLibrary[char];
        }
    }
}

console.log(sumpt2);