var app = app || {};

(function (schoolSystem) {
    function Student(name) {
        schoolSystem.Human.call(this, name);
        this._grades = [];
    }

    Student.extends(schoolSystem.Human);

    //public
    Student.prototype.addGrade = function (grade) {
        var thisGrade = new schoolSystem.Grade(grade.mark, grade.subject, grade.semester);

        if (thisGrade instanceof schoolSystem.Grade) {
            this._grades.push(thisGrade);
        } else {
            throw new Error('invalid grade');
        }
    };
    Student.prototype.getGrades = function () {
        return this._grades;
    };

    schoolSystem.Student = Student;
}(app));