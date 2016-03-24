var app = app || {};

app.userViews = (function () {
    function UserViews (selector, navigationSelector){
        this._selector = selector;
        this._navigationSelector = navigationSelector;
    }

    UserViews.prototype.showLoginPage = function () {
        var _this = this;
        $.get('templates/login.html', function(templ){
            $(_this._selector).html(templ);
            $('#login-button').on('click', function (e) {
                var username = $('#username').val(),
                    password = $('#password').val();
                Sammy(function () {
                    this.trigger('login', {username: username, password: password});
                })
            })
        })
    };

    UserViews.prototype.showRegisterPage = function() {
        var _this = this;
        $.get('templates/register.html', function (templ) {
            $(_this._selector).html(templ);
            $('#register-button').on('click', function () {
                var username = $('#username').val(),
                    password = $('#password').val(),
                    confirmPassword = $('#confirm-password').val();
                Sammy(function () {
                    this.trigger('register', {username: username, password: password, confirmPassword: confirmPassword});
                })
            })
        })
    };

    UserViews.prototype.showWelcomePage = function () {
        var _this = this;
        $.get('templates/welcome-guest.html', function (templ) {
            $(_this._selector).html(templ);
            $('#login').on('click', function () {
                Sammy(function () {
                    this.trigger('redirectUrl', {url: '#/login'});
                })
            });
        });
        $.get('templates/menu-login.html', function (templ) {
            $(_this._navigationSelector).html(templ);
        })
    };

    UserViews.prototype.showMyHomePage = function() {
        var _this = this;
        $.get('templates/welcome-user.html', function (templ) {
            var rendered = Mustache.render(templ, {username:sessionStorage['username']});
            $(_this._selector).html(rendered);
        });
        $.get('templates/menu-home.html', function (templ) {
            $(_this._navigationSelector).html(templ);

        });
    };

    return {
        load: function(selector, navigationSelector){
            return new UserViews(selector, navigationSelector);
        }
    }
})();