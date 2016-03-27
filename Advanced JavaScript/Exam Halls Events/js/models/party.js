var app = app || {};

(function(app) {
    function Party(options) {
        app.event.call(this, options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(app.event);

    Party.prototype.setIsCatered = function(boolValue) {
        Validator.validateBool(boolValue);
        this._isCatered = boolValue;
    };
    Party.prototype.getIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsBirthday = function(boolValue) {
        Validator.validateBool(boolValue);
        this._isBirthday = boolValue;
    };
    Party.prototype.getIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setOrganiser = function(employee) {
        Validator.validateEmployee(employee);
        this._organiser = employee;
    };
    Party.prototype.getOrganiser = function() {
        return this._organiser;
    };

    app.party = Party;

}(app));