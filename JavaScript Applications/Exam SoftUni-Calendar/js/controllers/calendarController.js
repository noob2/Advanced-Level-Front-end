var app = app || {};

app.calendarController = (function () {
    function CalendarController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    CalendarController.prototype.loadAllLectures = function () {
        this._viewBag.showAllLectures();

        this._model.getAllLectures()
            .then(function (successData) {
                $('#calendar').fullCalendar({
                    theme: false,
                    header: {
                        left: 'prev,next today addEvent',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    defaultDate: '2016-01-12',
                    selectable: false,
                    editable: false,
                    eventLimit: true,
                    events: successData,
                    customButtons: {
                        addEvent: {
                            text: 'Add Event',
                            click: function () {
                                Sammy(function () {
                                    this.trigger('redirectUrl', {url: '#/calendar/add'});
                                });
                            }
                        }
                    },
                    eventClick: function (calEvent, jsEvent, view) {
                        $.get('templates/modal.html', function (templ) {
                            var rendered = Mustache.render(templ, calEvent);
                            $('#modal-body').html(rendered);
                        });
                        $('#events-modal').modal();
                    }
                });
            }).done();
    };

    CalendarController.prototype.addLecture = function (data) {
        this._model.uploadLecture(data)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/calendar/list'});
                })
            })
    };

    CalendarController.prototype.editLecture = function (data) {
        this._model.editLecture(data)
            .then(function () {

                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/calendar/my'});
                })
            })
    };

    CalendarController.prototype.deleteLecture = function (data) {
        this._model.deleteLecture(data)
            .then(function () {
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/calendar/my'});
                })
            })
    };

    CalendarController.prototype.showEditLecture = function (id) {
        var _this = this;
        this._model.getLectureById(id)
            .then(function (successData) {
                _this._viewBag.showEditLecture(successData);
            });
    };

    CalendarController.prototype.showDeleteLecture = function (id) {
        var _this = this;
        this._model.getLectureById(id)
            .then(function (successData) {
                _this._viewBag.showDeleteLecture(successData);
            });
    };

    CalendarController.prototype.loadMyLectures = function () {

        this._viewBag.showMyLectures();
        this._model.getMyLectures()
            .then(function (successData) {
                $('#calendar').fullCalendar({
                    theme: false,
                    header: {
                        left: 'prev,next today addEvent',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    defaultDate: '2016-01-12',
                    selectable: false,
                    editable: false,
                    eventLimit: true,
                    events: successData,
                    customButtons: {
                        addEvent: {
                            text: 'Add Event',
                            click: function () {
                                Sammy(function () {
                                    this.trigger('redirectUrl', {url: '#/calendar/add'});
                                });
                            }
                        }
                    },
                    eventClick: function (calEvent, jsEvent, view) {
                        $.get('templates/modal.html', function (templ) {
                            var rendered = Mustache.render(templ, calEvent);
                            $('#modal-body').html(rendered);
                            $('#editLecture').on('click', function () {
                                Sammy(function () {
                                    this.trigger('redirectUrl', {url: '#/calendar/edit/' + calEvent._id})
                                });
                            });
                            $('#deleteLecture').on('click', function () {
                                //TODO: redirect to delete event page
                                Sammy(function () {
                                    this.trigger('redirectUrl', {url: '#/calendar/delete/' + calEvent._id})
                                });
                            })
                        });
                        $('#events-modal').modal();
                    }
                });
            }).done();
    };


    return {
        load: function (model, viewBag) {
            return new CalendarController(model, viewBag);
        }
    }
}());