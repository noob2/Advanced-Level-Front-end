function sayAyo() {
    console.log("me say day oh");
}

var domModule = (function () {
    return {
        appendChild: function (child, parent) {
            var parentElement = document.querySelector(parent);
            if (parentElement != null
                && parentElement != undefined
                && child.nodeType === Node.ELEMENT_NODE) {
                parentElement.appendChild(child);
            }
        },

        removeChild: function (child, parent) {
            var parentElement = document.querySelector(parent);
            var childElement = document.querySelector(child);
            if (parentElement != null
                && parentElement != undefined
                && childElement != null
                && childElement != undefined) {
                parentElement.removeChild(childElement);
            }
        },

        retrieveElements: function (selector) {
            return document.querySelectorAll(selector);
        },

        addHandler: function (selector, eventType, eventHandler) {
            var elements = document.querySelectorAll(selector);
            var i, element;
            for (i = 0; i < elements.length; i++) {
                element = elements[i];
                if (element != null && element != undefined) {
                    element.addEventListener(eventType, eventHandler, false);
                }
            }
        }
    }
}());