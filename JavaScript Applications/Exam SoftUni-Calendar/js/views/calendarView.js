var app = app || {};

app.calendarView = (function () {
    function CalendarView(selector, navigationSelector) {
        this._selector = selector;
        this._navigationSelector = navigationSelector;
    }

    CalendarView.prototype.showAllLectures = function () {
        var _this = this;
        $.get('templates/menu-home.html', function (templ) {
            $(_this._navigationSelector).html(templ);
        });

        $.get('templates/calendar.html', function (templ) {
            $(_this._selector).html(templ);
            $('#editLecture').hide();
            $('#deleteLecture').hide();
        });
    };

    CalendarView.prototype.showMyLectures = function () {
        var _this = this;
        $.get('templates/menu-home.html', function (templ) {
            $(_this._navigationSelector).html(templ);
        });

        $.get('templates/calendar.html', function (templ) {
            $(_this._selector).html(templ);
        });
    };

    CalendarView.prototype.loadAddLecture = function () {
        var _this = this;
        $.get('templates/add-lecture.html', function (templ) {
            $(_this._selector).html(templ);
            $('#addLecture').on('click', function () {
                var title = $('#title').val(),
                    start = $('#start').val(),
                    end = $('#end').val(),
                    lecturer = sessionStorage['username'];
                Sammy(function () {
                    this.trigger('addLecture', {
                        title: title,
                        start: start,
                        end: end,
                        lecturer: lecturer
                    });
                })
            });
        });
    };

    CalendarView.prototype.showEditLecture = function (lecture) {
        var _this = this;
        $.get('templates/menu-home.html', function (templ) {
            $(_this._navigationSelector).html(templ);
        });

        $.get('templates/edit-lecture.html', function (templ) {
            var rendered = Mustache.render(templ, lecture);
            $(_this._selector).html(rendered);

            $('#editLecture').on('click', function () {
                lecture.title = $('#title').val();
                lecture.start = $('#start').val();
                lecture.end = $('#end').val();

                Sammy(function () {
                    this.trigger('editLecture', lecture)
                })
            })
        });

        $.get('templates/edit-lecture.html', function (templ) {

            $(this._selector).html(templ);

            $('#editLecture').on('click', function () {
                var title = $('#title').val(),
                    start = $('#start').val(),
                    end = $('#end').val(),
                    username = sessionStorage['username'];
                $('#events-modal').on('hidden.bs.modal', function () {
                    Sammy(function () {
                        this.trigger('editLecture', {title: title, start: start, end: end, username: username});
                    });
                });

            });
        });
    };

    CalendarView.prototype.showDeleteLecture = function (lecture) {
        var _this = this;
        $.get('templates/menu-home.html', function (templ) {
            $(_this._navigationSelector).html(templ);
        });

        $.get('templates/delete-lecture.html', function (templ) {
            var rendered = Mustache.render(templ, lecture);
            $(_this._selector).html(rendered);

            $('#deleteLecture').on('click', function () {
                Sammy(function () {
                    this.trigger('deleteLecture', lecture)
                })
            })
        });

        $.get('templates/edit-lecture.html', function (templ) {

            $(_this._selector).html(templ);

            $('#editLecture').on('click', function () {
                var title = $('#title').val(),
                    start = $('#start').val(),
                    end = $('#end').val(),
                    username = sessionStorage['username'];
                $('#events-modal').on('hidden.bs.modal', function () {
                    Sammy(function () {
                        this.trigger('editLecture', {title: title, start: start, end: end, username: username});
                    });
                });
            });
        });
    };

    return {
        load: function (selector, navigationSelector) {
            return new CalendarView(selector, navigationSelector);
        }
    }
}());