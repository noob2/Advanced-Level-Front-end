var app = app || {};

(function(app) {
    function Lecture(options) {
        app.event.call(this, options);
        this.setCourse(options.course);
        this.setTrainer(options.trainer);
    }

    Lecture.extends(app.event);

    Lecture.prototype.setCourse = function(course) {
        Validator.validateCourse(course);
        this._course = course;
    };
    Lecture.prototype.getCourse = function() {
        return this._course;
    };

    Lecture.prototype.setTrainer = function(trainer) {
        Validator.validateTrainer(trainer);
        this._trainer = trainer;
    };
    Lecture.prototype.getTrainer = function() {
        return this._trainer;
    };

    app.lecture = Lecture;

}(app));