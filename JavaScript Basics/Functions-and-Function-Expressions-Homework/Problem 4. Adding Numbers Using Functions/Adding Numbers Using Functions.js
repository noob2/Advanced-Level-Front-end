function add(n) {
    var v = function (x) {
        return add(n + x);
    };

    v.valueOf = v.toString = function () {
        return n;
    };

    return v;
}

var a = +add(2);
console.log(a); //2

var b = add(2);
console.log(+b(3)(5)(1)(7)); //18