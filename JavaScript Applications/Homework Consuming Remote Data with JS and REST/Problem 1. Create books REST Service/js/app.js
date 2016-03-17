refreshBooks();

$('#add-book')[0].addEventListener('click',function(){
    var bookTitle = $('#book-title')[0];
    var bookAuthor = $('#book-author')[0];
    var bookIsbn = $('#book-isbn')[0];
    createBook(bookTitle.value,bookAuthor.value,bookIsbn.value);
});

$('#change-book')[0].addEventListener('click',function(){
    var bookTitle = $('#new-book-title')[0];
    var bookAuthor = $('#new-book-author')[0];
    var bookIsbn = $('#new-book-isbn')[0];
    editBook(bookTitle.value,bookAuthor.value,bookIsbn.value);
});

$('#delete-book')[0].addEventListener('click',function(){
    var bookId = $('#change-book').attr('_id');
    deleteBook(bookId);
});