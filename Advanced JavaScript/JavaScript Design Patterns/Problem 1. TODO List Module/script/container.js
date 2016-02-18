var Container = (function () {
    var sections = [];

    return {
        addToDOM: function (father) {
            var header = document.createElement("h1");
            header.innerHTML = "TODO LIST";
            father.appendChild(header);

            var container = document.createElement('additionalOptions');
            container.setAttribute("id", "container");
            father.appendChild(container);

            var input = document.createElement('input');
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "Title...");
            father.appendChild(input);

            var button = document.createElement('button');
            button.setAttribute("id", "addSection");
            button.innerHTML = "New Section";
            father.appendChild(button);

            button.addEventListener('click', addSectionInsideContainer);
            function addSectionInsideContainer() {
                if (input.value !== "") {
                    var section = new Section(input.value);
                    input.value = "";
                    sections.push(section);
                    section.addToDOM(container);
                }
            }
        }
    };
}());


const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
