var app = app || {};

app.userController = (function(){
    function UserController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    UserController.prototype.showLoginPage = function (selector) {
        this._viewBag.showLoginPage(selector);
    };

    UserController.prototype.login = function (data) {
        this._model.login(data)
            .then(function (successData) {
                sessionStorage['sessionAuth'] = successData._kmd.authtoken;
                sessionStorage['userId'] = successData._id;
                sessionStorage['username'] = successData.username;
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/welcomeHome'});
                })
            }).done();
    };

    UserController.prototype.showRegisterPage = function (selector) {
        this._viewBag.showRegisterPage(selector);
    };

    UserController.prototype.register = function (data) {
        if(data.password == data.confirmPassword){
            this._model.register(data)
                .then(function (successData) {
                    sessionStorage['sessionAuth'] = successData._kmd.authtoken;
                    sessionStorage['userId'] = successData._id;
                    sessionStorage['username'] = successData.username;
                    Sammy(function () {
                        this.trigger('redirectUrl', {url: '#/welcomeUser'});
                    })
                }).done();
        }
    };

    UserController.prototype.showHomePage = function(){
        this._viewBag.showHomePage();
    };

    UserController.prototype.logout = function () {
        this._model.logout()
            .then(function () {
                sessionStorage.clear();
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/'});
                })
            }).done();
    };

    return {
        load: function (model, viewBag) {
            return new UserController(model, viewBag);
        }
    }
}());