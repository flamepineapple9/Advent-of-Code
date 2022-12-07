var input = ``;
var PARSED = input.split(/\n/);

var master = [];
for(var inputIndex = 0; inputIndex < input.length; inputIndex++){
    
    //this means that input line is a cmd
    if(input[inputIndex] == "$"){
        
    }
}


class Directory {
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

class File {
    constructor(name, size){
        this.name = name;
        this.size = size;
    }

    printName(){
        console.log(this.name);
    }
    printSize(){
        console.log(this.size);
    }

}

var newFile = new File("testFile", 123456);
newFile.printSize();
newFile.printName();