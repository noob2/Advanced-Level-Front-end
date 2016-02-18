var Section = (function () {
    function Section(name) {
        this._name = name;

        var items = [];

        Section.prototype.addToDOM = function (father) {

            var section = document.createElement('section');

            var sectionHeader = document.createElement('h3');
            sectionHeader.innerHTML = name;
            section.appendChild(sectionHeader);

            father.appendChild(section);

            var sectionInput = document.createElement('input');
            sectionInput.setAttribute("placeholder", "Add Item...");
            father.appendChild(sectionInput);

            var sectionButton = document.createElement('button');
            sectionButton.innerHTML = "+";
            father.appendChild(sectionButton);

            sectionButton.addEventListener('click', addItemInsideContainer);

            function addItemInsideContainer() {
                if (sectionInput.value !== "") {
                    var item = new Item(sectionInput.value, false);
                    sectionInput.value = "";
                    items.push(item);
                    item.addToDOM(section);
                }
            }
        };
    }

    return Section;
}());