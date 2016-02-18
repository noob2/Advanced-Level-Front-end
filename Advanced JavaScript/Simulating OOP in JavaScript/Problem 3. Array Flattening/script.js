Array.prototype.flatten = function flatten() {
    var result = [];

    function recursiveArrTraverse(arr) {
        for (var index in arr) {
            if (Array.isArray(arr[index])) {
                recursiveArrTraverse(arr[index]);
            } else {
                result.push(arr[index]);
            }
        }
        result.splice(result.length - 1, 1);
    }

    recursiveArrTraverse(this);
    return result;
};

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
