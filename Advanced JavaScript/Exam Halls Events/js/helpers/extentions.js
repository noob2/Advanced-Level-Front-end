Function.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.init = this;
};

var Validator = {

    validateString: function (string) {
        var regex = /^[a-zA-Z\s]+$/i;
        var isOnlyLetters = regex.test(string);

        if (!isOnlyLetters) {
            throw new SyntaxError('A string should have only letters and whitespace');
        }
    },
    validateNumber: function (number, variableName) {
        if (typeof (number) != 'number') {
            throw new Error(variableName + " should be a number.");
        }
        if (number !== parseInt(number, 10)) {
            throw new Error(variableName + " should be integer.");
        }
    },
    validateDate: function (date) {
        if (!(date instanceof Date)) {
            throw new Error("this is not a date.");
        }
    },
    validateCourse: function (course){
        if (!(course instanceof app.course)) {
            throw new Error("this is not a course.");
        }
    },
    validateTrainer: function (trainer){
        if (!(trainer instanceof app.trainer)) {
            throw new Error("this is not a trainer.");
        }
    },
    validateEmployee: function (employee){
        if(!(employee instanceof app.employee)){
            throw new Error("this is not a employee.");
        }
    },
    validateBool: function (boolValue){
        if(typeof(boolValue) !== "boolean"){
            throw new Error("this is not a boolean value.");
        }
    }
};