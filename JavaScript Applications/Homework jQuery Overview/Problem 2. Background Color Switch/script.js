var button = $('label > button')[0];
button.addEventListener('click', changeColor);

function changeColor() {
    var className = '.' + $('#className').val();
    var colorOfClass = $('#backgroundColor').val();
    var theList = $(className);

    theList.each(function () {
        $(this).css("background-color", colorOfClass);
    })
}

