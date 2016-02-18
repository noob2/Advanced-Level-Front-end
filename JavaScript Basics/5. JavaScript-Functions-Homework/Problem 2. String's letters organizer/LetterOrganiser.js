var inputString = 'HelloWorld';

function sortLetters(string,bolean){
    var charArrayToSort = string.split('');

    charArrayToSort.sort(function(a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    });

    if(bolean){
        return charArrayToSort.join("");
    }
    else {
        charArrayToSort.reverse();
        return charArrayToSort.join("");
    }

}

var sortedString = sortLetters(inputString,false);

console.log(sortedString);