var input = ``;

var PARSED = input.split(/\n/);

var score = 0;



for(var i = 0; i < PARSED.length; i++){
    //elf plays rock
    if(PARSED[i][0]=="A"){
        
        //you play rock
        if(PARSED[i][2]=="X"){
            score += 4;
        }
        
        //you play paper
        if(PARSED[i][2]=="Y"){
            score += 8;
        }
        
        //you play scissors
        if(PARSED[i][2]=="Z"){
            score += 3;
        }
    }
    
    //elf plays paper
    if(PARSED[i][0]=="B"){
        
        //you play rock
        if(PARSED[i][2]=="X"){
            score += 1;
        }
        
        //you play paper
        if(PARSED[i][2]=="Y"){
            score += 5;
        }
        
        //you play scissors
        if(PARSED[i][2]=="Z"){
            score += 9;
        }
    }
    
    //elf plays scissors
    if(PARSED[i][0]=="C"){
        
        //you play rock
        if(PARSED[i][2]=="X"){
            score += 7;
        }
        
        //you play paper
        if(PARSED[i][2]=="Y"){
            score += 2;
        }
        
        //you play scissors
        if(PARSED[i][2]=="Z"){
            score += 6;
        }
    }
}

console.log("part 1: "+score);


//---------- pt2 ----------
var score2 = 0;

for(var i = 0; i < PARSED.length; i++){
    
    //elf plays rock
    if(PARSED[i][0]=="A"){
        
        //lose(0), play scissors(3)
        if(PARSED[i][2]=="X"){
            score2 += 3;
        }
        
        //draw(3), play rock(1)
        if(PARSED[i][2]=="Y"){
            score2 += 4;
        }
        
        //win(6), play paper(2)
        if(PARSED[i][2]=="Z"){
            score2 += 8;
        }
    }
    
    //elf plays paper
    if(PARSED[i][0]=="B"){
        
        //lose(0), play rock(1)
        if(PARSED[i][2]=="X"){
            score2 += 1;
        }
        
        //draw(3),play paper(2)
        if(PARSED[i][2]=="Y"){
            score2 += 5;
        }
        
        //win(6), play scissors(3)
        if(PARSED[i][2]=="Z"){
            score2 += 9;
        }
    }
    
    //elf plays scissors
    if(PARSED[i][0]=="C"){
        
        //lose(0), play paper(2)
        if(PARSED[i][2]=="X"){
            score2 += 2;
        }
        
        //draw(3), play scissors(3)
        if(PARSED[i][2]=="Y"){
            score2 += 6;
        }
        
        //win(6), play rock(1)
        if(PARSED[i][2]=="Z"){
            score2 += 7;
        }
    }
}

console.log("part 2: "+score2);