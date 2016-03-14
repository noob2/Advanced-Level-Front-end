var countryUrl = 'https://baas.kinvey.com/appdata/kid_-ycTI6Ul1b/countries';
var townUrl = 'https://baas.kinvey.com/appdata/kid_-ycTI6Ul1b/towns';
$successMessage = $('.messages .success');
$errorMessage = $('.messages .error');
var lastClickedCountryId;

$.ajaxSetup({
    headers: {
        'Authorization': 'Basic cGVzaG86MTIzNA=='
    }
});

reloadCountries = function () {
    $.ajax({
        url: countryUrl,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            var country, $countryList, i, len;
            $countryList = $('<ul/>').addClass('country-list');
            for (i = 0, len = data.length; i < len; i++) {
                country = data[i];

                var li = $('<li />')
                    .addClass('country-item')
                    .append($('<strong /> ')
                        .html(country.name))
                    .append($('<span />')
                        .html(country._id));
                li[0].addEventListener('click', reloadTowns);
                li.appendTo($countryList);
            }
            $('#country-container').html($countryList);
        },
        error: function () {
            $errorMessage
                .html("Error happened: " + err)
                .show()
                .fadeOut(2000);
        }
    });
};

reloadTowns = function () {
    if(this.firstChild !== undefined){
        lastClickedCountryId = this.firstChild.nextSibling.textContent;
    }
    $.ajax({
        url: townUrl + '?query={"country":{"_type":"KinveyRef","_id":"' + lastClickedCountryId + '","_collection":"countries" }}',
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            var town, $townList, i, len;
            $townList = $('<ul/>').addClass('town-list');
            for (i = 0, len = data.length; i < len; i++) {
                town = data[i];

                $('<li />')
                    .addClass('town-item')
                    .append($('<strong /> ')
                        .html(town.name))
                    .append($('<span />')
                        .html(town._id))
                    .appendTo($townList);
            }
            $('#town-container').html($townList);
        },
        error: function () {
            $errorMessage
                .html("Error happened: " + err)
                .show()
                .fadeOut(2000);
        }
    });
};

addCountry = function (name) {
    return $.ajax({
        url: countryUrl,
        type: 'POST',
        data: JSON.stringify({"name": name}),
        contentType: 'application/json',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully added')
                .show()
                .fadeOut(2000);
            reloadCountries();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }
    });
};

editCountry = function (data, id) {
    return $.ajax({
        url: countryUrl + '/' + id,
        type: 'PUT',
        data: JSON.stringify({"name": data}),
        contentType: 'application/json',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully changed')
                .show()
                .fadeOut(2000);
            reloadCountries();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }
    });
};

deleteCountry = function (id) {
    return $.ajax({
        url: countryUrl + '/' + id,
        type: 'DELETE',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully deleted')
                .show()
                .fadeOut(2000);
            reloadCountries();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }

    });
};

addTown = function (name) {
    return $.ajax({
        url: townUrl,
        type: 'POST',
        data: JSON.stringify({
            "name": name,
            "country": {"_type": "KinveyRef", "_id": lastClickedCountryId, "_collection": "countries"}
        }),
        contentType: 'application/json',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully added')
                .show()
                .fadeOut(2000);
            reloadTowns();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }
    });
};

editTown = function (name, id) {
    return $.ajax({
        url: townUrl + '/' + id,
        type: 'PUT',
        data: JSON.stringify({
            "name": name,
            "country": {"_type": "KinveyRef", "_id": lastClickedCountryId, "_collection": "countries"}
        }),
        contentType: 'application/json',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully changed')
                .show()
                .fadeOut(2000);
            reloadTowns();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }
    });
};

deleteTown = function (id) {
    return $.ajax({
        url: townUrl + '/' + id,
        type: 'DELETE',
        success: function (data) {
            $successMessage
                .html('' + data.name + ' successfully deleted')
                .show()
                .fadeOut(2000);
            reloadTowns();
        },
        error: function (err) {
            $errorMessage
                .html('Error happened: ' + err)
                .show()
                .fadeOut(2000);
        }

    });
};