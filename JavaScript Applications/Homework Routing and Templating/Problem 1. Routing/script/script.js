var app = app || {};
(function() {
    app.router = Sammy(function () {
        var selector = '#wrapper > h2';
        var helloMsg = 'Hello, ';

        this.get('#/', function() {
            $(selector).html('Select Someone...');
        });
        this.get('#/Viktor', function() {
            $(selector).html(helloMsg+'Viktor');
        });
        this.get('#/Joni', function() {
            $(selector).html(helloMsg+'Joni');
        });
        this.get('#/Pe6o', function() {
            $(selector).html(helloMsg + 'Pe6o');
        });
        this.get('#/Stanka', function() {
            $(selector).html(helloMsg + 'Stanka');
        });
    });
    app.router.run('#/');
}());