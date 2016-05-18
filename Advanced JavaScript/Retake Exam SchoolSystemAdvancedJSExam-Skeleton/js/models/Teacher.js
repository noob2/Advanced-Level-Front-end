var app = app || {};

(function (schoolSystem) {
    function Teacher(name, teachingSubject) {
        schoolSystem.Human.call(this, name);
        this._teachingSubject = setTeachingSubject(teachingSubject);
    }

    Teacher.extends(schoolSystem.Human);

    //private
    function setTeachingSubject(teachingSubject) {
        if (teachingSubject == null || schoolSystem.Subject.isValidSubject(teachingSubject)) {
            return teachingSubject;
        } else {
            throw new Error('invalid subject');
        }
    }

    //public
    Teacher.prototype.addGradeToStudent = function (student, gradeParams) {
        if (this._teachingSubject != null) {
            gradeParams.subject = this._teachingSubject;
        }
        if (student instanceof schoolSystem.Student) {
            student.addGrade(gradeParams);
        } else {
            throw new Error('invalid student');
        }
    };

    schoolSystem.Teacher = Teacher;
}(app));