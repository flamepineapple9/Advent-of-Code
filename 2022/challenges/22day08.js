
var input = 
`30373
25512
65332
33549
35390`;

input = input.split(/\n/);
for(var i in input){
    input[i] = input[i].split("");
    for(var k in input[i]){
        input[i][k] = parseInt(input[i][k], 10);
    }
    //console.log(input[i]);
}

var perimeter = 2*(input.length) + 2*(input[0].length - 2);
var sum = perimeter;
var columnTracker = 0;
var clear = 0;

//goes through every tree, except the perimeter trees
for(var row = 1; row < input.length - 1; row++){
    for(var tree = 1; tree < input[0].length - 1; tree++){
        clear = 0;
        var above = [];
        var below = [];
        //pushes the values above and below the tree to their respective arrays
        for(var i = row + 1; i < input.length; i++){
            below.push(input[i][tree]);
        }
        for(var i = 0; i < row; i++){
            above.push(input[i][tree]);
        }

        //if the highest tree from its left is shorter than it you can see it ||not working, slice logic incorrect||
        if(Math.max(input[row].slice(0,input[row][tree])) < input[row][tree]){
            clear++;
        }
        //if the highest tree from its right is shorter than it you can see it ||not working, slice logic incorrect||
        if(Math.max(input[row].slice(input[row][tree], input[row].length)) < input[row][tree]){
            clear++;
        }
        //if the highest tree from above it is shorter than it you can see it
        if(Math.max(above) < input[row][tree]){
            clear++;
        }
        //if the highest tree from below it is shorter than it you can see it 
        if(Math.max(below) < input[row][tree]){
            clear++
        }
        
        //if tree is clear from at least one side, add one to sum
        if(clear != 0){
            sum++;
            console.log("tree " + row + ", " + tree + " is visible");
        }
    }
}
console.log(sum);