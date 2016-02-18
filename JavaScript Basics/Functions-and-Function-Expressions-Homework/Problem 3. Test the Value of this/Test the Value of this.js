var testContext = function () {
    return this;
}

console.log(testContext());
console.log("----------------------------------------------------");
console.log(function(){return testContext()});
console.log("----------------------------------------------------");
console.log(new testContext());