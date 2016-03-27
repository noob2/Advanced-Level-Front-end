var app = app || {};

(function (app) {
    function Hall(name, capacity) {
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.addEvent = function (event) {
        if (event instanceof app.party) {
            this.parties.push(event);
        }
        else if (event instanceof app.lecture) {
            this.lectures.push(event);
        }
        else {
            throw new Error(event + " should be a Party or a Lecture.");
        }
    };

    Hall.prototype.setName = function (name) {
        Validator.validateString(name);
        this._name = name;
    };
    Hall.prototype.getName = function () {
        return this._name;
    };

    Hall.prototype.setCapacity = function (capacity) {
        Validator.validateNumber(capacity);
        this._capacity = capacity;
    };
    Hall.prototype.getCapacity = function () {
        return this._capacity;
    };

    app.hall = Hall;
}(app));