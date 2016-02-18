function solve(input){
    var wordPattern = /[A-Za-z]+/g;
    var matches = input[0].match(wordPattern);

    var uniqueRepeatingWords = {}
    for (var i = 3; i < matches.length; i++) {

        var occurance = 0;
        for (var j = 0; j < matches.length; j++) {
            if (matches[i].toLowerCase() === matches[j].toLowerCase()) {
                occurance++;
            }
        }
        if (occurance >= 3) {
            uniqueRepeatingWords[matches[i].toLowerCase()] = null;
        }
    }
    var sentencePattern = /\n|([^\r\n.!?]+([.!?]+|$))/gim;
    var sentences = input[1].match(sentencePattern);

    var keys = [];
    for (var key in uniqueRepeatingWords) {
        if (uniqueRepeatingWords.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    if (keys.length == 0) {
        console.log("No words");
    } else {
        var hasMatchedSentence = false;
        for (var i = 0; i < sentences.length; i++) {
            var sentenceWords = sentences[i].match(wordPattern);
            var matchedWords = 0;
            for(var k = 0; k < sentenceWords.length;k++){
                for (var j = 0; j < keys.length; j++) {
                    if (sentenceWords[k].toLowerCase() === keys[j].toLowerCase()) {
                        matchedWords++;
                    }
                }
            }

            if (matchedWords >= 2) {
                console.log(sentences[i].trim());
                hasMatchedSentence = true;
            }
        }
        if (!hasMatchedSentence) {
            console.log("No sentences");
        }
    }
}

var input = ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
        "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]
    ;

solve(input);