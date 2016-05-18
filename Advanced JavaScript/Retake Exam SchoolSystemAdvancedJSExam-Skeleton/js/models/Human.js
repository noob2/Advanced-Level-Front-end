var app = app || {};

(function (schoolSystem) {
    function Human(name) { //abstract class
        if (this.constructor === Event) {
            throw new Error('Cannot instantiate abstract class');
        }
        this._name = setName(name);
    }

    //private
    function setName(name) {
        var pat = /^[A-Za-z ]+$/g;
        if (pat.test(name)) {
            return name;
        } else {
            throw new Error('invalid name');
        }
    }

    //public
    Human.prototype.getName = function () {
        return this._name;
    };

    schoolSystem.Human = Human;
}(app));