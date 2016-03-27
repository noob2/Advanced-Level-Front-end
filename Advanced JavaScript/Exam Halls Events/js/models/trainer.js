var app = app || {};

(function(app) {
    function Trainer(name, workHours) {
        app.employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(app.employee);

    Trainer.prototype.addFeedback = function(feedback) {
        Validator.validateString(feedback);
        this.feedbacks.push(feedback);
    };
    Trainer.prototype.addCourse = function(course) {
        Validator.validateCourse(course);
        this.courses.push(course);
    };

    app.trainer = Trainer;

}(app));