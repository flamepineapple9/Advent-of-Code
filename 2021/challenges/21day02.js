var X = 0;
var DEPTH = 0;
var AIM = 0;

//silly 1000 line multi-line string
const INPUT = ``;

//INPUT, now an array
var parsed = INPUT.split(/\n/);

/*scuffed code that just checks the first character of each element to see if its forward, down, or up; then 
goes to the point in the element where the value is, and adds it to the global var
*/
for(var i = 0; i < parsed.length; i++){
    if(parsed[i].charAt(0) == "f"){
        X += parseInt(parsed[i][8]);
        DEPTH += parseInt(parsed[i][8])*AIM;
    }

    if(parsed[i].charAt(0) == "d"){
        AIM += parseInt(parsed[i][5]);
    }

    if(parsed[i].charAt(0) == "u"){
        AIM -= parseInt(parsed[i][3]);
    }
}

console.log(DEPTH*X);