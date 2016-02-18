String.prototype.startsWith = function startsWith(key) {
    var index = this.indexOf(key);

    return index === 0;
};

String.prototype.endsWith = function endsWith(key) {
    var index = this.indexOf(key);

    return index === this.length - key.length;
};

String.prototype.left = function left(count) {
    if (count >= this.length) {
        return this.toString();
    }
    else {
        return this.substr(0, count);
    }
};

String.prototype.right = function right(count) {
    if (count >= this.length) {
        return this.toString();
    }
    else {
        return this.substr(this.length - count, count)
    }
};

String.prototype.padLeft = function padLeft() {
    var char = arguments[1] || ' ';
    var count = arguments[0];
    return char.repeat(count) + this;
};

String.prototype.padRight = function padRight() {
    var char = arguments[1] || ' ';
    var count = arguments[0];
    return this + char.repeat(count);
};

String.prototype.repeat = function repeat(count) {
    return new Array(count + 1).join(this);
};


var example = "Thiis is an example string used only for demonstration purposes.";
console.log(example.startsWith("Thiis"));
console.log(example.endsWith("s."));
console.log(example.left(53453));
console.log(example.right(4));
console.log(example.repeat(4));