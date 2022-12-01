var input = ``;

//parses input into array PARSED
var PARSED = input.split(/\n/);

//creates empty array, makes a "slot" for each elf to count their calories in
var elfcal = [];
elfcal.push(0);

//elfnum keeps track of what elf the program is counting calories for.
//Adds calories to the elf until a blank space is found in the array, then it increments elfnum and keeps going
var elfnum = 0;
for(var i = 0; i < PARSED.length; i++){
    if(PARSED[i] != ''){
        elfcal[elfnum] += parseInt(PARSED[i]);
    } else {
        elfnum++;
        elfcal.push(0);
    }
}

//sorts, reverses, therefor index 0 is the highest number
elfcal.sort();
elfcal.reverse();
console.log(elfcal[0]);



//---------- pt 2 ---------- 
var result = elfcal[0] + elfcal[1] + elfcal[2];
console.log(result);