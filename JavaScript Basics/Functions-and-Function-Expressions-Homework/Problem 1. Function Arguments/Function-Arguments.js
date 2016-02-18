function printArgsInfo() {
    for(var i =0 ; i< arguments.length;i++){
        console.log(arguments[i] +"("+typeOf(arguments[i])+")");
    }
}

function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
