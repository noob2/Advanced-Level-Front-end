var app = app || {};

(function (app) {
    function Course(name, numberOfLectures) {
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.setName = function (name) {
        Validator.validateString(name);
        this._name = name;
    };
    Course.prototype.getName = function () {
        return this._name;
    };

    Course.prototype.setNumberOfLectures = function (numberOfLectures) {
        Validator.validateNumber(numberOfLectures);
        this._numberOfLectures = numberOfLectures;
    };
    Course.prototype.getNumberOfLectures = function () {
        return this._numberOfLectures;
    };

    app.course = Course;

}(app));