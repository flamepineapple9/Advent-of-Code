
var input = `30373
25512
65332
33549
35390`; 
input = input.split(/\n/);

var perimeter = 2*(input.length) + 2*(input[0].length - 2);
var sum = perimeter;
var rowTracker = 0;
var columnTracker = 0;
var clear = 0;

//goes through every tree, except the perimeter trees
for(var row = 1; row < input.length -1; row++){
    for(var tree = 1; tree < input[0].length - 1; tree++){
        console.log(sum);
        rowTracker = tree;
        while(rowTracker != 0){
            rowTracker--;
            if(parseInt(input[row][tree], 10) <= parseInt(input[row][rowTracker], 10)){
                break;
            }
            if(rowTracker == 0){
                clear++;
            }
        }

        rowTracker = tree;
        while(rowTracker != input[row].length){
            rowTracker++;
            if(parseInt(input[row][tree], 10) <= parseInt(input[row][rowTracker], 10)){
                break;
            }
            if(rowTracker == input[row].length){
                clear++;
            }
        }



        columnTracker = row;
        while(columnTracker != 0){
            columnTracker--;
            if(parseInt(input[row][tree], 10) <= parseInt(input[columnTracker][tree], 10)){
                break;
            }
            if(columnTracker == 0){
                clear++;
            }
        }

        columnTracker = row;
        while(columnTracker != input.length){
            columnTracker++;
            if(parseInt(input[row][tree], 10) <= parseInt(input[columnTracker][tree], 10)){
                break;
            }
            if(columnTracker == input.length){
                clear++;
            }
        }

        if(clear != 0){
            sum++;
        }
    }
}
console.log(sum);

