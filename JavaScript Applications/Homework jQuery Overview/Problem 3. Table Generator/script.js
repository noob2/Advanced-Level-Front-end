var JSONString = '[{"manufacturer":"BMW","model":"E92","year":2011,"price":50000,"class":"Family"},' +
    '{"manufacturer":"Porsche","model":"Panamera","year":2019,"price":500000,"class":"Sport"},' +
    '{"manufacturer":"Pegeot","model":"305","year":1970,"price":1000,"class":"Family"}]';

var cars = JSON.parse(JSONString);

$.each(cars, function (i, item) {
    var tableBody = $('<tr>').append(
        $('<td>').text(item.manufacturer),
        $('<td>').text(item.model),
        $('<td>').text(item.year),
        $('<td>').text(item.price),
        $('<td>').text(item.class)
    );
    tableBody.appendTo('tbody');
});
