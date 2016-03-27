var app = app || {};

(function(app) {
    function Employee(name ,workHours) {
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.setName = function (name) {
        Validator.validateString(name);
        this._name = name;
    };
    Employee.prototype.getName = function () {
        return this._name;
    };

    Employee.prototype.setWorkHours = function (workHours) {
        Validator.validateNumber(workHours);
        this._workHors = workHours;
    };
    Employee.prototype.getWorkhours = function () {
        return this._workHors;
    };

    app.employee = Employee;

}(app));