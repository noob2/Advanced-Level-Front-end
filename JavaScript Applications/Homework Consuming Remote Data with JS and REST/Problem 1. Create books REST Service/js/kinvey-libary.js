var url = 'https://baas.kinvey.com/appdata/kid_-ycTI6Ul1b/books';
var lastClickedCountryId;

$.ajaxSetup({
    headers: {
        'Authorization': 'Basic cGVzaG86MTIzNA=='
    }
});

refreshBooks = function () {
    $.ajax({
        url: url,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            var book, $bookList;

            $bookList = $('<ul/>').addClass('book-list');
            for (var i = 0; i < data.length; i++) {
                book = data[i];

                var li = $('<li />')
                    .attr({"id" : book._id})
                    .addClass('book-item')
                    .append($('<b /> ')
                        .html(book.title))
                    .append($('<b />')
                        .html(book.author))
                    .append($('<b />')
                        .html(book.isbn));

                li[0].addEventListener('click',function(){
                    var title = this.childNodes[0].innerHTML;
                    var author = this.childNodes[1].innerHTML;
                    var isbn = this.childNodes[2].innerHTML;

                    $('#new-book-title')[0].value = title;
                    $('#new-book-author')[0].value = author;
                    $('#new-book-isbn')[0].value = isbn;
                    $('#change-book').attr({"_id" : this.id});
                });
                li.appendTo($bookList);
            }
            $('#book-container').html($bookList);
        },
        error: function (err) {
            $errorMessage
                .html("Error happened: " + err)
                .show()
                .fadeOut(2000);
        }
    });
};

createBook = function (title,author,isbn) {
    return $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify({"title": title,"author":author,"isbn":isbn}),
        contentType: 'application/json',
        success: function (data) {
            refreshBooks();
        },
        error: function (err) {
            console.error(err);
        }
    });
};

editBook = function (title, author, isbn) {
    return $.ajax({
        url: url + '/' + $('#change-book').attr('_id'),
        type: 'PUT',
        data: JSON.stringify({"title": title,"author":author,"isbn":isbn}),
        contentType: 'application/json',
        success: function (data) {
            refreshBooks();
        },
        error: function (err) {
            console.error(err);
        }
    });
};

deleteBook = function (id) {
    return $.ajax({
        url: url + '/' + id,
        type: 'DELETE',
        success: function (data) {
            refreshBooks();
        },
        error: function (err) {
            console.error(err);
        }
    });
};