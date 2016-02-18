var Item = (function () {
    function Item(content, status) {

        this._content = content;
        this._status = status;

        Item.prototype.addToDOM = function (father) {

            var checkboxDiv = document.createElement("additionalOptions");
            checkboxDiv.setAttribute("id", "checkboxDiv");

            var checkbox = document.createElement('input');
            checkbox.setAttribute("type", "checkbox");
            checkboxDiv.appendChild(checkbox);

            var text = document.createElement('label');
            text.innerHTML = content;
            checkboxDiv.appendChild(text);

            father.appendChild(checkboxDiv);

            changeColour();

            checkbox.addEventListener('click', changeColour);

            function changeColour() {
                if (checkbox.checked) {
                    checkboxDiv.style.backgroundColor = "purple";
                } else {
                    checkboxDiv.style.backgroundColor = "green";
                }
            }
        };
    }

    return Item;
}());