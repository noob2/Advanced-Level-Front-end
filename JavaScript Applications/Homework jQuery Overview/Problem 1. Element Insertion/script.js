function addElementBefore(id,content) {
    var tag = $('#'+id).get(0).tagName;
    $('<'+tag+'>').text(content).insertBefore('#'+id);
}

function addElementAfter(id,content) {
    var tag = $('#'+id).get(0).tagName;
    $('<'+tag+'>').text(content).insertAfter('#'+id);

}
addElementBefore('third','before element');
addElementAfter('fifth','after element');