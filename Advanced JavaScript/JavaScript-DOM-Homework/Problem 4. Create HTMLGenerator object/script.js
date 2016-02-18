var HTMLGen = (function () {

    function createParagraph(id, text) {
        var element = document.getElementById(id);
        var paragraph = document.createElement('p');
        paragraph.innerText = text;
        element.appendChild(paragraph);
    }

    function createDiv(id, className) {
        var element = document.getElementById(id);
        var divElement = document.createElement('div');
        divElement.setAttribute('class', className);
        element.appendChild(divElement);
    }

    function createLink(id, text, url) {
        var element = document.getElementById(id);
        var linklElement = document.createElement('a');
        linklElement.setAttribute('href', url);
        linklElement.innerText = text;
        element.appendChild(linklElement);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    };

}());

HTMLGen.createParagraph('wrapper', 'Some Text');
HTMLGen.createDiv('wrapper', 'Other Text');
HTMLGen.createLink('book', 'Book Title', 'http://google.com');