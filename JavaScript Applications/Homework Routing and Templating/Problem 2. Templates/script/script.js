var app = app || {};
(function() {
    $.get('table-template-mustache.html', function (template) {
        var json = {
            "footer": "Simple Template",
            "items": [
                { "name": 'Pesho', "jobTitle": 'c# programmer', "website" :'www.google.bg' },
                { "name": 'Gosho', "jobTitle": 'c++ programmer', "website": 'www.google.com'},
                { "name": 'Minka', "jobTitle": 'javaScript programmer', "website": 'www.google.de'}
            ]
        };
        var output = Mustache.render(template, json);
        $('#wrapper').html(output);
    })
}());