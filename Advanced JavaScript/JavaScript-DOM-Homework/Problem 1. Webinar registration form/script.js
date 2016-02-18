var additionalOptions = document.getElementById("additional-options");
var checkbox = document.getElementById("checkbox");
changeHandler();
checkbox.addEventListener('click', changeHandler);

function changeHandler() {

    if (checkbox.checked) {
        additionalOptions.style.visibility = 'visible';
    }
    else {
        additionalOptions.style.visibility = 'hidden';
    }
}