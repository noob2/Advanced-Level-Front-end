var mixedArray = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

function ArrayManipulator(array) {

    var filteredArray = array.filter(FilterNumbers);
    filteredArray.sort(function (a, b) {
        return b - a
    });

    var min = Math.min.apply(null, filteredArray);
    var max = Math.max.apply(null, filteredArray);
    var mostFrequent = MostFrequentNumber(filteredArray);

    console.log("Min number:" + min);
    console.log("Max number:" + max);
    console.log("Most frequent number:" + mostFrequent);
    console.log(filteredArray);
}

function FilterNumbers(array) {
    return typeof (array) === "number";
}

function MostFrequentNumber(array) {//works only with sorted array

    var currentSequence = 1;
    var maxSequence = 1;
    var maxSequencePosition = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] === array[i]) {
            currentSequence++;
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
                maxSequencePosition = i;
            }
        }
        else {
            currentSequence = 1;
        }
    }

    return array[maxSequencePosition];
}

ArrayManipulator(mixedArray);