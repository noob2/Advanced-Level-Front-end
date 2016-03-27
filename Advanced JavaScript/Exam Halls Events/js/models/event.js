var app = app || {};

(function(app) {
    function Event(options) {
        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.setTitle = function(title) {
        Validator.validateString(title);
        this._title = title;
    };
    Event.prototype.getTitle = function() {
        return this._title;
    };

    Event.prototype.setType = function(type) {
        Validator.validateString(type);
        this._type = type;
    };
    Event.prototype.getType = function() {
        return this._type;
    };

    Event.prototype.setDuration = function(duration) {
        Validator.validateNumber(duration,'duration');
        this._duration = duration;
    };
    Event.prototype.getDuration = function() {
        return this._duration;
    };

    Event.prototype.setDate = function(date) {
        Validator.validateDate(date);
        this._date = date;
    };
    Event.prototype.getDate = function() {
        return this._date;
    };

    app.event = Event;

}(app));