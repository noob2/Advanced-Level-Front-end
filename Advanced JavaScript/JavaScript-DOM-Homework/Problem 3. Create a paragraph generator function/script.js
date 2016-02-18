function createParagraph(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = '<p>' + text + '</p>';
}

createParagraph('wrapper', 'some text inside the \"#wrapper\"');