var app = app || {};

(function (schoolSystem) {
    var gradeService = new schoolSystem.GradeService;
    var studentSelector = $("#student-selector");

    schoolSystem.students.forEach(function (student) {
        var option = document.createElement("option");
        option.innerHTML = student.getName();
        document.getElementById("student-selector").appendChild(option);
    });

    studentSelector.change(function () {
        var value = $(this).val();
        if (value != "null") {
            loadGradesForStudent($(this).val());
        }
    });

    function loadGradesForStudent(studentName) {
        function findStudentByName(student) {
            return student.getName() == studentName;
        }

        var student = schoolSystem.students.find(findStudentByName);
        var grades = gradeService.getGrades(student);
        $.get("templates/list-grades.html", function (template) {
            $("#grades").html(Mustache.render(template, {Grades: grades}))
        })
    }
}(app));