var arrayOfObjects = [
    "Pesho",
    4,
    4.21,
    {name: 'Valyo', age: 16},
    {type: 'fish', model: 'zlatna ribka'},
    [1, 2, 3],
    "Gosho",
    {name: 'Penka', height: 1.65}
];

function extractObjects(array) {
    var arrayToReturn = [];
    for (var i = 0; i < array.length; i++) {
        if (!(typeof (array[i]) !== "object" || Array.isArray(array[i]))) {
            arrayToReturn.push(array[i]);
        }
    }
    return arrayToReturn;
}

var extractedArray = extractObjects(arrayOfObjects);

console.log(extractedArray);