var app = app || {};

(function (schoolSystem) {
    function Semester(name) {
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
    Semester.prototype.getName = function () {
        return this._name;
    };

    schoolSystem.Semester = Semester;
}(app));