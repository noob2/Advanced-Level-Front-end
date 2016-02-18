function solve(arr) {

    var gold = 0;
    var silver = 0;
    var diamonds = 0;

    var regexPattern = /mine.+\-\s+(silver|gold|diamonds)\s*:\s+(\d+)/i;

    for (var i = 0; i < arr.length; i++) {
        var matches = regexPattern.exec(arr[i]);
        if (matches !== null) {
            if (matches[1] === "gold") {
                gold += parseInt(matches[2]);
            }
            else if (matches[1] === "silver") {
                silver += parseInt(matches[2]);
            }
            else if (matches[1] === "diamonds") {
                diamonds += parseInt(matches[2]);
            }
        }
    }

    console.log("*Silver: " + silver);
    console.log("*Gold: " + gold);
    console.log("*Diamonds: " + diamonds);
}

var input = [
    "mine bobovDol - gold        : 10",
    "mine medenRudnik - silver: 22",
    "mine chernoMore - shrimps : 24",
    "gold: 50"
];

solve(input);