document.getElementById("button").addEventListener('click', validate);

function validate() {
    var value = document.getElementById("textarea").value;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var div = document.getElementById("teaxtarea-validator");
    div.innerHTML = value;
    if (re.test(value)) {
        div.style.backgroundColor = "green";
    } else {
        div.style.backgroundColor = "red";
    }
}