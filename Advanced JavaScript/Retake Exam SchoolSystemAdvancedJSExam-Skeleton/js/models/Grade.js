var app = app || {};

(function (schoolSystem) {
    function Grade(mark, subject, semester) {
        this._mark = setMark(mark);
        this._subject = setSubject(subject);
        this._semester = setSemester(semester);
    }
    //private
    function setMark(mark) {
        if (typeof mark === 'number') {
            return mark;
        } else {
            throw new Error('invalid mark');
        }
    }

    function setSubject(subject) {
        if (schoolSystem.Subject.isValidSubject(subject)) {
            return subject;
        } else {
            throw new Error('invalid subject');
        }
    }

    function setSemester(semester) {
        if (semester instanceof schoolSystem.Semester) {
            return semester;
        } else {
            throw new Error('invalid semester');
        }
    }

    //public
    Grade.prototype.getSubject = function () {
        return this._subject;
    };
    Grade.prototype.getMark = function () {
        return this._mark;
    };
    Grade.prototype.getSemester = function () {
        return this._semester;
    };

    schoolSystem.Grade = Grade;
}(app));